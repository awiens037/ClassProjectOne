$(document).ready(function () {

	


	//following code hides container4 and 5//
	$('.container4').hide();

	//following code displays container4 and 5 when button clicked//
	$('button').on('click', function() {
			$('.container4').show();
		});
	$('.emotion').on('click', function(){
		searchTerm = 'music playlist -vevo -wmg ';
	})

	$('#hapy').on('click', function(){

		searchTerm += 'bubbly pop 90s happy';
		getRequest(searchTerm);
		console.log(searchTerm);
		$('#answer').html('<h1>Happiness</h1>');

	});
	$('#sdaness').on('click', function(){
		searchTerm += 'sorrowful dirge somber';
		getRequest(searchTerm);
		console.log(searchTerm);
		$('#answer').html('<h1>Sadness</h1>');
		
	});
	$('#grr').on('click', function(){
		searchTerm += 'metal battle rage';
		getRequest(searchTerm);
		console.log(searchTerm);
		$('#answer').html('<h1>Anger</h1>');

	});
	$('#eek').on('click', function(){
		searchTerm += 'suspensful dramatic score';
		getRequest(searchTerm);
		console.log(searchTerm);
		$('#answer').html('<h1>Fear</h1>');

	});
	$('#spris').on('click', function(){
		searchTerm += 'shock alarm ska big_band';
		getRequest(searchTerm);
		console.log(searchTerm);
		$('#answer').html('<h1>Surprise</h1>');

	});
	$('#disguss').on('click', function(){
		searchTerm += 'revolt disgust grunge';
		getRequest(searchTerm);
		console.log(searchTerm);
		$('#answer').html('<h1>Disgust</h1>');

	});
	$('#nrtral').on('click', function(){
		searchTerm += 'calm waiting generic';
		getRequest(searchTerm);
		console.log(searchTerm);
		$('#answer').html('<h1>Neutral</h1>');

	});

			
	$('#search-term').submit(function (event) {	
		event.preventDefault();
		searchTerm = "music playlist -vevo -wmg "

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
			if (emote.sadness >= 50) {
				searchTerm += 'sorrowful dirge somber'; 
				$('#answer').html('<h1>Sadness</h1>');
				console.log('sad');
			} else if (emote.disgust >= 50) {
				searchTerm += 'revolt disgust grunge';
				$('#answer').html('<h1>Disgust</h1>');
				console.log('disgust');
			} else if (emote.anger >= 50) {
				searchTerm += 'metal battle rage';
				$('#answer').html('<h1>Anger</h1>');
				console.log('anger');
			} else if (emote.surprise >= 50) {
				searchTerm += 'shock alarm big_band ska';
				$('#answer').html('<h1>Surprise</h1>');
				console.log('surprise');
			} else if (emote.fear >= 50) {
				searchTerm += 'suspensful dramatic score';
				$('#answer').html('<h1>Fear</h1>');
				console.log('fear');
			} else if (emote.happiness >= 50) {
				searchTerm += 'bubbly pop 90s happy';
				$('#answer').html('<h1>Happiness</h1>');
				console.log('happiness');
			} else {
				searchTerm += 'calm waiting generic';
				$('#answer').html('<h1>Neutral</h1>');
				console.log('neutral')
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

	$('#search-term').submit(function (event) {
		event.preventDefault();
		var searchTerm = $('#giveUsYourFace').val().trim();
		//validation
		if ($('#giveUsYourFace').val().trim() == "") {
			return
		}
		getRequest(searchTerm);
	});

});
	  
	  function getRequest(searchTerm) {
	  	
		searchTerm = searchTerm += ' -vevo music playlist -umg -wmg';
		console.log(searchTerm);
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
		var searchResults = $('<div class="owl-carousel owl-theme">');
		$.each(entries, function (index, value) {
			html += '<p>' + '</p>';
			html += '<iframe class="item" id="player" width="500" height="300" src="https://www.youtube.com/embed/'+ value.id.videoId + '" frameborder="0" allowfullscreen></iframe>';
		});
		searchResults.html(html);
		
		searchResults.owlCarousel({
			loop:true,
			margin:0,
			paddinf:3,
			nav:true,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:3
				},
				1000:{
					items:5
				}
			}
		});
		$('#search-results').html(searchResults);

		//owl code needs to start at 0
		setTimeout(function(){
			$(".owl-stage").css({
			"transform" : "translate3d(0px, 0px, 0px)"
			})
		}, 1000);
	  }
