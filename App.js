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

import TopMovies from './components/TopMovies';

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <SafeAreaView>

        <TopMovies/>

      </SafeAreaView>
    );
  }
}

export default App;