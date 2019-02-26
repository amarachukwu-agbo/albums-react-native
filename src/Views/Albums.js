import React from 'react';
import { View } from 'react-native';
import Header from '../components/Common';
import AlbumList from '../components/AlbumList';

const App = () => (
  <View style={{ flex: 1 }}>
    <Header title="Albums!" />
    <AlbumList />
  </View>
);

export default App;
