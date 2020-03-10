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
} from '../apikey.js';

class TopMovies extends React.Component {
  constructor(props) {
    super(props)
  }

  fetchMovieData() {

    let topMovies;

    // Construct our MovieDB Endpoint URL and Add HTTP GET Request Parameters
    let URL = 'https://api.themoviedb.org/3/discover/movie';
    URL = URL + '?api_key=' + API_KEY;
    URL = URL + '&sort_by=popularity.desc'; 

    fetch(URL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {

        // const dataStr = JSON.stringify(data);
        // alert(dataStr)
        topMovies = data.results.map( (result) => { 
          return result.original_title;
        });

        alert(topMovies[0]);

      });
      // .then(alert(topMovies[0]));
  }

  render() {
    return(
      <SafeAreaView>

        <Text>Top Movies...</Text>
        <Text>feat. Redux!</Text>

        <Button
          title="Fetch Movie Data"
          onPress={ () => this.fetchMovieData() }/>

      </SafeAreaView>
    );
  }
}

export default TopMovies;