import React, {Component} from 'react';
// import { View, Text } from 'react-native';
import {
  ImageBackground,
  TouchableOpacity,
  Alert,
  Dimensions,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  FlatList,
} from 'react-native';
import {
  Container,
  Content,
  Body,
  Thumbnail,
  Text,
  List,
  Right,
  Left,
  Button,
  ListItem,
  Tab,
  Tabs,
  Form,
  Item,
  Input,
  Label,
  DatePicker,
  Card,
  CardItem,
} from 'native-base';
var styles = require('../../src/assets/files/Styles');
import { WebView } from 'react-native-webview';
class webview_event extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container style={styles.background_general}>
        <WebView
        source={{
          uri: 'https://foodnwellness.com/app/events'
        }}
        style={{ marginTop: 20 }}
      />
      </Container>
    );
  }
}

export default webview_event;
