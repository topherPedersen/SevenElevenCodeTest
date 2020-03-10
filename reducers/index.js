import { combineReducers } from 'redux';
import populateListOfTopMoviesReducer from './populateListOfTopMoviesReducer';
import otherReducer from './otherReducer';

export default combineReducers({
  topMoviesStore: populateListOfTopMoviesReducer,
  otherStore: otherReducer,
});