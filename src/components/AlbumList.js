import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

export default class AlbumList extends Component {
  state = {
    albums: [],
  }

  async componentDidMount() {
    const { data } = await axios.get('https://rallycoding.herokuapp.com/api/music_albums');
    this.setState({
      albums: data,
    });
    // eslint-disable-next-line no-debugger
    debugger;
  }

  renderAlbums = albums => albums.map(album => (
    <AlbumDetail key={album.title} album={album} />
  ))

  render() {
    const { albums } = this.state;
    return (
      <ScrollView>
        { this.renderAlbums(albums) }
      </ScrollView>
    );
  }
}
