import React, { Component} from 'react';
import { ScrollView } from 'react-native';
import AlbumDetails from './AlbumDetails.js';


class AlbumList extends Component {
	state = {
		albums: []
	};
	componentWillMount = () => {
		const url = 'https://rallycoding.herokuapp.com/api/music_albums';
		
		fetch(url)
			.then((resp) => resp.json())
			.then((data) => {
				this.setState({ albums: data });
			});
	};
	renderAlbums = () => {
		return this.state.albums.map((album, index) => {
			return <AlbumDetails key={index} album={album} />;
		});
	};
	render() {
		return (
			<ScrollView>
				{this.renderAlbums()}
			</ScrollView>
		);
	}
}

export default AlbumList;
