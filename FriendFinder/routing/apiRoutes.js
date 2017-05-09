var friends = require('../data/friends');

module.exports = function (app) {

  // Provides all friends - provides JSON
  app.get("/api", function (req, res) {
    return res.json(friends);
  });


  // Search for a specific character - provides JSON
  app.get("/api/:friends", function (req, res) {
    var chosen = req.params.friends;

    // What does this log?
    console.log(chosen);

    // What does this code do?
    for (var i = 0; i < friends.length; i++) {
      if (chosen === friends[i].routeName) {
        return res.json(friends[i]);
      }
    }

    return res.send("No character found");
  });

  app.post("/api/new", function (req, res) {
    var newcharacter = req.body;
    newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();

    console.log(newcharacter);

    friends.push(newcharacter);

    res.json(newcharacter);
  });

}