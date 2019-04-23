import YOUTUBE_API_KEY from '../config/youtube.js';

// options must include part = snippet, key = youtube_api_key

var searchYouTube = (options, successCB = null, errorCB = null) => {
  let searchTerms = {};
  searchTerms.key = options.key;
  searchTerms.maxResults = options.max || 5;
  searchTerms.part = 'snippet';
  searchTerms.q = options.query;
  searchTerms.type = 'video';
  searchTerms.videoEmbeddable = true;
  $.ajax({
    method: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: searchTerms,
    contentType: 'application/json',
    dataType: 'json',
    success: function(data) {
      return successCB(data.items);
    },
    error: errorCB || function(error) {
      console.error('failed to retrieve search results'); 
    }
  });
};

export default searchYouTube;