import React from 'react';

class MovieListEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="movieListEntry">{this.props.movie.title}</div>
  }
}

export default MovieListEntry;