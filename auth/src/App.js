import React, { Component } from 'react';
import { Platform, Text, View } from 'react-native';

export default class App extends Component {
  render() {
    const { container, welcome, instructions } = styles;
    return (
      <View style={container}>
        <Text style={welcome}>Welcome to React Native!</Text>
        <Text style={instructions}>To get started, edit App.js</Text>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
};
