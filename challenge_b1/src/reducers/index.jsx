import { combineReducers } from 'redux';
import moveReducer from './moveReducer.jsx';

export default combineReducers({
  move: moveReducer
});
