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
  FlatList,
} from 'react-native';

// The MovieDB JavaScript Libraries Recommended by The MovieDB
// https://github.com/EtienneWan/tmdb-js/
// https://github.com/cavestri/themoviedb-javascript-library/

// Discover Endpoint Reference: https://www.themoviedb.org/documentation/api/discover

import { 
  API_KEY, 
  ACCESS_TOKEN 
} from '../apikey.js';

import Movie from './Movie';

// Redux
import { connect } from 'react-redux';
import { POPULATE_LIST_OF_TOP_MOVIES } from '../actions/types';

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

        // Create an array of topMovies
        topMovies = data.results.map( (result) => { 
          return {
            title: result.original_title,
            id: Math.random().toString(),
            isFavorite: false,
          };
        });

        // Dispatch an action to add the topMovies to our Redux Store
        this.props.populateListOfTopMovies(topMovies);

      });
  }

  debugReduxStore() {
    let propStr = JSON.stringify(this.props);
    alert(propStr);
  }

  debugFavorites() {
    let propStr = JSON.stringify(this.props.favoriteMovies);
    alert(propStr);
  }

  viewFavorites() {
    // alert("View Favorites!");
    const favoriteMovies = this.props.favoriteMovies;
    const favoriteMoviesStr = JSON.stringify(favoriteMovies);
    alert(favoriteMoviesStr);
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

        <Button 
          title="View Favorites"
          onPress={ () => this.viewFavorites() } />

        {/*
        <Button 
          title="Debug Favorites"
          onPress={ () => this.debugFavorites() } />

        <Button 
          title="Debug Redux Store"
          onPress={ () => this.debugReduxStore() } />
        */}

        <FlatList
          data={this.props.topMovies} 
          renderItem={ ({item}) => 
            <Movie title={item.title} />
          }
          keyExtractor={ item => item.id } />

      </SafeAreaView>
    );

  }
}

const mapStateToProps = (state) => {
  return { 
    topMovies: state.topMoviesStore.topMovies,
    favoriteMovies: state.favoriteMoviesStore.favoriteMovies,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    populateListOfTopMovies: (topMoviesPayload) => dispatch({type: POPULATE_LIST_OF_TOP_MOVIES, payload: topMoviesPayload})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TopMovies);