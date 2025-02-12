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

// TheMovieDB.org Discover Endpoint Reference: https://www.themoviedb.org/documentation/api/discover

// NOTE: apikey.js is included in the .gitignore file and is hidden from this repo.
// Create your own apikey.js file to store your keys. Name your keys API_KEY and ACCESS_TOKEN
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

  viewFavorites() {

    // Get list of top movies
    const topMovies = this.props.topMovies;

    // Loop through list of top movies to identify 
    // which movies have been added to the favorites list
    let numberOfMoviesFavorited = 0;
    let favoriteMoviesStr = "";
    for (var i = 0; i < topMovies.length; i++) {
      if (topMovies[i].isFavorite) {
        favoriteMoviesStr += topMovies[i].title + "\n";
        numberOfMoviesFavorited++;
      }
    }

    // Display an alert dialog containing the list of favorite movies
    if (numberOfMoviesFavorited > 0) {
      alert(favoriteMoviesStr);
    } else {
      alert("No Movies Added to Favorites");
    }
  }

  render() {

    // If we have not yet retrieved any data from the Movie DB API,
    // display a loading spinner (Activity Indicator)
    
    if(this.props.topMovies.length < 1) {
      return(
        <SafeAreaView style={{flex: 1}}>

          <View style={{flex: 1}}>


            <View style={{flex: 10, justifyContent: 'center'}}>
              <Text style={{textAlign: 'center', marginTop: 15, marginBottom: 15}}>7-Eleven Code Test</Text>
            </View>

            <View style={{flex: 90, justifyContent: 'center'}}>
              <ActivityIndicator size="large" color="#0000ff" />
            </View>

          </View>

        </SafeAreaView>
      );
    }

    // If we have retrieved our list of top movies from the Movie DB API,
    // display those movies in a FlatList...
    return(
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1}}>

          <View style={{flex: 10, justifyContent: 'center'}}>
            <Text style={{textAlign: 'center', marginTop: 15, marginBottom: 15}}>7-Eleven Code Test</Text>
          </View>

          <View style={{flex: 80}}>

            <FlatList
              data={this.props.topMovies} 
              renderItem={ ({item}) => 
                <Movie 
                  title={item.title} 
                  isFavorite={item.isFavorite} />
              }
              keyExtractor={ item => item.id } />

          </View>

          <View style={{flex: 10, justifyContent: 'center'}}>
            <Button 
              title="View Favorites"
              onPress={ () => this.viewFavorites() } />
          </View>

        </View>
      </SafeAreaView>
    );

  }
}

const mapStateToProps = (state) => {
  return { 
    topMovies: state.topMovies
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    populateListOfTopMovies: (topMoviesPayload) => dispatch({type: POPULATE_LIST_OF_TOP_MOVIES, payload: topMoviesPayload})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TopMovies);