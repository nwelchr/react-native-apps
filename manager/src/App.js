import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Header } from './components/common';
import reducers from './reducers';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';
import ReduxThunk from 'redux-thunk';
import Router from './Router';

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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
