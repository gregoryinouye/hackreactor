import React from 'react';
import MovieList from './MovieList.jsx';
import Search from './Search.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [
        {title: 'Mean Girls'},
        {title: 'Hackers'},
        {title: 'The Grey'},
        {title: 'Sunshine'},
        {title: 'Ex Machina'},
      ],

      searchTerm: ''
    };
  };

  handleSearch(e) {
    this.setState({searchTerm: e.target.value});
  };

  render() {
    return <div>
      <Search class="search" term={this.state.searchTerm} handleSearch={this.handleSearch.bind(this)}/>
      <br></br>
      <MovieList movies={this.state.movies} search={this.state.searchTerm}/>
    </div>
  };
};

export default App;