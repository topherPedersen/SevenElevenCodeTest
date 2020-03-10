import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  ActivityIndicator,
} from 'react-native';

// The MovieDB JavaScript Libraries Recommended by The MovieDB
// https://github.com/EtienneWan/tmdb-js/
// https://github.com/cavestri/themoviedb-javascript-library/

// Discover Endpoint Reference: https://www.themoviedb.org/documentation/api/discover

import { 
  API_KEY, 
  ACCESS_TOKEN 
} from '../apikey.js';

// Redux
import { connect } from 'react-redux';
import { ADD_TOP_MOVIES } from '../actions/types';

class TopMovies extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.fetchMovieData();
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

    // If we have not yet retrieved any data from the Movie DB API,
    // display a loading spinner (Activity Indicator)
    if(this.props.topMovies.length < 1) {
      return(
        <SafeAreaView>

          <Text>Top Movies...</Text>

          <ActivityIndicator size="large" color="#0000ff" />

        </SafeAreaView>
      );
    }

    // If we have retrieved our list of top movies from the Movie DB API,
    // display those movies in a FlatList...
    return(
      <SafeAreaView>

        <Text>Top Movies...</Text>

        <Text>TODO: Add a FlatList and wire it up to our Redux store</Text>

      </SafeAreaView>
    );

  }
}

const mapStateToProps = (state) => {
  return { topMovies: state.topMovies };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addTopMovies: (topMoviesPayload) => dispatch({type: ADD_TOP_MOVIES, payload: topMoviesPayload})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TopMovies);