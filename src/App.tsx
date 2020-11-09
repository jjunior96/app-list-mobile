/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';

// import Layout from './components/Layout';
import Home from './pages/Home';

declare const global: {HermesInternal: null | {}};

const App: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <Home />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#162736',
  },
  title: {
    color: '#fff',
    fontSize: 32,
  },
});

export default App;
