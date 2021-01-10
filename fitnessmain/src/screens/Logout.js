import React, {Component} from 'react';

import {AuthContext} from '../context';
import AsyncStorage from '@react-native-community/async-storage';

export default class Logout extends Component {
	static contextType = AuthContext;
	componentDidMount () {
		this.logout();
	}
	logout  = async () => {
		console.log('logout')
		await AsyncStorage.clear();
        this.context.signOut();
	}

	render () {
		return null;
	}
}