import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Chart from 'chart.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currency: '',
      data: [],
      isApiRequest: false,
      lastCurrency: '',
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getBitcoinData() {
    const { currency, isApiRequest } = this.state;
    axios.get('/bitcoin', {
      params: {
        start: '2018-01-01',
        end: '2018-12-31',
        currency: currency,
        isApiRequest: isApiRequest,
      }
    })
    .then(response => {
      const { dates, prices } = response.data;
      this.setState({ dates, prices });
    })
    .catch(error => {
      console.error(error);
    });
  }

  handleChange(e) {
    const { name, value} = e.target;
    this.setState({ [name]: value });
  }

  handleCheck(e) {
    const { isApiRequest } = this.state;
    this.setState({ isApiRequest: !isApiRequest })
  }

  handleSubmit(e) {
    const { currency } = this.state;
    e.preventDefault();
    if (currency.length > 0) {
      this.getBitcoinData();
      this.setState({ lastCurrency: currency })
    };
  }

  render() {
    const { currency, isApiRequest, lastCurrency, dates, prices } = this.state;

    const myChart = new Chart('myChart', {
      type: 'line',
      data: {
        labels: dates,
        datasets: [{
          label: `Price of ${lastCurrency}`,
          data: prices,
          backgroundColor: 'aqua',
          borderColor: 'aqua',
          lineTension: 0,
          borderWidth: 3,
          fill: false,
          pointRadius: 0,
          pointBackgroundColor: 'aqua',
          pointHitRadius: '1',
          pointBorderColor: 'aqua',
          pointStyle: 'circle',
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
                beginAtZero: true
            }
          }]
        }
      }
    });

    return (
      <div>
        <div>
          <h1 style={{textAlign: "center"}}>Cryptocurrency Charting Tool</h1>
        </div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="currency">Select a cryptocurrency:</label>
            <select name="currency" value={currency} onChange={this.handleChange} style={{ margin: "5px" }}>
              <option value="" hidden>Select one</option>
              <option value="BTC">Bitcoin</option>
              <option value="ETH">Ethereum</option>
            </select>
            <label style={{ padding: "0px 3px 0px 0px" }} htmlFor="isApiRequest">Check to get live data:</label>
            <input type="checkbox" name="isApiRequest" checked={isApiRequest} onChange={this.handleCheck} />
            <input type="submit" value="Submit" style={{ margin: "5px" }}/>
          </form>
          
        </div>
        <div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
