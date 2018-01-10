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
			var searchTerm = $('#exampleFormControlInput1').val().trim();
			getRequest(searchTerm);
		});
	  });
	  
	  function getRequest(searchTerm) {
		// validation
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
	  }