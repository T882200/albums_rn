//import liraries
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';

import AlbumDetail from './AlbumDetail';

// create a component
class AlbumList extends Component {
  state = {
    albums: []
  };
  
  //WARNING! To be deprecated in React v17. Use componentDidMount instead.
  componentWillMount() {
    axios.get('https://http://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    return this.state.albums.map(album => 
      <AlbumDetail key={album.title} album={album} />
    );
  }

  render() {
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

//make this component available to the app
export default AlbumList;
