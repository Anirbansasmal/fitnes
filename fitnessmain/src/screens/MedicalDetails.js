import React, {Component} from 'react';
// import { View, Text } from 'react-native';
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
import moment from 'moment';
import DocumentPicker from 'react-native-document-picker';
import DatePicker from 'react-native-datepicker';
class MedicalDetails extends Component {
  state = {
    title: String,
    text: String,
    date_of_report: String,
    doc: String,
  };
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      text: '',
      date_of_report: '',
      doc: '',
    };
  }
  setTaskweight1(text) {
    this.setState({
      title: text,
    });
  }
  setTaskweight2(text) {
    this.setState({
        text: text,
    });
  }
  addmedication = async () => {
    var user = await AsyncStorage.getItem('userId');
    var formdata = new FormData();
    formdata.append("user_id",user);
    formdata.append("title",this.state.title);
    formdata.append("text",this.state.title);
    formdata.append("date_of_report",this.state.date_of_report);
    formdata.append("doc",this.state.doc);
    // var data = {
    //   user_id: user,
    //   title: this.state.title,
    //   text: this.state.title,
    //   date_of_report: this.state.date_of_report,
    //   doc: this.state.doc,
    // };
    var apiResponse = await Api.upload('/UserMedHistory', formdata);
    console.log(apiResponse)
    if (apiResponse.status === 'success') {
      Alert.alert('Success', 'Profile Updated');
    } else {
    }
  };
  componentDidMount() {}
  uploadImage = async () => {
    try {
      var res = await DocumentPicker.pick({
        // Provide which type of file you want user to pick
        type: [DocumentPicker.types.images],
        // There can me more options as well
        // DocumentPicker.types.allFiles
        // DocumentPicker.types.images
        // DocumentPicker.types.plainText
        // DocumentPicker.types.audio
        // DocumentPicker.types.pdf
      });
      this.setState({
        doc: res.uri,
      });
      console.log('res : ' + JSON.stringify(res));
    } catch (e) {}
  };
  render() {
    return (
      <Container style={styles.background_general}>
        <Head navigation={this.props.navigation} title="" />
        <View style={{flex: 1}}>
          <TextInput
            // value={text}
            placeholder="General report"
            onChangeText={(text) => this.setTaskweight1(text)}
            style={{
              marginLeft: 10,
              marginRight: 10,
              //   width: 90,
              //   height: 40,
              backgroundColor: '#dcdedc',
              marginTop: 20,
            }}
          />

          <TextInput
            // value={text}
            placeholder="General physical check up"
            onChangeText={(text) => this.setTaskweight2(text)}
            style={{
              marginLeft: 10,
              marginRight: 10,
              //   width: 90,
              //   height: 60,
              backgroundColor: '#dcdedc',
              marginTop: 20,
            }}
          />
          <DatePicker
            style={{width: 200, marginLeft: 10}}
            date={this.state.date}
            mode="date"
            placeholder="select date"
            format="YYYY-MM-DD"
            minDate="1940-01-01"
            maxDate="2040-01-01"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                position: 'absolute',
                left: 0,
                top: 19,
                marginLeft: 0,
              },
              dateInput: {
                marginLeft: 36,
                top: 19,
              },
              // ... You can check the source to find the other keys.
            }}
            onDateChange={(date) => {
              this.setState({date_of_report: date});
            }}
          />
          <TouchableOpacity
            style={{
              width: 100,
              height: 40,
              alignSelf: 'flex-end',
              marginEnd: 20,
              marginTop: 20,
              borderWidth: 1,
              borderRadius: 30,
              justifyContent: 'center',
            }}
            onPress={this.uploadImage}>
            <Text style={{fontSize: 20, alignSelf: 'center'}}>Select file</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: '80%',
              height: 40,
              alignSelf: 'center',
              marginEnd: 20,
              marginStart: 20,
              marginTop: 20,
              borderWidth: 1,
              borderRadius: 30,
              justifyContent: 'center',
              backgroundColor: '#0f438a',
            }}
            onPress={() => this.addmedication()}>
            <Text style={{fontSize: 20, alignSelf: 'center', color: '#fff'}}>
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      </Container>
    );
  }
}

export default MedicalDetails;
