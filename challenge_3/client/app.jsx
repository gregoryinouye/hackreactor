// **** APP COMPONENT **** //

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCheckout: true,
      showFormOne: false,
      showFormTwo: false,
      showFormThree: false,
      showCompleted: false,
    };

    this.checkout = this.checkout.bind(this);
    this.submitFormOne = this.submitFormOne.bind(this);
    this.submitFormTwo = this.submitFormTwo.bind(this);
    this.submitFormThree = this.submitFormThree.bind(this);
    this.reset = this.reset.bind(this);
  };

  checkout() {
    // e => {
    //   e.preventDefault();
      console.log('start checkout');
      this.setState({showCheckout: false, showFormOne: true});
    // }
  };

  submitFormOne() {
    this.setState({showFormOne: false, showFormTwo: true});
  }

  submitFormTwo() {
    this.setState({showFormTwo: false, showFormThree: true});
  }

  submitFormThree() {
    this.setState({showFormThree: false, showCompleted: true});
  }

  reset() {
    this.setState({showCompleted: false, showCheckout: true});
  }

  render() {
    return <div className="App">
      {this.state.showCheckout ? <Checkout next={this.checkout}/> : null}
      {this.state.showFormOne ? <FormOne next={this.submitFormOne}/> : null}
      {this.state.showFormTwo ? <FormTwo next={this.submitFormTwo}/> : null}
      {this.state.showFormThree ? <FormThree next={this.submitFormThree}/> : null}
      {this.state.showCompleted ? <Completed next={this.reset}/> : null}
    </div>
  };
};


// **** CHECKOUT COMPONENT **** //

class Checkout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <button onClick={this.props.next}>Checkout</button>
  }
}


// **** FORM ONE COMPONENT **** //

class FormOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  render() {
    return <div>Form One
      <button onClick={this.props.next}>Next</button>
    </div>
  }
}


// **** FORM TWO COMPONENT **** //

class FormTwo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>Form Two
      <button onClick={this.props.next}>Next</button>
    </div>
  }
}


// **** FORM THREE COMPONENT **** //

class FormThree extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>Form Three
      <button onClick={this.props.next}>Submit</button>
    </div>
  }
}

// **** COMPLETED COMPONENT **** //

class Completed extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>Completed
      <button onClick={this.props.next}>Reset</button>
    </div>
  }
}


// **** RENDER **** //

ReactDOM.render(
  <App/>, document.getElementById('app')
);


// import React from 'react';
// import ReactDOM from 'react-dom';