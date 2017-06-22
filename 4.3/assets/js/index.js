var firstPlayerNumber,
    secondPlayerNumber,
    commandChosen;

$("#cards button").click(function() {
    console.log(arguments);
    console.log(this);

    // generate a random number
    firstPlayerNumber = Math.floor(Math.random() * 10) + 1;
    console.log(firstPlayerNumber);

    // replace the text of button with random number
    $(this).text(firstPlayerNumber);

});

$("#commands button").on("click", function() {
    //save the users choice to use later to compare
    console.log(arguments);
    console.log(this);

    commandChosen = $(this).text();
    console.log(commandChosen);

    //have second player get a random number between 1  to 10
    // save that number for later and compare
    secondPlayerNumber = Math.floor(Math.random() * 10) + 1;
    console.log(secondPlayerNumber);


    //comparing
    //if the player chooses 'higher' and second player choice is greater than first player choice then i win
    /*if (commandChosen === 'Higher' && secondPlayerNumber > firstPlayerNumber) {
        //i win
        alert('winner');
        return;
    } else {
        alert('loser');
        return;
    }*/

    //if the player chooses 'equal' and second player choice is equal to first player choice then i win 
    /*
    if (commandChosen === 'Equal' && secondPlayerNumber === firstPlayerNumber) {
        //i win
        alert('win');
        return;
    } else {
        alert('loser');
        return;
    }*/

    //if the player chooses 'lower' and second player choice is less than first player choice then i win
    /*
    if (commandChosen === 'Lower' && secondPlayerNumber < firstPlayerNumber) {
        //i win
        alert('win');
        return;
    } else {
        alert('loser');
        return;
    }
    */


    switch (commandChosen) {
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

    /*
    $("<p>")
        .text(secondPlayerNumber)
        .appendTo($("body"));
    */
});

function generateRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
}


//equivalent when you click a card
$("body").keyup(function(event) {
    //ascii to look for keyCode
    //console.log(this);
    //if key code is between 96 to 105
    console.log(event.keyCode)
    if (event.keyCode >= 96 && event.keyCode <= 105) {


        var indexOfButtonToFind = event.key;

        //generate random number
        firstPlayerNumber = generateRandomNumber();
        console.log(firstPlayerNumber);

        //find the button with that index
        //$("#cards button:eq(5)");
        //$("#cards button:eq(indexOfButtonToFind)");
        $("#cards button:eq(" + indexOfButtonToFind + ")")
            .text(firstPlayerNumber);

        //console.log(buttonMatch);

        //repace that button text with the random number
    }
});

// equivalent when you click a command button
$("body").keyup(function(event) {
    // check if = + - was pressed
    var validKeys = ["+", "=", "-"];
    //if event key is a valid key
    // if(event.key === "+" || event.key === "-" || even.key === "=")
    if (validKeys.indexOf(event.key) >= 0) {


        commandChosen = event.key;
        console.log(commandChosen);

        //have second player get a random number between 1  to 10
        // save that number for later and compare
        secondPlayerNumber = Math.floor(Math.random() * 10) + 1;
        console.log(secondPlayerNumber);


        //comparing
        //if the player chooses 'higher' and second player choice is greater than first player choice then i win
        /*if (commandChosen === 'Higher' && secondPlayerNumber > firstPlayerNumber) {
            //i win
            alert('winner');
            return;
        } else {
            alert('loser');
            return;
        }*/

        //if the player chooses 'equal' and second player choice is equal to first player choice then i win 
        /*
        if (commandChosen === 'Equal' && secondPlayerNumber === firstPlayerNumber) {
            //i win
            alert('win');
            return;
        } else {
            alert('loser');
            return;
        }*/

        //if the player chooses 'lower' and second player choice is less than first player choice then i win
        /*
        if (commandChosen === 'Lower' && secondPlayerNumber < firstPlayerNumber) {
            //i win
            alert('win');
            return;
        } else {
            alert('loser');
            return;
        }
        */


        switch (commandChosen) {
            case "+":
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

        /*
    $("<p>")
        .text(secondPlayerNumber)
        .appendTo($("body"));
    */

    }

});
