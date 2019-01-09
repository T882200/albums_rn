//import liraries
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

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
  render() {
    return (
      <View>
        <Text>Album List!</Text>
      </View>
    );
  }
}

//make this component available to the app
export default AlbumList;
