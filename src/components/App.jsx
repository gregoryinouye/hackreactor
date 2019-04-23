import Search from './Search.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import exampleVideoData from '../data/exampleVideoData.js';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      focusedVideo: exampleVideoData[0]
    };
    // handleClick()
    // pass to VideoListEntry as a function
    // event handler in videoListEntry so when it's clicked, it jumps back to App.js
    // pass focusedVideo to videoPlayer
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><Search state={this.state}/></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><VideoPlayer video={exampleVideoData[0]} state={this.state}/></div>
          </div>
          <div className="col-md-5">
            <div><VideoList videos={exampleVideoData} state={this.state}/></div>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
