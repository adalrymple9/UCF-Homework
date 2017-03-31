var animals = ["dog", "cat", "bird", "porcupine", "platypus", "zebra"];

displayBtns();

$(".anmlBTN").on("click", function() {
    var tag = $(this).val();
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + tag + "&api_key=dc6zaTOxFJmzC";

    $.ajax({
            url: queryURL,
            method: "GET"
        })
        .done(function(response) {
            $("#images").empty();
            for (let i = 0; i < response.data.length; i++) {

                var imgURL = response.data[i].images.original.url;

                $("#images").append('<img src="' + imgURL + '" alt="">')
            }
        })
});


$("#submit").on("click", function(event) {
    event.preventDefault();
    var newAnimal = $("#user-animals").val();
    animals.push(newAnimal);
    displayBtns();
    $("#user-animals").val("");
    console.log(animals);

    var tag = $(this).val();
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + newAnimal + "&api_key=dc6zaTOxFJmzC";

    $.ajax({

            url: queryURL,
            method: "GET"
        })
        .done(function(response) {
            $("#images").empty();
            for (let i = 0; i < response.data.length; i++) {

                var imgURL = response.data[i].images.original.url;

                $("#images").append('<img src="' + imgURL + '" alt="">');
            }
        });

});



function displayBtns() {

    $(".display-buttons").html("");

    for (let i = 0; i < animals.length; i++) {

        let input = $("<input>");

        input.attr({

            "class": "anmlBTN",
            "type": "button",
            "value": animals[i]

        });

        $(".display-buttons").append(input);

    } // End of For loop

} // End of displaybtns function
