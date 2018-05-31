import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

export default class App extends Component {
  state = { loggedIn: true };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyC8EwNAKCdvLWtvmFjWptd3zqrB-UqSWrA',
      authDomain: 'auth-bb6ab.firebaseapp.com',
      databaseURL: 'https://auth-bb6ab.firebaseio.com',
      projectId: 'auth-bb6ab',
      storageBucket: 'auth-bb6ab.appspot.com',
      messagingSenderId: '58072311065'
    });

    firebase.auth().onAuthStateChanged(user => {
      if (user) this.setState({ loggedIn: true });
      else this.setState({ loggedIn: false });
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
        );
      case false:
        return <LoginForm />;
      default:
        return (
          <View style={{ padding: 100 }}>
            <Spinner size="large" />
          </View>
        );
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}
