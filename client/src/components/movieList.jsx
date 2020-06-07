import React from 'react';
import MovieListEntry from './MovieListEntry.jsx';

var MovieList = (props) => {
  let rendered = props.movies.map((element, index) => {
    if (element.title.includes(props.search)) {
    return <MovieListEntry movie={element} key={index}/>
    }});
  return rendered.every(element => element === undefined) ? <div>No movies matching that search were found.</div> : rendered;
};

export default MovieList;