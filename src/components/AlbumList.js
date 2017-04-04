import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  state = {
    albums: [],
  };

  componentDidMount() {
    axios
      .get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    return this.state.albums.map((album,index) => {
      return (
        <AlbumDetail key={index} album={album}/>
      );
    });
  }

  render() {
    console.log(' rendering ', this.state.albums);
    if (this.state.albums.length === 0) {
      return <Text>Loading...</Text>;
    }
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;
