$(function() {
    var score = 0;

    //when the game starts
    //when you load the page
    //setup initial game
    var computerChoice = Math.floor(Math.random() * 100 + 1) + 50;
    var randomNumbers = [];


    for (var i = 0; i < 4; i++) {
        randomNumbers.push(Math.floor(Math.random() * 15) + 1);
    }
    console.log(randomNumbers);



    //var random1 = Math.floor(Math.random() * 15) + 1;
    //var random2 = Math.floor(Math.random() * 15) + 1;
    //var random3 = Math.floor(Math.random() * 15) + 1;
    //var random4 = Math.floor(Math.random() * 15) + 1;
    /*
    console.log("random1", random1);
    console.log("random2", random2);
    console.log("random3", random3);
    console.log("random4", random4);
    */


    //replace the header with the computer choice
    // note: with '<>' creates element
    $("small").html(computerChoice);


    $("img").click(function() {
        //console.log(this);
        //console.log(arguments);
        // alert new score
        // how do we get that new score?
        // create a score with an initial value
        var imgId = $(this).attr("id");
        console.log(imgId);


        // to get the value give each image an id
        //var imgValue = ?;


        //score += imgValue;
        // add the value of whom?
        // from the image

        //crystal1
        // 0 is the initial value
        // 10 is the random1  corresponding to crystal1
        // score = 0 + 10;
        /*
        if(imgId === 'crystal1') {
            score = score + random1;
        }
        if(imgId === 'crystal2') {
            score = score + random2;
        }
        if(imgId === 'crystal3') {
            score = score + random3;
        }
        if(imgId === 'crystal4') {
            score = score + random4;
        }
        */
        /*
        switch (imgId) {
            case 'crystal1':
                score += random1;
                break;
            case 'crystal2':
                score += random2;
                break;
            case 'crystal3':
                score += random3;
                break;
            case 'crystal4':
                score += random4;
                break;
            //default:
                //some default behavior over here
                //break;
        }
        */
        //crystal1
        var idxFromId = parseInt(imgId.replace("crystal", "")) - 1;
        score += randomNumbers[idxFromId];

        console.log(score);

        //if computerChoice is equal score 
        if (computerChoice === score) {
            alert('win');
        } else if (score > computerChoice) {
            alert('lose');
        }

    });

    //other steps
    //when it stops

});
