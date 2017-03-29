var animals = ["dog", "cat", "bird", "porcupine", "platypus", "zebra"];

for (var i = 0; i < animals.length; i++) {
    document.write("<input class='anmlBTN' type='button' value='" + animals[i] + "'/>");
}

$(".anmlBTN").on("click", function() {
    var tag = $(this).val();
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + tag + "&api_key=dc6zaTOxFJmzC";

    $.ajax({
            url: queryURL,
            method: "GET"
        })
        .done(function(response) {
          $("#images").empty();
            for (i = 0; i < response.data.length; i++) {

                var imgURL = response.data[i].images.original.url;

                $("#images").append('<img src="' + imgURL + '" alt="">')
            }
        })

});
