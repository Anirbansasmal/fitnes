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
  TextInput,
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
import Modal from 'react-native-modal';

class height_profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isloading: true,
      weight: '',
      height: '',
      bmi: '',
      visceral_fat: '',
      body_fat: '',
      user_age:'',
      key:'',
      title:'',
      email: '',
      username: '',
      chosenDate: '',
      first_name: '',
      last_name: '',
      dob: '',
      gender: '',
      skype_id: '',
      phone: '',
      alt_phone: '',
      city: '',
      address: '',
      pin: '',
      country: '',
      occupation: '',
      detail: '',
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
        weight: userDetails.data.details.weight,
        height: userDetails.data.details.height,
        bmi: userDetails.data.details.bmi,
        visceral_fat: userDetails.data.details.visceral_fat,
        body_fat: userDetails.data.details.body_fat,
        user_age: userDetails.data.details.user_age,
        email: userDetails.data.email,
        user: userDetails.data.details,
        email: userDetails.data.email,
        first_name: userDetails.data.details.first_name,
        last_name: userDetails.data.details.last_name,
        dob: userDetails.data.details.dob,
        gender: userDetails.data.details.gender,
        skype_id: userDetails.data.details.skype_id,
        phone: userDetails.data.details.phone,
        alt_phone: userDetails.data.details.alt_phone,
        city: userDetails.data.details.city,
        address: userDetails.data.details.address,
        pin: userDetails.data.details.pin,
        country: userDetails.data.details.country,
        occupation: userDetails.data.details.occupation,
      });
    }
  };
  setDate = (value) => {
    // console.log(value);
    this.setState({
      isVisableMood: true,
      title: 'User Date of Birth',
      dob: value,
    });
  };
  reminder() {
    this.setState({
      isVisableMood: false,
    });
    this.onSubmit();
  }
  setdetails(value, name) {
    switch (name) {
      case 'Weight':
        this.setState({
          weight: value,
        });
        break;
      case 'Height':
        this.setState({
          Height: value,
        });
        break;
      case 'Bmi':
        this.setState({
          bmi: value,
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
  Weight = () => {
    this.setState({
      isVisableMood: true,
      title: 'User Weight',
      key: 'Weight',
    });
  };
  Height = () => {
    this.setState({
      isVisableMood: true,
      title: 'User Height',
      key: 'Height',
    });
  };
  bmi = () => {
    this.setState({
      isVisableMood: true,
      title: 'User Bmi',
      key: 'Bmi',
    });
  };
  Visceral = () => {
    this.setState({
      isVisableMood: true,
      title: 'User visceral fat',
      key: 'visceral_fat',
    });
  };
  Body = () => {
    this.setState({
      isVisableMood: true,
      title: 'User body fat',
      key: 'body_fat',
    });
  };
  User = () => {
    this.setState({
      isVisableMood: true,
      title: 'User user age',
      key: 'user_age',
    });
  };
  
  onSubmit = async () => {
    var data = {
      weight: this.state.weight,
      height: this.state.height,
      bmi: this.state.bmi,
      visceral_fat: this.state.visceral_fat,
      body_fat: this.state.body_fat,
      user_age: this.state.user_age,
      email: this.state.email,
      email: this.state.email,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      dob: this.state.dob,
      gender: this.state.gender,
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
        <Head navigation={this.props.navigation} title="" />
        <ScrollView>
          <Text style={styles.profileTitle}>MY Weight,Height,Bmi Food pref</Text>
          <List>
            <ListItem>
              <View style={{justifyContent: 'space-between', width: '100%'}}>
                <View
                  style={{
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                  }}>
                  <View
                    style={{
                      justifyContent: 'center',
                    }}>
                    <Text style={styles.stepsEdit}>Weight</Text>
                    {this.state.weight == null ? (
                      <TouchableOpacity
                        style={{
                          height: 30,
                          width: 60,
                          backgroundColor: '#179937',
                          borderRadius: 9,
                          justifyContent: 'center',
                        }}
                        onPress={() => this.Weight()}>
                        <Text>Add</Text>
                      </TouchableOpacity>
                    ) : (
                      <Text style={styles.stepsView}>
                        {this.state.weight}
                      </Text>
                    )}
                  </View>
                  <TouchableOpacity
                    style={{
                      // justifyContent: 'center',
                      alignSelf: 'flex-end',
                      // backgroundColor: '#11ba11',
                    }}
                    onPress={() => this.Weight()}>
                    <AntDesign
                      size={50}
                      name="right"
                      // color="#ffff"
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </ListItem>
            <ListItem>
              <View style={{justifyContent: 'space-between', width: '100%'}}>
                <View
                  style={{
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                  }}>
                  <View
                    style={{
                      justifyContent: 'center',
                    }}>
                    <Text style={styles.stepsEdit}>Height</Text>
                    {this.state.height == null ? (
                      <TouchableOpacity
                        style={{
                          height: 30,
                          width: 60,
                          backgroundColor: '#179937',
                          borderRadius: 9,
                          justifyContent: 'center',
                        }}
                        onPress={() => this.Height()}>
                        <Text>Add</Text>
                      </TouchableOpacity>
                    ) : (
                      <Text style={styles.stepsView}>
                        {this.state.height}
                      </Text>
                    )}
                  </View>
                  <TouchableOpacity
                    style={{
                      // justifyContent: 'center',
                      alignSelf: 'flex-end',
                      // backgroundColor: '#11ba11',
                    }}
                    onPress={() => this.Height()}>
                    <AntDesign
                      size={50}
                      name="right"
                      // color="#ffff"
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </ListItem>
            <ListItem>
              <View style={{justifyContent: 'space-between', width: '100%'}}>
                <View
                  style={{
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                  }}>
                  <View>
                    <Text style={styles.stepsEdit}>Bmi</Text>
                    {this.state.bmi == null ? (
                      <TouchableOpacity
                        style={{
                          height: 30,
                          width: 60,
                          backgroundColor: '#179937',
                          borderRadius: 9,
                          justifyContent: 'center',
                        }}
                        onPress={() => this.bmi()}>
                        <Text>Add</Text>
                      </TouchableOpacity>
                    ) : (
                      <Text style={styles.stepsView}>{this.state.bmi}</Text>
                    )}
                  </View>
                  <TouchableOpacity
                    style={{
                      justifyContent: 'center',
                      alignSelf: 'flex-end',
                      // backgroundColor: '#11ba11',
                    }}
                    onPress={() => this.bmi()}>
                    <AntDesign
                      size={50}
                      name="right"
                      // color="#ffff"
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </ListItem>
            <ListItem>
              <View style={{justifyContent: 'space-between', width: '100%'}}>
                <View
                  style={{
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                  }}>
                  <View>
                    <Text style={styles.stepsEdit}>Visceral fat</Text>
                    {this.state.visceral_fat == null ? (
                      <TouchableOpacity
                        style={{
                          height: 30,
                          width: 60,
                          backgroundColor: '#179937',
                          borderRadius: 9,
                          justifyContent: 'center',
                        }}
                        onPress={() => this.Visceral()}>
                        <Text>Add</Text>
                      </TouchableOpacity>
                    ) : (
                      <Text style={styles.stepsView}>{this.state.visceral_fat}</Text>
                    )}
                  </View>
                  <TouchableOpacity
                    style={{
                      justifyContent: 'center',
                      alignSelf: 'flex-end',
                      // backgroundColor: '#11ba11',
                    }}
                    onPress={() => this.Visceral()}>
                    <AntDesign
                      size={50}
                      name="right"
                      // color="#ffff"
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </ListItem>
            <ListItem>
              <View style={{justifyContent: 'space-between', width: '100%'}}>
                <View
                  style={{
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                  }}>
                  <View>
                    <Text style={styles.stepsEdit}>Body fat</Text>
                    {this.state.body_fat == null ? (
                      <TouchableOpacity
                        style={{
                          height: 30,
                          width: 60,
                          backgroundColor: '#179937',
                          borderRadius: 9,
                          justifyContent: 'center',
                        }}
                        onPress={() => this.Body()}>
                        <Text>Add</Text>
                      </TouchableOpacity>
                    ) : (
                      <Text style={styles.stepsView}>
                        {this.state.body_fat}
                      </Text>
                    )}
                  </View>
                  <TouchableOpacity
                    style={{
                      justifyContent: 'center',
                      alignSelf: 'flex-end',
                      // backgroundColor: '#11ba11',
                    }}
                    onPress={() => this.Body()}>
                    <AntDesign
                      size={50}
                      name="right"
                      // color="#ffff"
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </ListItem>
            <ListItem>
              <View style={{justifyContent: 'space-between', width: '100%'}}>
                <View
                  style={{
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                  }}>
                  <View>
                    <Text style={styles.stepsEdit}>User age</Text>
                    {this.state.user_age == null ? (
                      <TouchableOpacity
                        style={{
                          height: 30,
                          width: 60,
                          backgroundColor: '#179937',
                          borderRadius: 9,
                          justifyContent: 'center',
                        }}
                        onPress={() => this.User()}>
                        <Text>Add</Text>
                      </TouchableOpacity>
                    ) : (
                      <Text style={styles.stepsView}>
                        {this.state.user_age}
                      </Text>
                    )}
                  </View>
                  <TouchableOpacity
                    style={{
                      justifyContent: 'center',
                      alignSelf: 'flex-end',
                      // backgroundColor: '#11ba11',
                    }}
                    onPress={() => this.User()}>
                    <AntDesign
                      size={50}
                      name="right"
                      // color="#ffff"
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </ListItem>
            
          </List>

          <Modal
            isVisible={this.state.isVisableMood}
            style={{
              // height: 100,
              backdropOpacity: 10.7,
              alignSelf: 'center',
              width: '90%',
              paddingLeft: 30,
              paddingRight: 30,
              // elevation: 10,
              // overflow: 'hidden',
              // borderWidth: 1,
            }}
            backdropColor="#ffff"
            coverScreen={true}
            hasBackdrop={true}
            onBackdropPress={() =>
              this.setState({
                isVisableMood: false,
              })
            }>
            <View
              style={{
                backgroundColor: '#ffff',
                // height: 400,
                borderWidth: 1,
                borderRadius: 20,
              }}>
              <View style={{alignSelf: 'center'}}>
                <Text style={styles.stepsLog}>Edit {this.state.title}</Text>
              </View>
              <TextInput
                placeholder={this.state.title}
                // value={this.state.weight}
                onChangeText={(value) =>
                  this.setdetails(value, this.state.key)
                }
                style={{
                  marginLeft: 10,
                  marginRight: 10,
                  backgroundColor: '#dcdedc',
                }}
              />

              <TouchableOpacity
                style={{
                  backgroundColor: '#069906',
                  width: 120,
                  alignSelf: 'center',
                  borderRadius: 10,
                  marginTop: 10,
                  marginBottom: 20,
                }}
                onPress={() => this.reminder()}>
                <Text style={{margin: 10, alignSelf: 'center', color: '#ffff'}}>
                  Submit
                </Text>
              </TouchableOpacity>
            </View>
          </Modal>
          </ScrollView>
      </Container>
    );
  }
}

export default height_profile;
