import React, {Component} from 'react';
// import { View, Text } from 'react-native';
import {Container} from 'native-base';
var styles = require('../../src/assets/files/Styles');
import {WebView} from 'react-native-webview';
class Profile_health extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container style={styles.background_general}>
        <WebView
          source={{
            uri: 'https://foodnwellness.com/app/survey',
          }}
          style={{marginTop: 20}}
        />
      </Container>
    );
  }
}
export default Profile_health;
