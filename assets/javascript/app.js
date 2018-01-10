var searchTerm = 'music playlist -vevo ';
$(document).ready(function () {


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
$('#hapy').on('click', function(){
	searchTerm += 'bubbly pop 90s happy';
	getRequest(searchTerm);

});
$('#sdaness').on('click', function(){
	searchTerm += 'sorrowful dirge somber';
	getRequest(searchTerm);
	
});
$('#grr').on('click', function(){
	searchTerm += 'metal battle rage';
	getRequest(searchTerm);

});
$('#eek').on('click', function(){
	searchTerm += 'suspensful dramatic score';
	getRequest(searchTerm);

});
$('#spris').on('click', function(){
	searchTerm += 'shock alarm ska big_band';
	getRequest(searchTerm);

});
$('#disguss').on('click', function(){
	searchTerm += 'revolt disgust grunge';
	getRequest(searchTerm);

});
$('#nrtral').on('click', function(){
	searchTerm += 'calm waiting generic';
	getRequest(searchTerm);

});

		
	$('#search-term').submit(function (event) {
			event.preventDefault();
			searchTerm = "music playlist -vevo "

// Set up the API key in the URL.
var apiKey = '_FBOOV2kaZLXlIQUHIsgdAiflLG50mBJ';

// Add the secret to the URL.
var apiSecret = 'vDa7HQqq9D-Wz6QiRjlIgm_VSfnfQ1Iz';

// We then take the image and add it to the URL.
var image = $('#giveUsYourFace').val().trim();

// This is the finished URL

var queryURL = "https://cors-anywhere.herokuapp.com/" + 
	encodeURI("https://api-us.faceplusplus.com/facepp/v3/detect?api_key=" + 
	apiKey + "&api_secret=" + 
	apiSecret + "&image_url=" + 
	image + "&return_attributes=emotion");
// Once the image has been added, we then call the Face++ api with the URL to get the emotions from the image
$.ajax({
	url: queryURL,
	method: "POST",
	headers: {"x-requested-with": 'xml'}
}).done(function(response){
	console.log(response.faces[0].attributes.emotion)

	var emote = response.faces[0].attributes.emotion

	// Determine which emotion is the most apparent and add search terms to the Youtube search params.
	if (emote.sadness >= 60) {
		searchTerm += 'sorrowful dirge somber'; 
	} else if (emote.disgust >= 60) {
		searchTerm += 'revolt disgust grunge';
	} else if (emote.anger >= 60) {
		searchTerm += 'metal battle rage';
	} else if (emote.surprise >= 60) {
		searchTerm += 'shock alarm big_band ska';
	} else if (emote.fear >= 60) {
		searchTerm += 'suspensful dramatic score';
	} else if (emote.happiness >= 60) {
		searchTerm += 'bubbly pop 90s happy';
	} else {
		searchTerm += 'calm waiting generic';
	}

	/*
	sadness = sorrowful, dirge, somber
	neutral = calm, waiting, generic
	disgust = revolt, disgust, grunge
	anger = metal, battle, rage
	surprise = Shock, Alarmed, Big Band, Ska
	fear = suspensful, dramatic, score
	happiness = bubbly, pop, 90's, happy*/


//=======

		getRequest(searchTerm);
	});
  });
});