import React from 'react';
import { Provider } from 'react-redux';

import Board from './board.jsx'
import store from '../store.jsx';

class App extends React.Component {
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
