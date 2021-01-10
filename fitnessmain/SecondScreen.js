//SecondScreen.js
import React, { Component } from 'react';
import { Text, View,Button } from 'react-native';
import HeaderComponent from './HeaderComponent';

export default class SecondScreen extends Component {
  static   navigationOptions = {
    drawerLabel: 'SecondScreen Name',
  }
  handleButton = () => {
    this.props.navigation.navigate('FirstScreen');

  }
  render() {
    return (
        <View style={{flex:1,flexDirection:'column',}}>
        <HeaderComponent {...this.props} showName="Second Screen" />
       <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
         <Text>Second Screen......!</Text>
         <Button onPress={this.handleButton} title='Open firstpage' />
       </View>
       </View>
      
    );
  }
}