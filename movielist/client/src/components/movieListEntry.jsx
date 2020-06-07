import React from 'react';

var MovieListEntry = (props) => (
  <div className="movieListEntry">{props.movie.title}</div>
);

export default MovieListEntry;