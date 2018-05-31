import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

export default class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyC8EwNAKCdvLWtvmFjWptd3zqrB-UqSWrA',
      authDomain: 'auth-bb6ab.firebaseapp.com',
      databaseURL: 'https://auth-bb6ab.firebaseio.com',
      projectId: 'auth-bb6ab',
      storageBucket: 'auth-bb6ab.appspot.com',
      messagingSenderId: '58072311065'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}
