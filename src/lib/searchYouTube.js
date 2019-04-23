import YOUTUBE_API_KEY from '../config/youtube.js';

// options must include part = snippet, key = youtube_api_key

var searchYouTube = (options, successCB = null, errorCB = null) => {
  options.maxResults = options.max || 5;
  options.part = 'snippet';
  options.type = 'video';
  options.videoEmbeddable = true;
  $.ajax({
    method: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: options,
    contentType: 'application/json',
    dataType: 'json',
    success: successCB || function(data) {
      console.log(data);
    },
    error: errorCB || function(error) {
      console.error('failed to retrieve search results'); 
    }
  });
};

export default searchYouTube;