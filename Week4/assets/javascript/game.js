var wins = 0;
var losses = 0;
var score = 0;
var computerChoice = Math.floor(Math.random() * 100 + 1) + 50;
var randomNumbers = [];

for (var i = 0; i < 4; i++) {
    randomNumbers.push(Math.floor(Math.random() * 15) + 1);
    score++;
}



$(function() {
    var score = 0;

 
    var computerChoice = Math.floor(Math.random() * 100 + 1) + 50;
    var randomNumbers = [];


    for (var i = 0; i < 4; i++) {
        randomNumbers.push(Math.floor(Math.random() * 15) + 1);
    }
    console.log(randomNumbers);

    $("small").html(computerChoice);


    $("img").click(function() {
        var imgId = $(this).attr("id");
        console.log(imgId);

        var idxFromId = parseInt(imgId.replace("crystal", "")) - 1;
        score += randomNumbers[idxFromId];

        document.querySelector("#score").innerHTML = score;

        if (computerChoice === score) {
            wins++
            document.querySelector("#wins").innerHTML = wins;
            alert("Winner!")
            // window.location.reload()
        } else if (score > computerChoice) {
            losses++
            document.querySelector("#losses").innerHTML = losses;
            alert("Try again!")
            // window.location.reload()
        }

    });

});
