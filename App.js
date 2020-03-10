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
import addTopMoviesReducer from './reducers/addTopMoviesReducer';
import { ADD_TOP_MOVIES } from './actions/types';

import TopMovies from './components/TopMovies';

const store = createStore(addTopMoviesReducer)

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