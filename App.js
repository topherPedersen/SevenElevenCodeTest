/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { API_KEY } from './apikey.js';

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <SafeAreaView>
        <Text>7-Eleven Code Test</Text>
        <Text>{API_KEY}</Text>
      </SafeAreaView>
    );
  }
}

export default App;
