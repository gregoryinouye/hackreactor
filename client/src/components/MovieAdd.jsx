import React from 'react';

var MovieAdd = (props) =>
  <form>
    <input type="text" name="MovieAdd" value={props.movie} onChange={props.change}></input>
    <button type="reset" onClick={props.submit}>Add</button>
  </form>;

export default MovieAdd;