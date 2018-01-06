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
	  