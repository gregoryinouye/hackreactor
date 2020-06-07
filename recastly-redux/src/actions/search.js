import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {
  //TODO:  Write an asynchronous action to handle a video search!
  return function(dispatch) {
    searchYouTube({key: YOUTUBE_API_KEY, query: q, max: 5}, (data) => {
      dispatch(changeVideo(data[0]));
      dispatch(changeVideoList(data));
    });
  };
};

export default handleVideoSearch;
