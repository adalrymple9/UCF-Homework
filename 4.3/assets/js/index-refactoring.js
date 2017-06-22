var firstPlayerNumber,
    secondPlayerNumber,
    commandChosen;

$("#cards button").click(function() {
    var btnToReplaceText = $(this);
    cardHandler(btnToReplaceText);
});

$("#commands button").on("click", function() {
    //save the users choice to use later to compare
    commandChosen = $(this).text();
    commandHandler();
});


//equivalent when you click a card but on the key event
$("body").keyup(function(event) {
    //ascii to look for keyCode
    //if key code is between 96 to 105
    console.log(event.keyCode)
    if (event.keyCode >= 96 && event.keyCode <= 105) {


        var indexOfButtonToFind = event.key;
        var btnToReplaceText = $("#cards button:eq(" + indexOfButtonToFind + ")");

        cardHandler(btnToReplaceText);
    }
});

// equivalent when you click a command button
$("body").keyup(function(event) {
    // check if = + - was pressed
    var validKeys = ["+", "=", "-"];
    // if event key is a valid key
    // if(event.key === "+" || event.key === "-" || even.key === "=")
    if (validKeys.indexOf(event.key) >= 0) {
        commandChosen = event.key;
        commandHandler();
    }

});


function generateRandomNumber() {

    return Math.floor(Math.random() * 10) + 1;
}

function cardHandler(elementToReplaceText) {
    // get random number
    firstPlayerNumber = generateRandomNumber();

    // replace the text of button with random number
    elementToReplaceText.text(firstPlayerNumber);
}

function commandHandler() {
    //console.log(commandChosen);

    //have second player get a random number between 1  to 10
    // save that number for later and compare
    secondPlayerNumber = Math.floor(Math.random() * 10) + 1;
    console.log(secondPlayerNumber);

    switch (commandChosen) {
        case "+":
        case "Higher":
            if (secondPlayerNumber > firstPlayerNumber) {
                //i win
                alert('winner');
                break;
            } else {
                alert('loser');
                break;
            }
            //code to be exec
        case "=":
        case "Equal":
            if (secondPlayerNumber === firstPlayerNumber) {
                //i win
                alert('win');
                break;
            } else {
                alert('loser');
                break;
            }
            //code
        case "-":
        case "Lower":
            if (secondPlayerNumber < firstPlayerNumber) {
                //i win
                alert('win');
                break;
            } else {
                alert('loser');
                break;
            }
            //code
    }


    //display to the user the second player choice in paragraph
    $("body").append("<p>");
    $("p").text("Second player chose: " + secondPlayerNumber);
}
