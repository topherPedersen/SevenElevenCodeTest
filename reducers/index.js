import { combineReducers } from 'redux';
import populateListOfTopMoviesReducer from './populateListOfTopMoviesReducer';
import updateFavoriteMoviesReducer from './updateFavoriteMoviesReducer';

export default combineReducers({
  topMoviesStore: populateListOfTopMoviesReducer,
  favoriteMoviesStore: updateFavoriteMoviesReducer,
});