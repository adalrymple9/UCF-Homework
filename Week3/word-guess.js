var numberOfLosses = 0;
var numberOfWins = 0;
var guessesLeft = 9;
var guessesSoFar = []


//attach an event to listen for key strokes
document.onkeyup = function(event) {
    //generate a letter between 65-90
    //take that number to compare with user choice 
    //get user choice
    //compare the two values if they are the same you win else you lose
    // if you get 0, then you add 65
    // console.log(arguments);
    // console.log(this);

    var computerChoice = Math.floor(generateRandomBetween(65, 90));
    console.log("computer choice", computerChoice);
    var userChoice = event.keyCode;
    console.log(userChoice);

    if (computerChoice === userChoice) {
        numberOfWins++;
        document.querySelector("#wins").innerHTML = numberOfWins;
    } else {
        //replace the text of the p with the number of losses
        numberOfLosses++;
        document.querySelector("#losses").innerHTML = numberOfLosses;
        guessesLeft--;
        document.querySelector("#guessesLeft").innerHTML = guessesLeft;
    }

    if (guessesLeft === -1) {
        alert("Try again!")
        window.location.reload();
    }

    if (numberOfWins === 1) {
        alert("Winner!")
        window.location.reload();
    }


    guessesSoFar.push(event.key);
    var guessesSoFarStr = guessesSoFar.join();

    document.querySelector("#guessesSoFar").innerHTML = guessesSoFarStr;
    console.log(guessesSoFarStr)

}

function generateRandomBetween(lowerRange, upperRange) {
    return (Math.random() * (upperRange - lowerRange)) + lowerRange;
}
