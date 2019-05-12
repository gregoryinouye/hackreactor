import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: []
    }

    this.updateRepoList = this.updateRepoList.bind(this);
  }

  updateRepoList() {
    $.get('/repos', {}, (data) => {
      this.setState({repos: data});
    });
  }

  search (term) {
    console.log(`${term} was searched`);
    $.post('/repos', {username: term}, this.updateRepoList);
  }

  componentDidMount() {
    this.updateRepoList();
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <Search onSearch={this.search.bind(this)}/>
      <RepoList repos={this.state.repos}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));