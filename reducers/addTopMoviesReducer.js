import { ADD_TOP_MOVIES } from '../actions/types';

const initialState = {
  topMovies: []
};

// The addTopMoviesReducer handles updating our redux store
// whenever we receive new movie data from the the API. 
const addTopMoviesReducer = (state, action) => {

  // check for state undefined to prevent 
  // redux from crashing app on load
  if (typeof state === 'undefined') {
    return JSON.parse(JSON.stringify(initialState));
  }

  if (action.type === ADD_TOP_MOVIES) {
    const newState = {
      topMovies: action.payload.persons,
    };
    return JSON.parse(JSON.stringify(newState));
  }

  // If none of the conditions above are true,
  // simply return the current state
  return JSON.parse(JSON.stringify(state));
}

export default addTopMoviesReducer;