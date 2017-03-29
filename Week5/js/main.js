var startScreen;
var gameHTML;
var counter = 30;
var questionArray = [
    "Who's birthday party did Harry, Ron, and Hermione go to in The Chamber of Secrets?",
    "What patronus does Luna Lovegood have?",
    "Who was the quidditch commentator in Harry's first years at Hogwarts?",
    "Who disguised himself as Mad Eye Moody in The Goblet of Fire?",
    "What organization did Hermione start in her 4th year?",
    "What potion did Harry take in order to get Slughorn's memories?",
    "Who was the first to be stunned by the Basilisk?",
    "What was Harry's first broomstick?"
];
var answerArray = [
    ["Nearly Headless Nick", "Dobby", "Albus Dumbledore", "Draco Malfoy"],
    ["Lion", "Rabbit", "Horse", "Stag"],
    ["Dean Thomas", "Harry Potter", "Lee Jordan", "George Weasley"],
    ["Severus Snape", "Rubeus Hagrid", "Barty Crouch Jr.", "Lord Voldemort"],
    ["Dumbledore's Army", "Witches for Equal Rights", "Death Eaters", "Society for the Promotion of Elfish Welfare"],
    ["Felix Felicis", "Confusing Concoction", "Draught of Peace", "Polyjuice Potion"],
    ["Ginny Weasley", "Mrs. Norris", "Fleur Delacour", "Cho Chang"],
    ["Firebolt", "Cleansweep", "Thunderbolt", "Nimbus 2000"]
];
var imageArray = [
    "<img class='center-block img-right' src='img/NHN.jpg'>",
    "<img class='center-block img-right' src='img/rabbit.jpg'>",
    "<img class='center-block img-right' src='img/lee_jordan.jpg'>",
    "<img class='center-block img-right' src='img/BCJ.jpg'>",
    "<img class='center-block img-right' src='img/hermione.jpg'>",
    "<img class='center-block img-right' src='img/felix_felicis.jpg'>",
    "<img class='center-block img-right' src='img/mrs_norris.jpg'>",
    "<img class='center-block img-right' src='img/nimbus.jpg'>"
];
var correctAnswers = [
    "A. Nearly Headless Nick",
    "B. Rabbit",
    "C. Lee Jordan",
    "C. Barty Crouch Jr.",
    "D. Society for the Promotion of Elfish Welfare",
    "A. Felix Felicis",
    "B. Mrs. Norris",
    "D. Nimbus 2000"
];
var questionCounter = 0;
var selecterAnswer;
var theClock;
var correctTally = 0;
var incorrectTally = 0;
var unansweredTally = 0;

$(document).ready(function() {
    function initialScreen() {
        startScreen = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>Start Quiz</a></p>";
        $(".mainArea").html(startScreen);
    }

    initialScreen();

    //Create a function, generateHTML(), that is triggered by the start button, and generates the HTML seen on the project video...

    $("body").on("click", ".start-button", function(event) {
        event.preventDefault();
        generateHTML();

        timerWrapper();

    }); // Closes start-button click

    $("body").on("click", ".answer", function(event) {
        //answeredQuestion = true;
        selectedAnswer = $(this).text();
        if (selectedAnswer === correctAnswers[questionCounter]) {
            //alert("correct");

            clearInterval(theClock);
            generateWin();
        } else {
            //alert("wrong answer!");
            clearInterval(theClock);
            generateLoss();
        }
    }); // Close .answer click

    $("body").on("click", ".reset-button", function(event) {
        resetGame();
    }); // Closes reset-button click

}); //  Closes jQuery wrapper

function generateLossDueToTimeOut() {
    unansweredTally++;
    gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>You ran out of time!  The correct answer was: " + correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='img/voldemort.jpg'>";
    $(".mainArea").html(gameHTML);
    setTimeout(wait, 3000); //  change to 4000 or other amount
}

function generateWin() {
    correctTally++;
    gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Correct! The answer is: " + correctAnswers[questionCounter] + "</p>" + imageArray[questionCounter];
    $(".mainArea").html(gameHTML);
    setTimeout(wait, 3000); //  change to 4000 or other amount
}

function generateLoss() {
    incorrectTally++;
    gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Wrong! The correct answer is: " + correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='img/voldemort.jpg'>";
    $(".mainArea").html(gameHTML);
    setTimeout(wait, 3000); //  change to 4000 or other amount
}

function generateHTML() {
    gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>30</span></p><p class='text-center'>" + questionArray[questionCounter] + "</p><p class='first-answer answer'>A. " + answerArray[questionCounter][0] + "</p><p class='answer'>B. " + answerArray[questionCounter][1] + "</p><p class='answer'>C. " + answerArray[questionCounter][2] + "</p><p class='answer'>D. " + answerArray[questionCounter][3] + "</p>";
    $(".mainArea").html(gameHTML);
}

function wait() {
    if (questionCounter < 7) {
        questionCounter++;
        generateHTML();
        counter = 30;
        timerWrapper();
    } else {
        finalScreen();
    }
}

function timerWrapper() {
    theClock = setInterval(thirtySeconds, 1000);

    function thirtySeconds() {
        if (counter === 0) {
            clearInterval(theClock);
            generateLossDueToTimeOut();
        }
        if (counter > 0) {
            counter--;
        }
        $(".timer").html(counter);
    }
}

function finalScreen() {
    gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>All done, here's how you did!" + "</p>" + "<p class='summary-correct'>Correct Answers: " + correctTally + "</p>" + "<p>Wrong Answers: " + incorrectTally + "</p>" + "<p>Unanswered: " + unansweredTally + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Reset The Quiz!</a></p>";
    $(".mainArea").html(gameHTML);
}

function resetGame() {
    questionCounter = 0;
    correctTally = 0;
    incorrectTally = 0;
    unansweredTally = 0;
    counter = 30;
    generateHTML();
    timerWrapper();
}
