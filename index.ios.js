/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
} from 'react-native';

import Login from './APP/login/login'

export default class ReactNativeAppDemo extends Component {
  render() {
    return (
      <Login/>
    )
  }
}
AppRegistry.registerComponent('ReactNativeAppDemo', () => Login);
