// **** APP COMPONENT **** //

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCheckout: true,
      showFormOne: false,
      showFormTwo: false,
      showFormThree: false,
      showConfirmation: false,
      showCompleted: false,
      formOne: {
        name: '',
        email: '',
        password: ''
      },
      formTwo: {
        shippingAddress1: '',
        shippingAddress2: '',
        city: '',
        state: '',
        zipcode: '',
        phoneNumber: ''
      },
      formThree: {
        creditCardNumber: '',
        expirationDate: '',
        cvv: '',
        billingZipCode: '',
      }
    };

    this.checkout = this.checkout.bind(this);
    this.submitFormOne = this.submitFormOne.bind(this);
    this.submitFormTwo = this.submitFormTwo.bind(this);
    this.submitFormThree = this.submitFormThree.bind(this);
    this.purchase = this.purchase.bind(this);
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
    this.setState({showFormThree: false, showConfirmation: true});
  }

  purchase() {
    this.setState({showConfirmation: false, showCompleted: true})
  }

  reset() {
    this.setState({showCompleted: false, showCheckout: true});
  }

  render() {
    return <div className="App">
      {this.state.showCheckout ? <Checkout next={this.checkout}/> : null}
      {this.state.showFormOne ? <FormOne data={this.state.formOne} next={this.submitFormOne}/> : null}
      {this.state.showFormTwo ? <FormTwo data={this.state.formTwo} next={this.submitFormTwo}/> : null}
      {this.state.showFormThree ? <FormThree data={this.state.formThree} next={this.submitFormThree}/> : null}
      {this.state.showConfirmation ? <Confirmation dataOne={this.state.formOne} dataTwo={this.state.formTwo} dataThree={this.state.formThree} next={this.purchase}/> : null}
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

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.id]: event.target.value});
  }

  handleSubmit(event) {
    console.log(JSON.stringify(this.props.data));
    this.props.next();
  }

  render() {
    return <div>
      <h3>Form One</h3>
      <form onSubmit={this.handleSubmit}>
        <label>Name:
          <input type="text" id="name" value={this.props.data.name} onChange={this.handleChange} required/>
        </label>
        <br></br>
        <label>Email:
          <input type="text" id="email" value={this.props.data.email} onChange={this.handleChange} required/>
        </label>
        <br></br>
        <label>Password:
          <input type="text" id="password" value={this.props.data.password} onChange={this.handleChange} required/>
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

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event) {
    this.setState({[event.target.id]: event.target.value});
  }

  handleSubmit(event) {
    console.log(JSON.stringify(this.props.data));
    this.props.next();
  }

  render() {
    return <div>
      <h3>Form Two</h3>
      <form onSubmit={this.handleSubmit}>
        <label>Shipping Address Line 1:
          <input type="text" id="shippingAddress1" value={this.props.shippingAddress1} onChange={this.handleChange} required/>
        </label>
        <br></br>
        <label>Shipping Address Line 2:
          <input type="text" id="shippingAddress2" value={this.props.shippingAddress2} onChange={this.handleChange}/>
        </label>
        <br></br>
        <label>City:
          <input type="text" id="city" value={this.props.city} onChange={this.handleChange} required/>
        </label>
        <br></br>
        <label>State:
          <input type="text" id="state" value={this.props.state} onChange={this.handleChange} required/>
        </label>
        <br></br>
        <label>Zip Code:
          <input type="text" id="zipcode" value={this.props.zipcode} onChange={this.handleChange} required/>
        </label>
        <br></br>
        <label>Phone Number:
          <input type="text" id="phoneNumber" value={this.props.phoneNumber} onChange={this.handleChange} required/>
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
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event) {
    this.setState({[event.target.id]: event.target.value});
  }

  handleSubmit(event) {
    console.log(JSON.stringify(this.props.data));
    this.props.next();
  }

  render() {
    return <div>
      <h3>Form Three</h3>
      <form onSubmit={this.handleSubmit}>
        <label>Credit Card Number:
          <input type="text" id="creditCardNumber" value={this.props.shippingAddress1} onChange={this.handleChange} required/>
        </label>
        <br></br>
        <label>Expiration Date:
          <input type="text" id="expirationDate" value={this.props.shippingAddress2} onChange={this.handleChange}/>
        </label>
        <br></br>
        <label>CVV:
          <input type="text" id="cvv" value={this.props.city} onChange={this.handleChange} required/>
        </label>
        <br></br>
        <label>Billing Zip Code:
          <input type="text" id="billingZipCode" value={this.props.billingZipCode} onChange={this.handleChange} required/>
        </label>
        <button type="button" onClick={this.handleSubmit}>Next</button>
      </form>
      </div>
  }
}

// **** CONFIRMATION COMPONENT **** //

class Confirmation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>
      <h3>Confirmation</h3>
      <div>{JSON.stringify(this.props.dataOne)}</div>
      <div>{JSON.stringify(this.props.dataTwo)}</div>
      <div>{JSON.stringify(this.props.dataThree)}</div>
      <button onClick={this.props.next}>Purchase</button>
    </div>
  }
}


// **** COMPLETED COMPONENT **** //

class Completed extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>
      <h3>Purchase Completed</h3>
      <button onClick={this.props.next}>Shop Again</button>
    </div>
  }
}


// **** RENDER **** //

ReactDOM.render(
  <App/>, document.getElementById('app')
);