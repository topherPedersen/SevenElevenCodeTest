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
import { ADD_TOP_MOVIES } from '../actions/types';

class Movie extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <View>
        <Text>TITLE: {this.props.title}</Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return { topMovies: state.topMoviesStore.topMovies };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addTopMovies: (topMoviesPayload) => dispatch({type: ADD_TOP_MOVIES, payload: topMoviesPayload})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Movie);