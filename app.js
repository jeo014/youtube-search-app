
var YOUTUBE_BASE_URL = 'https://www.googleapis.com/youtube/v3/search';

function getDataFromApi(searchTerm, callback) {
  var query = {
    part: 'snippet',
    key: 'AIzaSyCPWjySIA5H7YD_VOrL04seDaDdSuUS5Vw',
    q: searchTerm
  }
  $.getJSON(YOUTUBE_BASE_URL, query, callback);
  console.log(query);

}

function displayYouTubeSearchData(data) {
  console.log(data);
  var resultElement = '';
  for (var i=0; i < data.items.length; i++) {
    var currentImgURL = data.items[i].snippet.thumbnails.medium.url;
    var videoLink = 'https://youtube.com/watch?v=' + data.items[i].id.videoId;
    resultElement += '<a href="' + videoLink + '">' + '<img class="js-thumbnail" src="' + currentImgURL + '"/></a>';
  }
  $('.js-search-results').html(resultElement);
}

function watchSubmit() {
  $('.js-search-form').submit(function(e) {
    e.preventDefault();
    var query = $(this).find('.js-query').val();
    getDataFromApi(query, displayYouTubeSearchData);
  });
}

$(function(){watchSubmit();});