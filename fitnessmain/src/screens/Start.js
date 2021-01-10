import 	React, {Component} from 'react';
var styles = require('../../src/assets/files/Styles');
import {Alert, Image} from 'react-native';
import BackgroundImage from "../components/BackgroundImage";
import { Container, Body, Footer, Input, Icon, Item, Text, Card, View, Button} from 'native-base';
import { NavigationActions } from 'react-navigation';
import Strings from '../utils/Strings';
import { LogBox ,ImageBackground} from 'react-native';

export default class Start extends Component {
	constructor(props) {
		super(props);
		this.state = {
		  isLoading: false,
		  email: null,
		  password: null,
		  hidePassword: true,
		  button : 'logon',
		};
	  }
	
	login=() =>  {
		console.log('login')
		this.props.navigation.navigate('LogIn');
	}

	register= () => { 

		// this.props.navigation.replace('Register');
		this.props.navigation.navigate('SignUp');
		
	}

	render () {

		return (
    
		<BackgroundImage source={require('../../src/assets/images/bg.jpg')}>
		<Body>
			<View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
			<Image source={require('../../src/assets/icon.png')} style={styles.logo_start} resizeMode="contain"/>
			<View style={{height: 30}}/>
			<Button rounded block onPress={this.login} style={styles.button_start}>
			<Text>{Strings.ST26}</Text>
			</Button>
			<Button rounded block onPress={this.register} style={styles.button_start}>
			<Text>{Strings.ST27}</Text>
			</Button>
			</View>
		</Body>
		</BackgroundImage>
		);
	}
}