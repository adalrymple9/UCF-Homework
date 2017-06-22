$(function() {
    var score = 0;
    var computerChoice = Math.floor(Math.random() * 100 + 1) + 50;
    var crystals = {
        "abc": generateRandomNumber(),
        "def": generateRandomNumber(),
        "ghi": generateRandomNumber(),
        "jkl": generateRandomNumber()
    };


    function generateRandomNumber() {
        return Math.floor(Math.random() * 15) + 1;
    }

    console.log(crystals);



    $("small").html(computerChoice);


    $("img").click(function() {
        var imgId = $(this).attr("id");
        console.log(imgId);



        // imgId = "abc"
        score += crystals[imgId];

        console.log(score);
        /*
        //if computerChoice is equal score 
        if(computerChoice === score) {
            alert('win');
        } else if(score > computerChoice) {
            alert('lose');
        }
        */

    });

});
