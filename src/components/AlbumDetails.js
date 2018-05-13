import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card.js';
import CardSection from './CardSection.js';
import Button from './Button.js';

const AlbumDetails = ({album}) => {
	const { title, artist, thumbnail_image, image, url } = album;
	const {
		headerSectionStyle, 
		headerContentStyle, 
		headerTextStyle, 
		thumbnailStyle, 
		thumbnailContainerStyle,
		imageStyle 
	} = styles;
	return (
		<Card>
			<CardSection style={headerSectionStyle}>
				<View style={thumbnailContainerStyle}>
					<Image 
						source={{ uri: thumbnail_image }} 
						style={thumbnailStyle}
					/>
				</View>
				<View style={headerContentStyle}>
					<Text style={headerTextStyle}>{title}</Text>
					<Text>{artist}</Text>
				</View>
			</CardSection>
			<CardSection>
				<Image 
					source={{ uri: image }} 
					style={imageStyle}
				/>
			</CardSection>
			<CardSection>
				<Button onPress={() => Linking.openURL(url)}>
					Buy
				</Button>
			</CardSection>
		</Card>
	);
};

const styles = {
	headerSectionStyle: {
		alignItems: 'center'
	},
	headerContentStyle: {
		flexDirection: 'column',
		justifyContent: 'space-around'
	},
	headerTextStyle: {
		fontSize: 18
	},
	thumbnailStyle: {
		width: 50, 
		height: 50
	},
	imageStyle: {
		width: null,
		height: 300,
		flex: 1
	},
	thumbnailContainerStyle: {
		marginLeft: 10,
		marginRight: 10,
		justifyContent: 'center',
		alignItems: 'center'
	}
};

export default AlbumDetails;
