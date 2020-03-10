import { combineReducers } from 'redux';
import addTopMoviesReducer from './addTopMoviesReducer';
import otherReducer from './otherReducer';

export default combineReducers({
  topMoviesStore: addTopMoviesReducer,
  otherStore: otherReducer,
});