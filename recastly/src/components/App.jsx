import Search from './Search.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import searchYouTube from '../lib/searchYouTube.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      focusedVideo: {
        etag: '',
        id: {
          videoId: ''
        },
        snippet: {
          title: '',
          description: '',
          thumbnails: {
            default: {
              url: '',
            }
          }
        }
      },

      videoList: [{
        etag: '',
        id: {
          videoId: ''
        },
        snippet: {
          title: '',
          description: '',
          thumbnails: {
            default: {
              url: '',
            }
          }
        }
      }],

    };

    this.handleClick = this.handleClick.bind(this);
    this.updateVideoList = this.updateVideoList.bind(this);
  }

  componentDidMount() {
    this.updateVideoList();
  }

  handleClick(video) {
    this.setState({focusedVideo: video});
  }

  updateVideoList(terms = 'cats') {
    var data = searchYouTube({query: terms, key: YOUTUBE_API_KEY, max: 10}, (data) => data);
    this.setState({videoList: data});
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><Search state={this.state} search={searchYouTube}/></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><VideoPlayer video={this.state.focusedVideo}/></div>
          </div>
          <div className="col-md-5">
            <div><VideoList videos={this.state.videoList} onClick={this.handleClick}/></div>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
