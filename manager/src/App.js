import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Header } from './components/common';
import reducers from './reducers';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyAuymvo-nL_GV_GYaVSu753uYeS9bjaNQs',
      authDomain: 'manager-d7c8c.firebaseapp.com',
      databaseURL: 'https://manager-d7c8c.firebaseio.com',
      projectId: 'manager-d7c8c',
      storageBucket: '',
      messagingSenderId: '594317655048'
    };

    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Header headerText="Manager" />
          <LoginForm />
        </View>
      </Provider>
    );
  }
}

export default App;
