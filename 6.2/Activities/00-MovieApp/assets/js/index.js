var years = [],
    apiUrl = "http://www.omdbapi.com/",

    // Store reference to first level templates on the document
    $templates = $("template"),

    // Partial view placeholder
    $partialViewPlaceholder = $("#partial-view");


/** Add event listeners */
// @todo:Add an event listener when user clicks on search button
// on callback:
//      call the search function
$("#search").click(function() {
    search();
});

// @bonus
// @todo: Add event listener when user clicks on any movie result to see its details
// on callback:
//      get the imdb-id from the element attribute imdb-id and store it in a variable
//      call the function searchById and pass the imdbID

$(document).on('click', '.movie-result', function() {
    var movieId = $(this).attr("imdb-id")
    searchById(movieId);
});


// @bonus advanced
// @todo: Add event listener when user clicks plus button to add a new year
// on callback:
//      get the reference of the year input
//      get the value of the input
//      push the value into the years array
//      call loadYearsTemplate
//      clear the input value

// @bonus advanced
// @todo: Add event listener When user clicks a year to search for
// on callback
//      get all the 'a' elements inside the #year container
//          remove them the css class 'active'
//      get the element that was clicked
//          add it the css class 'active'



/** Search functions */
// @todo:
function search() {
    // @todo:
    //get the value of the search input and store it in variable called searchCriteria
    var searchCriteria = encodeURIComponent($("#search-box input").val());

    // @bonus advanced
    // @todo: get the text of the active selected year
    //var year = ?;

    // @todo
    // if searchCriteria is empty then stop execution
    if (!searchCriteria) return;

    // @todo
    // create an ajax request to call OMDb API to search by text and year
    $.ajax({
        url: apiUrl + "?s=" + searchCriteria,
        method: 'GET'
    }).done(function(response) {
        loadMovieResultsTemplate(response);
    });
}

// @bonus
function searchById(imdbID) {
    // @todo
    // create an ajax request to call OMDb API to get by IMDb ID
    // when the call is done, call loadMovieDetailsTemplate
    $.ajax({
        url: apiUrl + "?i=" + imdbID,
        method: 'GET'
    }).done(function(response) {
        loadMovieDetailsTemplate(response);
    });
}


/** Template loaders */
// @todo
function loadMovieResultsTemplate(response) {
    var movieResultsTmplHtml = $templates.filter("#tmpl-movie-results").html();
    var $movieResultsTmpl = $(movieResultsTmplHtml);


    $partialViewPlaceholder.empty().append($movieResultsTmpl);

    response.Search.forEach(function(result) {
        var movieResultTmplHtml = $movieResultsTmpl.find("#tmpl-movie-result").html(),
            $movieResultTmpl = $(movieResultTmplHtml);

        $movieResultsTmpl.append($movieResultTmpl);

        // @todo:
        // set the title inside the $movieResultTmpl
        $movieResultTmpl.find(".movie-title").text(result.Title);
        $movieResultTmpl.find(".movie-year").text(result.Year);
        // set the year inside the $movieResultTmpl

        // set the attribute 'imdb-id' to the .movie-result element inside the $movieResultTmpl
        $movieResultTmpl.find(".movie-result").attr("imdb-id", result.imdbID);

        // if the poster is not equal to 'N/A' then load the poster on the image tag inside the $movieResultTmpl
        if (result.Poster !== "N/A") {
            $movieResultTmpl.find("img").attr("src", result.Poster);
        }
    });
}

// @bonus
function loadMovieDetailsTemplate(response) {
    var movieDetailsTmplHtml = $templates.filter("#tmpl-movie-details").html();
    var $movieDetailsTmpl = $(movieDetailsTmplHtml);



    $partialViewPlaceholder.empty().append($movieDetailsTmpl);
    $movieDetailsTmpl.find(".page-header span").text(response.Title);
    $movieDetailsTmpl.find(".page-header small").text(response.Genre);
    $movieDetailsTmpl.find(".movie-result").attr("imdb-id", response.imdbID);
    if (response.Poster !== "N/A") {
        $movieDetailsTmpl.find("img").attr("src", response.Poster);
    }
    $movieDetailsTmpl.find(".movie-plot").text(response.Plot);


    var actors = response.Actors.split(", ");
    actors.forEach(function(actor) {
        var movieActorTmplHtml = $movieDetailsTmpl.find("#tmpl-actor").html();
        var $movieActorTmpl = $(movieActorTmplHtml);
        // find the template #tmpl-actor inside $movieDetailsTmpl and store the html in a variable
        $movieDetailsTmpl.find(".movie-actors").append($movieActorTmpl);
        // convert the html into a jquery object and store it in a variable called $actorTmpl
        $movieActorTmpl.text(actor);
        // find the element .movie-actors and append the $actorTmpl

        // set the text of the $actorTmpl


    });


}
// @todo:
// get the html of the template #tmpl-movie-details from the $templates and store it in a variable
// convert the html into a jquery object and store it in a variable called $movieDetailsTmpl

// remove all the children of the $partialViewPlaceholder
// append the new $movieDetailsTmpl to the $partialViewPlaceholder

// set the page header title inside the $movieDetailsTmpl
// set the page header genre inside the $movieDetailsTmpl
// set the plot inside the $movieDetailsTmpl
// if the poster is not equal to 'N/A' 
// then load the poster on the image tag inside the $movieDetailsTmpl

//


// @bonus advanced
function loadYearsTemplate() {
    // get the element #years and store it in a variable called $yearsPlaceholder
    // empty the $yearsPlaceholder

    // for each year in the years array
    //      get the html of the template #tmpl-year from the $templates and store it in a variable
    //      convert the html into a jquery object and store it in a variable called $yearTmpl
    //      append the $yearTmpl into the $yearsPlaceholder
    //      set the text of the $yearTmpl
}
