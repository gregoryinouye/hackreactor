import React from 'react';
import MovieList from './MovieList.jsx';
import Search from './Search.jsx';
import MovieAdd from './MovieAdd.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],

      movieAdd: '',

      searchTerm: ''
    };
  };

  handleSearch(e) {
    this.setState({searchTerm: e.target.value});
  };

  handleMovieAdd(e) {
    this.setState({movieAdd: e.target.value});
  }

  handleMovieSubmit(e) {
    this.setState({movies: this.state.movies.concat({title: this.state.movieAdd})});
    this.setState({movieAdd: ''});
  }

  render() {
    return <div>
      <MovieAdd movie={this.state.movieAdd} change={this.handleMovieAdd.bind(this)} submit={this.handleMovieSubmit.bind(this)}/>
      <br></br>
      <Search class="search" term={this.state.searchTerm} handleSearch={this.handleSearch.bind(this)}/>
      <br></br>
      <MovieList movies={this.state.movies} search={this.state.searchTerm}/>
    </div>
  };
};

export default App;