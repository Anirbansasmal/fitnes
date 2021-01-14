import React, {Component} from 'react';
// import { Icon } from 'react-native-elements';
var styles = require('../../src/assets/files/Styles');
import {
  Container,
  Header,
  Title,
  Button,
  Icon,
  Left,
  Right,
  Body,
} from 'native-base';
import {Image, View} from 'react-native';

// import {Header,Title,Button,Right,Body,Left, Container} from "native-base";

export default class Head extends Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!userData
    console.log(this.props.title);
  }
  openMenu = () => {
    this.props.navigation.toggleDrawer();
  };
  render() {
    return (
      <Header style={{backgroundColor: '#fff', elevation: 10}}>
        <Left>
          {/* <View>
            <Button transparent>
              <Icon
                onPress={this.openMenu}
                name="menu"
                style={{color: '#000'}}
              />
            </Button>
          </View> */}
        </Left>
        <Body>
          <View style={{marginTop: 20,alignSelf:"flex-start"}}>
            <Image
              width={100}
              source={require('../../src/assets/images/header-logo.png')}
            />
          </View>
          <Title>{this.props.title}</Title>
        </Body>
        <Right>
          {/* <Button transparent>
              <Icon name="cart" />
            </Button> */}
          <View style={{marginRight: 20}}>
            <Image
              width={100}
              source={require('../../src/assets/images/cart.png')}
            />
          </View>
          <View style={{marginRight: 20}}>
            <Image
              width={100}
              source={require('../../src/assets/images/bell.png')}
            />
          </View>
          {/* <Button transparent>
              <Icon name="notifications" />
            </Button> */}
        </Right>
      </Header>
    );
  }
}
