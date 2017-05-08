// DEPENDENCIES
var express = require("express");
var bodyParser = require("body-parser");
var apiRoutes = require("./app/routing/apiRoutes.js");
var htmlRoutes = require("./app/routing/htmlRoutes.js");


// EXPRESS CONFIGURATION
var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ROUTER
htmlRoutes(app);
apiRoutes(app);

// LISTENER
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
