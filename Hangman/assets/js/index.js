// word bank
var wordBank = ['carsr', 'houses', 'boatst'],
    // another word bank to avoid same word repeated
    chosenWordBank = [],
    // letter bank to restrict user input
    // limited amout of guesses
    guessesLeft,
    // user guesses wins or losses 
    wins = 0,
    losses = 0,
    // wrong guesses
    wrongGuesses,
    indexOfWordToGuess,
    wordToGuess,
    wordToDisplay;

resetGame();

function resetGame() {
    wrongGuesses = [];
    guessesLeft = 9;
    indexOfWordToGuess = Math.floor(Math.random() * wordBank.length);
    wordToGuess = wordBank[indexOfWordToGuess];
    wordToDisplay = [];
    for (var i = 0; i < wordToGuess.length; i++) {
        wordToDisplay.push("_");
    }
    $("#word-blanks").text(wordToDisplay.join(" "));
    console.log(wordToGuess);
}



$("body").keyup(function(event) {
    //only if keycode between 65 and 90
    if (event.keyCode < 65 || event.keyCode > 90) return;

    //store the letter that the user keyed in
    var keyPressed = event.key;

    //compare against the computer guess

    //if userInput exists on wordToGuess
    //indexOf
    //
    //['_', '_', 'r', '_']
    if (wordToGuess.indexOf(keyPressed) >= 0) {
        //loop through the wordToDisplay
        //compare the index to the length of word to display to the key pressed
        /*
        for (var i = 0; i < wordToDisplay.length; i++) {
            if (wordToGuess[i] === keyPressed) {
                wordToDisplay[i] = keyPressed; 
            }
        }

        $("#word-blanks").text(wordToDisplay.join(" "));
        */

        wordToDisplay.forEach(function(charValue, charIndex) {
            if (wordToGuess[charIndex] === keyPressed) {
                wordToDisplay[charIndex] = keyPressed;
            }
        });
        $("#word-blanks").text(wordToDisplay.join(" "));



    } else if (wrongGuesses.indexOf(keyPressed) === -1) {
        guessesLeft--;
        wrongGuesses.push(keyPressed)
        $("#guesses-left").text(guessesLeft);
        $("#wrong-guesses").text(wrongGuesses.join(", "));
    }

    console.log(wordToDisplay.join(""));
    if (wordToDisplay.indexOf("_") === -1) {
        wins++;
        $("#win-counter").text(wins);
        resetGame();
    }

    if (guessesLeft === 0) {
        losses++;
        $("#loss-counter").text(losses);
        resetGame()
    }

    //else
    //substract guessesLeft
    //includ it in lettersGuessed


    //if lettersGuessed is 0
    //then you lose
    //reset the game

    //if the whole array? is full
    //check that every letter is on the array
    //then you win
});
