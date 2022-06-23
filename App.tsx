import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Navigation from './src/navigator/Navigation';
import {Provider} from 'react-redux';
import createStore from './src/store';

const App = () => {
  let store = createStore();

  return (
    <>
      <StatusBar backgroundColor="#000" barStyle="dark-content" />
      <Provider store={store}>
      <Navigation />
      </Provider>
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
