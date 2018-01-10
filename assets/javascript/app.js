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

  });
  $('#sdaness').on('click', function(){
    searchTerm += 'sorrowful dirge somber';
    getRequest(searchTerm);
    console.log(searchTerm);
    
  });
  $('#grr').on('click', function(){
    searchTerm += 'metal battle rage';
    getRequest(searchTerm);
    console.log(searchTerm);

  });
  $('#eek').on('click', function(){
    searchTerm += 'suspensful dramatic score';
    getRequest(searchTerm);
    console.log(searchTerm);

  });
  $('#spris').on('click', function(){
    searchTerm += 'shock alarm ska big_band';
    getRequest(searchTerm);
    console.log(searchTerm);

  });
  $('#disguss').on('click', function(){
    searchTerm += 'revolt disgust grunge';
    getRequest(searchTerm);
    console.log(searchTerm);

  });
  $('#nrtral').on('click', function(){
    searchTerm += 'calm waiting generic';
    getRequest(searchTerm);
    console.log(searchTerm);

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
      } else if (emote.disgust >= 50) {
        searchTerm += 'revolt disgust grunge';
      } else if (emote.anger >= 50) {
        searchTerm += 'metal battle rage';
      } else if (emote.surprise >= 50) {
        searchTerm += 'shock alarm big_band ska';
      } else if (emote.fear >= 50) {
        searchTerm += 'suspensful dramatic score';
      } else if (emote.happiness >= 50) {
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
      
    searchTerm = searchTerm += ' -vevo music playlist';
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
    
    $.each(entries, function (index, value) {
      var title = value.snippet.title;
      html += '<p>' + " " + '</p>';
      html += '<iframe id="player" width="300" height="300" src="https://www.youtube.com/embed/'+ value.id.videoId + '" frameborder="0" marginwidth="50" allowfullscreen></iframe> ';
    }); 
    
    $('#search-results').html(html);
    }

