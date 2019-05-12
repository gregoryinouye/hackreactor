import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    }
  }

  render() {
    return <form><input name="searchbar"></input><button type="submit">Go!</button></form>
  }
}

export default Search;