import React, {Component} from 'react';
// import * as firebase from 'firebase';
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
} from 'react-native';
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
import AntDesign from 'react-native-vector-icons/AntDesign';
export default class More_option extends Component {
  static navigationOptions = {
    title: 'Profile',
  };

  constructor(props) {
    super(props);

    this.state = {
      isloading: true,
    };
  }
  // componentDidMount() {
    // this.LoginCheck();
  // }

  render() {
    // if (this.state.isloading) {
    //   return <AppPreLoader />;
    // }
    // var user = '';
    // var email, displayName, emailVerified, creationTime;

    // if (user != null) {
    // email = user.email;
    // displayName = 'chandan';
    // emailVerified = user.emailVerified;
    // creationTime = user.metadata.creationTime;
    // }

    return (
      // <Container>
      <View style={{backgroundColor: '#ff99'}}>
        <Head navigation={this.props.navigation} title="" />
        <Text>jhgdfhsdfjgsfd</Text>
      </View>
      // </Container>
    );
  }
}
