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



	$(document).ready(function () {
		$('#search-term').submit(function (event) {
			event.preventDefault();
			var searchTerm = $('#exampleFormControlInput1').val();
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
	  
		$.getJSON(url, params, function (searchTerm) {
			showResults(searchTerm);
		});
	  }
	  
	  function showResults(results) {
		var html = "";
		var entries = results.items;
		
		$.each(entries, function (index, value) {
			var title = value.snippet.title;
			var thumbnail = value.snippet.thumbnails.default.url;
			html += '<p>' + title + '</p>';
			html += '<iframe id="player" width="640" height="360" src="https://www.youtube.com/embed/'+ value.id.videoId + '" frameborder="0" allowfullscreen></iframe>';
		}); 
		
		$('#search-results').html(html);
	  }
	  
// Set up the API key in the URL.
var apiKey = '_FBOOV2kaZLXlIQUHIsgdAiflLG50';

// Add the secret to the URL.
var apiSecret = 'vDa7HQqq9D-Wz6QiRjlIgm_VSfnfQ1Iz';

// We then take the image and add it to the URL.
var image = '';

// This is the finished URL
var queryURL = 'https://api-us.faceplusplus.com/facepp/v3/detect/?api_key=' + apiKey + '&api_secret=' + apiSecret + '&image_file=' + image + '&return_attributes=emotion';

// Once the image has been added, we then call the Face++ api with the URL to get the emotions from the image
$.ajax({
	url: queryURL,
	method: "POST",
}).done(function(response){
console.log(response.faces.attributes.emotion)

var emote = response.faces.attributes.emotion
// Determine which emotion is the most apparent and add search terms to the Youtube search params.
/*if 
sadness = sorrowful, dirge, somber
neutral = calm, waiting, generic
disgust = revolt, disgust, grunge
anger = metal, battle, rage
surprise = Shock, Alarmed, Big Band, Ska
fear = suspensful, dramatic, score
happiness = bubbly, pop, 90's, happy*/
})