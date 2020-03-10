import { 
  ADD_MOVIE_TO_FAVORITES, 
  REMOVE_MOVIE_FROM_FAVORITES 
} from '../actions/types';

const initialState = {
  favoriteMovies: []
};

// The addTopMoviesReducer handles updating our redux store
// whenever we receive new movie data from the the API. 
const updateFavoriteMoviesReducer = (state, action) => {

  // check for state undefined to prevent 
  // redux from crashing app on load
  if (typeof state === 'undefined') {
    return JSON.parse(JSON.stringify(initialState));
  }

  // Note: consider changing this to a switch statement
  // if many action types added
  if (action.type === ADD_MOVIE_TO_FAVORITES) {
    const newFavorite = action.payload;
    const newState = JSON.parse(JSON.stringify(state));
    const indexOfNextMovie = newState.length;
    newState[indexOfNextMovie] = newFavorite;
    return JSON.parse(JSON.stringify(newState));
  } else if (action.type === REMOVE_MOVIE_FROM_FAVORITES) {
    const newState = {
      favoriteMovies: action.payload
    };
  }

  // If none of the conditions above are true,
  // simply return the current state
  return JSON.parse(JSON.stringify(state));
}

export default updateFavoriteMoviesReducer;