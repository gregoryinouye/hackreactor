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
    this.setState({showCheckout: false, showFormOne: true});
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
    this.state = {
      name: '',
      email: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.id]: event.target.value});
  }

  handleSubmit(event) {
    console.log(JSON.stringify(this.state));
    this.props.next();
  }

  render() {
    return <div>
      <h3>Form One</h3>
      <form onSubmit={this.handleSubmit}>
        <label>Name:
          <input type="text" id="name" value={this.state.name} onChange={this.handleChange} required/>
        </label>
        <br></br>
        <label>Email:
          <input type="text" id="email" value={this.state.email} onChange={this.handleChange} required/>
        </label>
        <br></br>
        <label>Password:
          <input type="text" id="password" value={this.state.password} onChange={this.handleChange} required/>
        </label>
        <button type="button" onClick={this.handleSubmit}>Next</button>
        {/* <input type="submit" value="Next"/> */}
      </form>
      </div>
  }
}


// **** FORM TWO COMPONENT **** //

class FormTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shippingAddress1: '',
      shippingAddress2: '',
      city: '',
      state: '',
      zipcode: '',
      phoneNumber: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event) {
    this.setState({[event.target.id]: event.target.value});
  }

  handleSubmit(event) {
    console.log(JSON.stringify(this.state));
    this.props.next();
  }

  render() {
    return <div>
      <h3>Form Two</h3>
      <form onSubmit={this.handleSubmit}>
        <label>Shipping Address Line 1:
          <input type="text" id="shippingAddress1" value={this.state.shippingAddress1} onChange={this.handleChange} required/>
        </label>
        <br></br>
        <label>Shipping Address Line 2:
          <input type="text" id="shippingAddress2" value={this.state.shippingAddress2} onChange={this.handleChange}/>
        </label>
        <br></br>
        <label>City:
          <input type="text" id="city" value={this.state.city} onChange={this.handleChange} required/>
        </label>
        <br></br>
        <label>State:
          <input type="text" id="state" value={this.state.state} onChange={this.handleChange} required/>
        </label>
        <br></br>
        <label>Zip Code:
          <input type="text" id="zipcode" value={this.state.zipcode} onChange={this.handleChange} required/>
        </label>
        <br></br>
        <label>Phone Number:
          <input type="text" id="phoneNumber" value={this.state.phoneNumber} onChange={this.handleChange} required/>
        </label>
        <button type="button" onClick={this.handleSubmit}>Next</button>
      </form>
      </div>
  }
}


// **** FORM THREE COMPONENT **** //

class FormThree extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      creditCardNumber: '',
      expirationDate: '',
      cvv: '',
      billingZipCode: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event) {
    this.setState({[event.target.id]: event.target.value});
  }

  handleSubmit(event) {
    console.log(JSON.stringify(this.state));
    this.props.next();
  }

  render() {
    return <div>
      <h3>Form Three</h3>
      <form onSubmit={this.handleSubmit}>
        <label>Credit Card Number:
          <input type="text" id="creditCardNumber" value={this.state.shippingAddress1} onChange={this.handleChange} required/>
        </label>
        <br></br>
        <label>Expiration Date:
          <input type="text" id="expirationDate" value={this.state.shippingAddress2} onChange={this.handleChange}/>
        </label>
        <br></br>
        <label>CVV:
          <input type="text" id="cvv" value={this.state.city} onChange={this.handleChange} required/>
        </label>
        <br></br>
        <label>Billing Zip Code:
          <input type="text" id="billingZipCode" value={this.state.state} onChange={this.handleChange} required/>
        </label>
        <button type="button" onClick={this.handleSubmit}>Submit</button>
      </form>
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