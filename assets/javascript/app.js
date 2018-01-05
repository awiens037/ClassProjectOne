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
})

// Determine which emotion is the most apparent and add search terms to the Youtube search params.
if 
sadness, neutral, disgust, anger, surprise, fear, happiness.