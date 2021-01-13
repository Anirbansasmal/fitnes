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
class height_profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isloading: true,
      user: [],
      email: '',
      username: '',
      chosenDate: '',
      first_name: '',
      last_name: '',
      dob: '',
      weight: '',
      height: '',
      gender: '',
      bmi: '',
      visceral_fat: '',
      body_fat: '',
      skype_id: '',
      phone: '',
      alt_phone: '',
      city: '',
      address: '',
      pin: '',
      country: '',
      occupation: '',
    };
  }
  componentDidMount() {
    this.LoginCheck();
  }
  LoginCheck = async () => {
    console.log('login check');
    // var token = await AsyncStorage.getItem('token');
    // await AsyncStorage.getItem('userId');
    var user = await AsyncStorage.getItem('userId');
    // console.log(user);
    var userDetails = await Api.get('userById/' + user);
    console.log(userDetails);
    if (userDetails.status === 'success') {
      console.log(userDetails.data.details);
      this.setState({
        username: userDetails.data.details.first_name,
        isloading: false,
        user: userDetails.data.details,
        email: userDetails.data.email,
        first_name: userDetails.data.details.first_name,
        last_name: userDetails.data.details.last_name,
        dob: userDetails.data.details.dob,
        weight: userDetails.data.details.weight,
        height: userDetails.data.details.height,
        gender: userDetails.data.details.gender,
        bmi: userDetails.data.details.bmi,
        visceral_fat: userDetails.data.details.visceral_fat,
        body_fat: userDetails.data.details.body_fat,
        skype_id: userDetails.data.details.skype_id,
        phone: userDetails.data.details.phone,
        alt_phone: userDetails.data.details.alt_phone,
        city: userDetails.data.details.city,
        address: userDetails.data.details.address,
        pin: userDetails.data.details.pin,
        country: userDetails.data.details.country,
        occupation: userDetails.data.details.occupation,
        user_age: userDetails.data.details.user_age,
      });
    }
  };
  setDate = (value) => {
    console.log(value);
  };
  setdetails(value, name) {
    switch (name) {
      case 'Weight':
        this.setState({
          Weight: value,
        });
        break;
      case 'Height':
        this.setState({
          Height: value,
        });
        break;
      case 'Bmi':
        this.setState({
          Bmi: value,
        });
        break;
      case 'visceral_fat':
        this.setState({
          visceral_fat: value,
        });
        break;
      case 'body_fat':
        this.setState({
          body_fat: value,
        });
        break;
      case 'user_age':
        this.setState({
          user_age: value,
        });
        break;
      default:
        break;
    }
  }
  onSubmit = async () => {
    var data = {
      email: this.state.email,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      dob: this.state.dob,
      weight: this.state.weight,
      height: this.state.height,
      gender: this.state.gender,
      bmi: this.state.bmi,
      visceral_fat: this.state.visceral_fat,
      body_fat: this.state.body_fat,
      skype_id: this.state.skype_id,
      phone: this.state.phone,
      alt_phone: this.state.alt_phone,
      city: this.state.city,
      address: this.state.address,
      pin: this.state.pin,
      country: this.state.country,
      occupation: this.state.occupation,
    };
    console.log(data);
    var user = await AsyncStorage.getItem('userId');
    var apiResponse = await Api.post('UserDetail/' + user, data);
    console.log(apiResponse);
    if (apiResponse.status === 'success') {
      Alert.alert('Success', 'Profile Updated');
    } else {
      const error = apiResponse.errors;
      this.setState({isLoading: false}, () => {
        var errors = '';
        Object.keys(error).forEach(function (key) {
          errors += error[key] + ' ';
        });
        Alert.alert('Error', errors);
      });
    }
  };
  render() {
    if (this.state.isloading) {
      return <AppPreLoader />;
    }
    return (
      <Container style={styles.background_general}>
        <ImageBackground
          source={require('../../src/assets/images/profilebg.jpg')}
          style={{
            width: width,
            height: height * 0.2,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{color: '#f39c12', fontSize: 22, marginTop: 6}}>
            {this.state.username}
          </Text>
          {/* <Text style={{color: '#FFF', fontSize: 16, marginTop: 6, textTransform: 'uppercase'}}> {Strings.ST65} </Text> */}
        </ImageBackground>
        <ScrollView>
          <Tabs
            tabBarUnderlineStyle={{backgroundColor: '#f39c12'}}
            tabContainerStyle={{elevation: 0}}>
            <Tab
              heading="View"
              tabStyle={styles.tabs_diets}
              activeTabStyle={styles.activetabs_diets}
              textStyle={styles.tabs_text_diets}
              activeTextStyle={styles.activetabs_text_diets}>
              <List>
                <ListItem>
                  <Text>Weight : {this.state.user.weight}</Text>
                </ListItem>
                <ListItem>
                  <Text>Height : {this.state.user.height}</Text>
                </ListItem>
                <ListItem>
                  <Text>Bmi: {this.state.user.bmi}</Text>
                </ListItem>
                <ListItem>
                  <Text>Visceral fat: {this.state.user.visceral_fat}</Text>
                </ListItem>
                <ListItem>
                  <Text>Body fat: {this.state.user.body_fat}</Text>
                </ListItem>
                <ListItem>
                  <Text>User age: {this.state.user.user_age}</Text>
                </ListItem>

                {/* <ListItem>
                  <Text>User age: {this.state.user.bmi}</Text>
                </ListItem> */}
              </List>
            </Tab>

            <Tab
              heading="Edit"
              tabStyle={styles.tabs_diets}
              activeTabStyle={styles.activetabs_diets}
              textStyle={styles.tabs_text_diets}
              activeTextStyle={styles.activetabs_text_diets}>
              <Form>
                <Item>
                  <Input
                    placeholder="Weight"
                    value={this.state.weight}
                    onChangeText={(value) => this.setdetails(value, 'Weight')}
                  />
                </Item>
                <Item last>
                  <Input
                    placeholder="Height"
                    value={this.state.Height}
                    onChangeText={(value) => this.setdetails(value, 'Height')}
                  />
                </Item>
                <Item>
                  <Input
                    placeholder="Bmi"
                    value={this.state.bmi}
                    onChangeText={(value) => this.setdetails(value, 'bmi')}
                  />
                </Item>
                <Item last>
                  <Input
                    placeholder="Visceral fat"
                    value={this.state.visceral_fat}
                    onChangeText={(value) =>
                      this.setdetails(value, 'visceral_fat')
                    }
                  />
                </Item>
                <Item last>
                  <Input
                    placeholder="body fat"
                    value={this.state.body_fat}
                    onChangeText={(value) => this.setdetails(value, 'body_fat')}
                  />
                </Item>
                <Item>
                  <Input
                    placeholder="User age"
                    value={this.state.user_age}
                    onChangeText={(value) => this.setdetails(value, 'user_age')}
                  />
                </Item>
                {/* <Item>
                  <DatePicker
                    defaultDate={new Date(2020, 12, 12)}
                    minimumDate={new Date(1970, 1, 1)}
                    maximumDate={new Date(2040, 12, 31)}
                    locale={'en'}
                    timeZoneOffsetInMinutes={undefined}
                    modalTransparent={false}
                    animationType={'fade'}
                    androidMode={'default'}
                    placeHolderText="Date of birth"
                    textStyle={{color: 'green'}}
                    placeHolderTextStyle={{color: '#d3d3d3'}}
                    onDateChange={this.setDate}
                    disabled={false}
                  />
                </Item> */}
                <Button
                  block
                  onPress={this.onSubmit}
                  style={styles.button_auth}>
                  <Text>Update</Text>
                </Button>
              </Form>
            </Tab>
          </Tabs>
        </ScrollView>
      </Container>
    );
  }
}

export default height_profile;
