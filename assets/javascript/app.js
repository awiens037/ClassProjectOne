//following code hides container4 and 5//
$('.container4').hide();
$('.container5').hide();

//following code displays container4 and 5 when button clicked//
$('button').on('click', function() {
    $('.container4').show();
});
$('button').on('click', function() {
    $('.container5').show();
});

$(document).ready(function() {
    $('#search-term').submit(function(event) {
        event.preventDefault();
        var searchTerm = $('#exampleFormControlInput1').val().trim();
        //validation
        if (searchTerm == "") {
            return
        }
        getRequest(searchTerm);
    });
});

function getRequest(searchTerm) {
    url = 'https://www.googleapis.com/youtube/v3/search';
    var params = {
        part: 'snippet',
        key: 'AIzaSyC_sNakrImx81wT4-F6XoOPNpvTo9ru6Is',
        q: searchTerm
    };

    $.getJSON(url, params, function(searchTerm) {
        showResults(searchTerm);
    });
}

function showResults(results) {
    var html = "";
    var entries = results.items;

    $.each(entries, function(index, value) {
        var title = value.snippet.title;
        html += '<p>' + " " + '</p>';
        html += '<iframe id="player" width="300" height="300" src="https://www.youtube.com/embed/' + value.id.videoId + '" frameborder="0" marginwidth="50" allowfullscreen></iframe> ';
    });

    $('#search-results').html(html);
}

// Initialize Firebase
// var config = {
//   apiKey: "AIzaSyCBG5RWYaj490aEEuSE1R6hDkR4n1c8DKQ",
//   authDomain: "classprojectone-e5478.firebaseapp.com",
//   databaseURL: "https://classprojectone-e5478.firebaseio.com",
//   projectId: "classprojectone-e5478",
//   storageBucket: "classprojectone-e5478.appspot.com",
//   messagingSenderId: "987592750365"
// };
// firebase.initializeApp(config);

// var database = firebase.database();

// $("button").on("click", function(event) {
// event.preventDefault();

//  // Grabs input from site/ user
// var userInput = $("#search-content").val().trim();

//   // Creates local temporary object for holding train data
// var newInput = {
//   Input: userInput,
// };

// //Uploads data to database
// database.ref().push(newInput);

// //logs to console
// console.log(newInput.Input);

// //
// $("#song-table > tbody").append("<tr><td>" + userInput);
 