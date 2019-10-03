import React from 'react';
import Board from './board.jsx'
import { Provider } from 'react-redux';
import store from '../store.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <Provider store={store}>
        <div>
          <Board />
        </div>
      </Provider>
    );
  }
}

export default App;
