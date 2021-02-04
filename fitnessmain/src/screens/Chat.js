import React, {Component} from 'react';
// import {View, Text} from 'react-native';
import {NavigationActions, StackNavigator} from 'react-navigation';
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
  Animated,
  KeyboardAvoidingView,
  TextInput,
} from 'react-native';
import {Col, Row, Grid} from 'react-native-easy-grid';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
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
// import { LinearGradient } from 'expo';
import LinearGradient from 'react-native-linear-gradient';
import ConfigApp from '../utils/ConfigApp';
// import TimeAgo from 'react-native-timeago';
// import PostFav from '../components/PostFav';
// import DietFav from '../components/DietFav';
// import WorkoutFav from '../components/WorkoutFav';
import Strings from '../utils/Strings';
import AppPreLoader from '../components/AppPreLoader';

var styles = require('../../src/assets/files/Styles');
var {height, width} = Dimensions.get('window');
import AsyncStorage from '@react-native-community/async-storage';
import Api from '../services/api';
import Head from '../components/Header_profile';
import Pusher from 'pusher-js/react-native';
const chatApp = {
  app_id: '1150433',
  key: 'a292806355c3e5dfb03a',
  secret: '815ab5b63b3ba87ca6eb',
  cluster: 'ap2',
};
class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
    };
    this.pusher = new Pusher(chatApp.key, chatApp);
    this.chatChannel = this.pusher.subscribe('chat_channel'); // (2)
    this.chatChannel.bind('pusher:subscription_succeeded', () => {
      // (3)
      this.chatChannel.bind('join', (data) => {
        // (4)
        this.handleJoin(data.name);
      });
      this.chatChannel.bind('part', (data) => {
        // (5)
        this.handlePart(data.name);
      });
      this.chatChannel.bind('message', (data) => {
        // (6)
        this.handleMessage(data.name, data.message);
      });
      this.handleSendMessage = this.onSendMessage.bind(this); // (9)
    });
  }
  handleJoin(name) {
    // (4)
    const messages = this.state.messages.slice();
    messages.push({action: 'join', name: name});
    this.setState({
      messages: messages,
    });
  }

  handlePart(name) {
    // (5)
    const messages = this.state.messages.slice();
    messages.push({action: 'part', name: name});
    this.setState({
      messages: messages,
    });
  }

  handleMessage(name, message) {
    // (6)
    const messages = this.state.messages.slice();
    messages.push({action: 'message', name: name, message: message});
    this.setState({
      messages: messages,
    });
  }
  onSendMessage(text) {
    // (9)
    const payload = {
      message: text,
    };
    // fetch(`${pusherConfig.restServer}/users/${this.props.name}/messages`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(payload)
    // });
  }
  onSendMessage(e) { // (1)
    this.props.onSendMessage(e.nativeEvent.text);
    this.refs.input.clear();
  }
  renderItem({item}) { // (3)
    const action = item.action;
    const name = item.name;

    if (action == 'join') {
        return <Text style={ styles.joinPart }>{ name } has joined</Text>;
    } else if (action == 'part') {
        return <Text style={ styles.joinPart }>{ name } has left</Text>;
    } else if (action == 'message') {
        return <Text>{ name }: { item.message }</Text>;
    }
  }

  render() {
    return (
      <Container style={styles.background_general}>
        <Head navigation={this.props.navigation} title="" />
        <KeyboardAvoidingView style={styles.container} behavior="padding">
          <FlatList
            data={this.props.messages}
            renderItem={this.renderItem}
            styles={styles.messages}
          />
          <TextInput
            autoFocus
            keyboardType="default"
            returnKeyType="done"
            enablesReturnKeyAutomatically
            style={styles.input}
            blurOnSubmit={false}
            onSubmitEditing={this.handleSendMessage}
            ref="input"
          />
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

export default Chat;
