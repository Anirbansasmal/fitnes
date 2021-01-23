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
import Modal from 'react-native-modal';
var styles = require('../../src/assets/files/Styles');
var {height, width} = Dimensions.get('window');
import AsyncStorage from '@react-native-community/async-storage';
import Api from '../services/api';
import Head from '../components/Header_profile';
import AntDesign from 'react-native-vector-icons/AntDesign';
import DatePicker from 'react-native-datepicker'
export default class Profile_details extends Component {
  static navigationOptions = {
    title: 'Profile',
  };

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
      isVisableMood: false,
      detail: '',
      title: '',
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

  setdetails(value, name) {
    switch (name) {
      case 'first_name':
        this.setState({
          first_name: value,
        });
        break;
      case 'last_name':
        this.setState({
          last_name: value,
        });
        break;
      case 'dob':
        this.setState({
          dob: value,
        });
        break;
      case 'weight':
        this.setState({
          weight: value,
        });
        break;
      case 'height':
        this.setState({
          height: value,
        });
        break;
      case 'gender':
        this.setState({
          gender: value,
        });
        break;
      case 'bmi':
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
      case 'skype_id':
        this.setState({
          skype_id: value,
        });
        break;
      case 'phone':
        this.setState({
          phone: value,
        });
        break;
      case 'alt_phone':
        this.setState({
          alt_phone: value,
        });
        break;
      case 'city':
        this.setState({
          city: value,
        });
        break;
      case 'address':
        this.setState({
          address: value,
        });
        break;
      case 'pin':
        this.setState({
          pin: value,
        });
        break;
      case 'country':
        this.setState({
          country: value,
        });
        break;
      case 'occupation':
        this.setState({
          occupation: value,
        });
        break;
      case 'email':
        this.setState({
          email: value,
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
      email: this.state.email,
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
  reminder() {
    this.setState({
      isVisableMood: false,
    });
    this.onSubmit();
  }
  editaccfirst_Name = () => {
    this.setState({
      isVisableMood: true,
      title: 'User Name',
      weight: 'first_name',
    });
  };
  editacclast_Name = () => {
    this.setState({
      isVisableMood: true,
      title: 'User Name',
      weight: 'last_name',
    });
  };
  editaccOccu = () => {
    this.setState({
      isVisableMood: true,
      title: 'User Occupation',
      weight: 'occupation',
    });
  };
  editaccPhone = () => {
    this.setState({
      isVisableMood: true,
      title: 'User Phone',
      weight: 'phone',
    });
  };
  editaccemail = () => {
    this.setState({
      isVisableMood: true,
      title: 'User Email IDs',
      weight: 'email',
    });
  };
  editaccpinc = () => {
    this.setState({
      isVisableMood: true,
      title: 'User Pincode',
      weight: 'pin',
    });
  };
  editaccCity = () => {
    this.setState({
      isVisableMood: true,
      title: 'User City',
      weight: 'city',
    });
  };
  editaccDate = () => {
    this.setState({
      isVisableMood: true,
      title: 'User Date of Birth',
      weight: 'dob',
    });
  };
  render() {
    if (this.state.isloading) {
      return <AppPreLoader />;
    }
    return (
      <Container style={styles.background_general}>
        <Head navigation={this.props.navigation} title="" />
        <ScrollView>
          <Text style={styles.profileTitle}>MY PROFILE > PERSONAL DETAILS</Text>
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
                    <Text style={styles.stepsEdit}>First Name</Text>
                    {this.state.user.last_name == null ? (
                      <TouchableOpacity
                        style={{
                          height: 30,
                          width: 60,
                          backgroundColor: '#179937',
                          borderRadius: 9,
                          justifyContent: 'center',
                        }}
                        onPress={() => this.editaccfirst_Name()}>
                        <Text>Add</Text>
                      </TouchableOpacity>
                    ) : (
                      <Text style={styles.stepsView}>
                        {this.state.user.first_name}
                      </Text>
                    )}
                  </View>
                  <View
                    style={{
                      // justifyContent: 'center',
                      alignSelf: 'flex-end',
                      // backgroundColor: '#11ba11',
                    }}>
                    <AntDesign
                      size={50}
                      name="right"
                      // color="#ffff"
                    />
                  </View>
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
                    <Text style={styles.stepsEdit}>Last Name</Text>
                    {this.state.user.last_name == null ? (
                      <TouchableOpacity
                        style={{
                          height: 30,
                          width: 60,
                          backgroundColor: '#179937',
                          borderRadius: 9,
                          justifyContent: 'center',
                        }}
                        onPress={() => this.editacclast_Name()}>
                        <Text>Add</Text>
                      </TouchableOpacity>
                    ) : (
                      <Text style={styles.stepsView}>
                        {this.state.user.last_name}
                      </Text>
                    )}
                  </View>
                  <View
                    style={{
                      // justifyContent: 'center',
                      alignSelf: 'flex-end',
                      // backgroundColor: '#11ba11',
                    }}>
                    <AntDesign
                      size={50}
                      name="right"
                      // color="#ffff"
                    />
                  </View>
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
                    <Text style={styles.stepsEdit}>Phone</Text>
                    {this.state.phone == null ? (
                      <TouchableOpacity
                        style={{
                          height: 30,
                          width: 60,
                          backgroundColor: '#179937',
                          borderRadius: 9,
                          justifyContent: 'center',
                        }}
                        onPress={() => this.editaccPhone()}>
                        <Text>Add</Text>
                      </TouchableOpacity>
                    ) : (
                      <Text style={styles.stepsView}>{this.state.phone}</Text>
                    )}
                  </View>
                  <View
                    style={{
                      justifyContent: 'center',
                      alignSelf: 'flex-end',
                      // backgroundColor: '#11ba11',
                    }}>
                    <AntDesign
                      size={50}
                      name="right"
                      // color="#ffff"
                    />
                  </View>
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
                    <Text style={styles.stepsEdit}>Email IDs</Text>
                    {this.state.email == null ? (
                      <TouchableOpacity
                        style={{
                          height: 30,
                          width: 60,
                          backgroundColor: '#179937',
                          borderRadius: 9,
                          justifyContent: 'center',
                        }}
                        onPress={() => this.editaccemail()}>
                        <Text>Add</Text>
                      </TouchableOpacity>
                    ) : (
                      <Text style={styles.stepsView}>{this.state.email}</Text>
                    )}
                  </View>
                  <View
                    style={{
                      justifyContent: 'center',
                      alignSelf: 'flex-end',
                      // backgroundColor: '#11ba11',
                    }}>
                    <AntDesign
                      size={50}
                      name="right"
                      // color="#ffff"
                    />
                  </View>
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
                    <Text style={styles.stepsEdit}>City,Country,Pincode</Text>
                    {this.state.address == null ? (
                      <TouchableOpacity
                        style={{
                          height: 30,
                          width: 60,
                          backgroundColor: '#179937',
                          borderRadius: 9,
                          justifyContent: 'center',
                        }}
                        onPress={() => this.editaccpinc()}>
                        <Text>Add</Text>
                      </TouchableOpacity>
                    ) : (
                      <Text style={styles.stepsView}>
                        {this.state.city},{this.state.address},{this.state.pin}
                      </Text>
                    )}
                  </View>
                  <View
                    style={{
                      justifyContent: 'center',
                      alignSelf: 'flex-end',
                      // backgroundColor: '#11ba11',
                    }}>
                    <AntDesign
                      size={50}
                      name="right"
                      // color="#ffff"
                    />
                  </View>
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
                    <Text style={styles.stepsEdit}>Occupation</Text>
                    {this.state.occupation == null ? (
                      <TouchableOpacity
                        style={{
                          height: 30,
                          width: 60,
                          backgroundColor: '#179937',
                          borderRadius: 9,
                          justifyContent: 'center',
                        }}
                        onPress={() => this.editaccOccu()}>
                        <Text>Add</Text>
                      </TouchableOpacity>
                    ) : (
                      <Text style={styles.stepsView}>
                        {this.state.occupation}
                      </Text>
                    )}
                  </View>
                  <View
                    style={{
                      justifyContent: 'center',
                      alignSelf: 'flex-end',
                      // backgroundColor: '#11ba11',
                    }}>
                    <AntDesign
                      size={50}
                      name="right"
                      // color="#ffff"
                    />
                  </View>
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
                    <Text style={styles.stepsEdit}>City</Text>
                    {this.state.city == null ? (
                      <TouchableOpacity
                        style={{
                          height: 30,
                          width: 60,
                          backgroundColor: '#179937',
                          borderRadius: 9,
                          justifyContent: 'center',
                        }}
                        onPress={() => this.editaccCity()}>
                        <Text>Add</Text>
                      </TouchableOpacity>
                    ) : (
                      <Text style={styles.stepsView}>{this.state.city}</Text>
                    )}
                  </View>
                  <View
                    style={{
                      justifyContent: 'center',
                      alignSelf: 'flex-end',
                      // backgroundColor: '#11ba11',
                    }}>
                    <AntDesign
                      size={50}
                      name="right"
                      // color="#ffff"
                    />
                  </View>
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
                    <Text style={styles.stepsEdit}>Date of Birth</Text>
                    {this.state.dob == null ? (
                      <DatePicker
                        style={{width: 200}}
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
                            top: 4,
                            marginLeft: 0,
                          },
                          dateInput: {
                            marginLeft: 36,
                          },
                          // ... You can check the source to find the other keys.
                        }}
                        onDateChange={(date) => {
                          this.setState({dob: date},this.onSubmit);
                        }}
                      />
                    ) : (
                      <Text style={styles.stepsView}>{this.state.dob}</Text>
                    )}
                  </View>
                  <View
                    style={{
                      justifyContent: 'center',
                      alignSelf: 'flex-end',
                      // backgroundColor: '#11ba11',
                    }}>
                    <AntDesign
                      size={50}
                      name="right"
                      // color="#ffff"
                    />
                  </View>
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
                <Text style={styles.stepsLog}>LOG MOOD</Text>
              </View>
              <TextInput
                placeholder={this.state.title}
                // value={this.state.weight}
                onChangeText={(value) =>
                  this.setdetails(value, this.state.weight)
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
          {/* 
          <Item>
            <Input
              placeholder="weight"
              value={this.state.weight}
              onChangeText={(value) => this.setdetails(value, 'weight')}
            />
          </Item>
          <Item last>
            <Input
              placeholder="height"
              value={this.state.height}
              onChangeText={(value) => this.setdetails(value, 'height')}
            />
          </Item>
          <Item last>
            <Input
              placeholder="Bmi"
              value={this.state.bmi}
              onChangeText={(value) => this.setdetails(value, 'bmi')}
            />
          </Item>

          <Item>
            <Input
              placeholder="visceral fat"
              value={this.state.visceral_fat}
              onChangeText={(value) => this.setdetails(value, 'visceral_fat')}
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
              placeholder="skype id"
              value={this.state.skype_id}
              onChangeText={(value) => this.setdetails(value, 'skype_id')}
            />
          </Item>
          <Item last>
            <Input
              placeholder="phone"
              value={this.state.phone}
              onChangeText={(value) => this.setdetails(value, 'phone')}
            />
          </Item>
          <Item last>
            <Input
              placeholder="alt phone"
              value={this.state.alt_phone}
              onChangeText={(value) => this.setdetails(value, 'alt_phone')}
            />
          </Item>
          <Item last>
            <Input
              placeholder="city"
              value={this.state.city}
              onChangeText={(value) => this.setdetails(value, 'city')}
            />
          </Item>
          <Item last>
            <Input
              placeholder="address"
              value={this.state.address}
              onChangeText={(value) => this.setdetails(value, 'address')}
            />
          </Item>
          <Item last>
            <Input
              placeholder="pin"
              value={this.state.pin}
              onChangeText={(value) => this.setdetails(value, 'pin')}
            />
          </Item>
          <Item last>
            <Input
              placeholder="country"
              value={this.state.country}
              onChangeText={(value) => this.setdetails(value, 'country')}
            />
          </Item>
          <Item last>
            <Input
              placeholder="occupation"
              value={this.state.occupation}
              onChangeText={(value) => this.setdetails(value, 'occupation')}
            />
          </Item>

          <Item>
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
        </ScrollView>
      </Container>
    );
  }
}
