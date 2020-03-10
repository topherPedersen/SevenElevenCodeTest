import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

// Redux
import { createStore } from 'redux';
import { 
  connect, 
  Provider, 
} from 'react-redux';

// Redux Actions & Reducers
import movieReducer from './reducers/movieReducer';
import { 
  POPULATE_LIST_OF_TOP_MOVIES, 
  TOGGLE_FAVORITE,
} from './actions/types';

import TopMovies from './components/TopMovies';

const store = createStore(movieReducer);

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <Provider store={store}>
        <TopMovies/>
      </Provider>
    );
  }
}

export default App;