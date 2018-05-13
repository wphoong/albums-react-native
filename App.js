import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './src/components/Header.js';
import AlbumList from './src/components/AlbumList.js';

export default class App extends React.Component {
  render() {
    const { container } = styles;
    return (
      <View style={container}>
        <Header album={'Albums LUL'} />
        <AlbumList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
