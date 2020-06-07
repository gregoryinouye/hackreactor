import React from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import axios from 'axios';

import EventList from './EventList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [],
      lastSearch: '',
      pageCount: 0,
      query: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  componentDidMount() {
    this.searchEvents('', 1);
  }

  handleChange(e) {
    const { name, value } = e.target;
    e.preventDefault();
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    const { query } = this.state;
    e.preventDefault();
    this.searchEvents(query, 1);
  }

  handlePageClick(e) {
    const { lastSearch } = this.state;
    this.searchEvents(lastSearch, e.selected + 1);
  }

  searchEvents(query, numPage) {
    axios.get('/events', {
      params: {
        q: query,
        _page: numPage,
        _limit: 10,
      },
    })
    .then(response => {
      this.setState({ events: response.data, lastSearch: query, pageCount: Math.ceil(Number(response.headers['x-total-count']) / 10) });
    })
    .catch(error => {
      console.error(error);
    });
  }

  render() {
    const { events, pageCount, query } = this.state;

    return (
      <div>
        <div style={{textAlign: "center", fontSize: "28px"}}>Historical Event Finder</div>
        <br></br>
        <form onSubmit={this.handleSubmit} style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
          <label htmlFor="query">Search Events:</label> <input type="text" name="query" value={query} onChange={this.handleChange} /> <input type="submit" value="Search" />
        </form>
        <br></br>
        <EventList events={events}/>
        <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
        />
      </div>
    );
  };
}

ReactDOM.render(<App />, document.getElementById('app'));
