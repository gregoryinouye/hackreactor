// **** APP COMPONENT **** //

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // formOne: false,
      // formTwo: false,
      // formThree: false
    };
  }

  checkout() {
    // e => {
    //   e.preventDefault();
    //   console.log('start checkout');
    // }
  }

  render() {
    return <div className="App">
      <button onClick={this.checkout}>Checkout</button>
    </div>
  }
}

// **** RENDER **** //

ReactDOM.render(
  <App />, document.getElementById('app')
);


// import React from 'react';
// import ReactDOM from 'react-dom';