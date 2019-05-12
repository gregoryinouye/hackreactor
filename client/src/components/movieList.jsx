import React from 'react';
import MovieListEntry from './MovieListEntry.jsx';

class MovieList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return this.props.movies.map((element, index) => (<MovieListEntry movie={element} key={index}/>))
  }
}

export default MovieList;