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
      <View style={{flex: 1, flexDirection: 'row'}}>

        <View style={{flex: 67, backgroundColor: "white"}}>
          <Text>{this.props.title}</Text>
        </View>

        <View style={{flex: 33, backgroundColor: "white"}}>
          <Button title="Favorite" />
        </View>

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