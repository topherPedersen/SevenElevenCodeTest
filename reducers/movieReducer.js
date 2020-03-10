import { 
  POPULATE_LIST_OF_TOP_MOVIES,
  TOGGLE_FAVORITE,
} from '../actions/types';

const initialState = {
  topMovies: []
};

// The populateListOfTopMoviesReducer handles updating our redux store
// whenever we receive new movie data from the the API. 
const movieReducer = (state, action) => {

  // check for state undefined to prevent 
  // redux from crashing app on load
  if (typeof state === 'undefined') {
    return JSON.parse(JSON.stringify(initialState));
  }

  if (action.type === POPULATE_LIST_OF_TOP_MOVIES) {
    const newState = {
      topMovies: action.payload
    };
    return JSON.parse(JSON.stringify(newState));
  } else if (action.type === TOGGLE_FAVORITE) {
    // alert("TOGGLE FAVORITE!");
    // todo: toggle favorite
    const movieTitle = action.payload;
    const newState = JSON.parse(JSON.stringify(state));
    // Loop through our list of topMovies until we identify
    // the title we are searching for. After we find the title
    // for which we are looking, toggle the state of "isFavorite".
    for (var i = 0; i < newState.topMovies.length; i++) {
      if (movieTitle === newState.topMovies[i].title) {
        // toggle isFavorite state
        newState.topMovies[i].isFavorite = !newState.topMovies[i].isFavorite;
      }
    }
    return JSON.parse(JSON.stringify(newState));
  }

  // If none of the conditions above are true,
  // simply return the current state
  return JSON.parse(JSON.stringify(state));
}

export default movieReducer;