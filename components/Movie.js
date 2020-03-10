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

// Redux
import { connect } from 'react-redux';
import { POPULATE_LIST_OF_TOP_MOVIES } from '../actions/types';

// Shorten Title Utility
const truncateTitle = (title, maxLength) => {
    if (title.length > maxLength) {
      const truncatedTitle = title.slice(0, maxLength - 3) + "...";
      return title.slice(0, maxLength - 3) + "...";
    } else {
      return title;
    }
};

class Movie extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <View style={{flex: 1, flexDirection: 'row'}}>

        <View style={{flex: 67, backgroundColor: "white"}}>
          <Text>{truncateTitle(this.props.title, 25)}</Text>
        </View>

        <View style={{flex: 33, backgroundColor: "white"}}>
          <Button title="Favorite" />
        </View>

      </View>
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
    addMovieToFavorites: (payload) => dispatch({type: POPULATE_LIST_OF_TOP_MOVIES, payload: payload}),
    removeMovieFromFavorites: (payload) => dispatch({type: POPULATE_LIST_OF_TOP_MOVIES, payload: payload}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Movie);