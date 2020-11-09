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
// import Home from './pages/Home';
import AddItem from './pages/AddItem';

const App: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <AddItem />
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
