// this is the response with "Star Wars" as the search term: 
// https://www.googleapis.com/youtube/v3/search/?part=snippet&key=AIzaSyCPWjySIA5H7YD_VOrL04seDaDdSuUS5Vw&q=Star%20Wars

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
  console.log(data.items);
  console.log(data);
  var resultElement = '';

  if (data.items) {
    for (var i=0; i < data.items.length; i++) {
      data.items.forEach(function(item) {
      console.log(data.items[i].snippet.thumbnails.medium.url);
      });
    }   
  }
  else {
    resultElement += '<p> No results </p>';
  }
  $('.js-search-results').html(resultElement);

//   function displayOMDBSearchData(data) {
//   var resultElement = '';
//   if (data.Search) {
//     data.Search.forEach(function(item) {
//      resultElement += '<p>' + item.Title + '</p>';
//     });
//   }
//   else {
//     resultElement += '<p>No results</p>';
//   }
  
//   $('.js-search-results').html(resultElement);
// }

  // data.items[i].snippet.thumbnails.medium.url
  // var resultElement = '';
  // if (data.Search) {
  //   data.Search.forEach(function(item) {
  //    resultElement += "<p>" + item + "</p>";
  //   });
  // }
  // else {
  //   resultElement += '<p>No results</p>';
  // }
  
  // $('.js-search-results').html(resultElement);
}

function watchSubmit() {
  $('.js-search-form').submit(function(e) {
    e.preventDefault();
    var query = $(this).find('.js-query').val();
    getDataFromApi(query, displayYouTubeSearchData);
  });
}

$(function(){watchSubmit();});

