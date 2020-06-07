import VideoList from '../../src/components/VideoList.js';
import VideoListEntry from '../../src/components/VideoListEntry.js';

describe('VideoList', function() {
  var { createRenderer } = React.addons.TestUtils;

  // When testing a React component that renders other nested components,
  // it's a common practice to "shallow render" the component, or render
  // only a single level deep. This isolates the component from it's children
  // See more: https://facebook.github.io/react/docs/test-utils.html#shallow-rendering

  it('should be a stateless functional component', function() {
    expect(React.Component.isPrototypeOf(VideoList)).to.be.false;
  });

  it('should render one `VideoListEntry` when given one video', function() {
    var shallowRenderer = createRenderer();

    var oneFakeVideo = window.fakeVideoData.slice(-1);
    shallowRenderer.render(
      <VideoList videos={oneFakeVideo} />
    );

    var videoList = shallowRenderer.getRenderOutput();
    expect(videoList.props.children).to.have.length(1);
    videoList.props.children.forEach(child => expect(child.type).to.equal(VideoListEntry));
  });

  it('should render three `VideoListEntry` when given three videos', function() {
    var shallowRenderer = createRenderer();

    var threeFakeVideos = window.fakeVideoData.slice(-3);
    shallowRenderer.render(
      <VideoList videos={threeFakeVideos} />
    );
    
    var videoList = shallowRenderer.getRenderOutput();
    expect(videoList.props.children).to.have.length(3);
    videoList.props.children.forEach(child => expect(child.type).to.equal(VideoListEntry));
  });

  it('should render five `VideoListEntry` when given five videos', function() {
    var shallowRenderer = createRenderer();

    var fiveFakeVideos = window.fakeVideoData.slice(-5);
    shallowRenderer.render(
      <VideoList videos={fiveFakeVideos} />
    );
    
    var videoList = shallowRenderer.getRenderOutput();
    expect(videoList.props.children).to.have.length(5);
    videoList.props.children.forEach(child => expect(child.type).to.equal(VideoListEntry));
  });
});