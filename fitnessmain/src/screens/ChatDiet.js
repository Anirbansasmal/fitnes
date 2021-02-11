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
class ChatDiet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatClient: [],
    };
  }
  componentDidMount() {
    this.fetchChat();
  }
  chat(){
    this.props.navigation.navigate("Chat");
  }
  async fetchChat() {
    var user = await AsyncStorage.getItem('userId');
    var apiResponse = await Api.get('userById/' + 74);
    console.log(apiResponse);
    this.setState({
      chatClient: [apiResponse.data],
    });
  }

  renderItem({item}) {
    // (3)
    console.log(item.dietitian_name);
    return (
      <TouchableOpacity
        style={{
          height: 60,
          width: '100%',
          flexDirection: 'row',
          flex:1,
          borderWidth:1,
          
        }} onPress={()=>this.chat}>
        {/* <Image style={{
          height:40,
          width:40,
          borderRadius:20,

        }}
        source={{uri:item}}> */}

        {/* </Image> */}
        <View>
          <Text
            style={{
              color: '#035048',
              fontWeight: '700',
              fontSize: 18,
              alignSelf: 'center',
              marginStart: 10,
              marginTop: 20,
              marginEnd: 10,
            }}>
            {item.dietitian_name}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <Container style={styles.background_general}>
        <Head navigation={this.props.navigation} title="" />
        <FlatList
          data={this.state.chatClient}
          renderItem={this.renderItem}
          // styles={styles.messages}
          keyExtractor={(item, index) => item}
        />
      </Container>
    );
  }
}

export default ChatDiet;
