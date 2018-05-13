import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Header extends Component {
	render() {
		const { viewStyle, textStyle } = styles;
		return (
			<View style={viewStyle}>
				<Text style={textStyle}>{this.props.album}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	viewStyle: {
		backgroundColor: '#F8F8F8',
		justifyContent: 'center',
		alignItems: 'center',
		height: 60,
		paddingTop: 15,
		shadowColor: '#000',
		shadowOffset: {	
			width: 0, height: 2
		},
		shadowOpacity: 0.2
	},
	textStyle: {
		fontSize: 20
	}
});

export default Header;
