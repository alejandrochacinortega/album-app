/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import Header from './src/components/Header';

export default class albums extends Component {
  render() {
    return (
      <Header headerText={"Albums"}/>
    );
  }
}

AppRegistry.registerComponent('albums', () => albums);
