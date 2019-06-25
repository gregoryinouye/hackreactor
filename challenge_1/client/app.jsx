import React from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';

import EventList from './EventList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pageCount: 50,
      query: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    e.preventDefault();
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    // send GET
    console.log('searched!');
  }

  handlePageClick(e) {
    console.log(`page change to ${e.selected}`);
  }

  render() {
    const { query } = this.state;

    return (
      <div>
        <div>Historical Event Finder</div>
        <br></br>
        <form onSubmit={this.handleSubmit}>
          <label>Query:</label> <input type="text" name="query" value={query} onChange={this.handleChange} /> <input type="submit" />
        </form>
        <br></br>
        <EventList events={[]}/>
        <br></br>
        <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={this.state.pageCount}
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
