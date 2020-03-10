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

// The MovieDB JavaScript Libraries Recommended by The MovieDB
// https://github.com/EtienneWan/tmdb-js/
// https://github.com/cavestri/themoviedb-javascript-library/

// Discover Endpoint Reference: https://www.themoviedb.org/documentation/api/discover

import { 
  API_KEY, 
  ACCESS_TOKEN 
} from './apikey.js';

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  fetchMovieData() {

    // Construct our MovieDB Endpoint URL and Add HTTP GET Request Parameters
    let URL = 'https://api.themoviedb.org/3/discover/movie';
    URL = URL + '?api_key=' + API_KEY;
    URL = URL + '&sort_by=popularity.desc'; 

    fetch(URL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const dataStr = JSON.stringify(data);
        alert(dataStr)
      });
  }

  render() {
    return(
      <SafeAreaView>

        <Text>7-Eleven Code Test</Text>

        <Button
          title="Fetch Movie Data"
          onPress={ () => this.fetchMovieData() }/>

      </SafeAreaView>
    );
  }
}

export default App;