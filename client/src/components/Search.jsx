import React from 'react';

var Search = (props) => (
  <form>
    <input name="searchbar" type="text" value={props.searchTerm} onChange={props.handleSearch}></input>
    <button type="button" value={props.searchTerm} onClick={props.handleSubmit}>Search</button>
  </form>
);

export default Search;