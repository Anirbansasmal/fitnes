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
import {Col, Row, Grid} from 'react-native-easy-grid';
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
import { WebView } from 'react-native-webview';
export default class Profile extends Component {
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
    };
  }
  componentDidMount() {
    this.LoginCheck();
  }
  LoginCheck = async () => {
    console.log('login check');
    // var token = await AsyncStorage.getItem('token');
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
    console.log(value);
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
  survey(){
    this.props.navigation.navigate('webview_survey');
  }
  event(){
    this.props.navigation.navigate('webview_event');
  }
  render() {
    if (this.state.isloading) {
      return <AppPreLoader />;
    }
    var user = '';
    // var email, displayName, emailVerified, creationTime;

    if (user != null) {
      // email = user.email;
      // displayName = 'chandan';
      // emailVerified = user.emailVerified;
      // creationTime = user.metadata.creationTime;
    }

    return (
      <Container style={styles.background_general}>
        <Head navigation={this.props.navigation} title="" />
        <Text style={styles.profileTitle}>ME</Text>
        <ScrollView>
          <View style={{padding: 0, paddingTop: 0}}>
            {/* <Text> Profile_custo </Text> */}
            <Grid
              style={{
                flex: 2,
                marginTop: 20,
                justifyContent: 'space-between',
                elevation: 6,
                // backgroundColor:"#ff99"
              }}>
              <Row
                style={{
                  // backgroundColor:"#ff9933",
                  justifyContent:"space-around",
                  padding: 10,
                }}
                >
                <Card
                  style={{borderRadius: 15, overflow: 'hidden', elevation: 6,width: 170,height: 140,}}>
                  <CardItem
                    button={true}
                    onPress={() => {
                      this.props.navigation.navigate('Profile_custo');
                    }}>
                    <Body
                      style={{
                        justifyContent: 'center',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Image
                        // size={40}
                        style={{
                          width:70,height:70,
                        }}
                        source={require('../../src/assets/images/man.png')}
                      />
                      <Text style={styles.cardTitle_food}>My Profile</Text>
                    </Body>
                  </CardItem>
                </Card>

                <Card
                  style={{borderRadius: 15, overflow: 'hidden', elevation: 6,height: 140,
                  width: 170,}}>
                  <CardItem
                    button={true}
                    onPress={() => {
                      this.props.navigation.navigate('Profile_health');
                    }}>
                    <Body
                      style={{
                        justifyContent: 'center',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Image
                        // size={40}
                        style={{
                          width:70,height:70,
                        }}
                        source={require('../../src/assets/images/goal.png')}
                      />
                      <Text style={styles.cardTitle_food}>Health Progress</Text>
                    </Body>
                  </CardItem>
                </Card>
              </Row>
              
            </Grid>

            <Grid style={{flex: 2, justifyContent: 'center', marginTop: 0}}>
              <Row
                style={{
                  justifyContent:"space-around",
                  padding: 10,
                }}>
                <Card
                  style={{borderRadius: 15, overflow: 'hidden', elevation: 6,height: 140,
                  width: 170,}}>
                  <CardItem
                    button={true}
                    onPress={() => {
                      this.props.navigation.navigate('My_billing');
                    }}>
                    <Body
                      style={{
                        justifyContent: 'center',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Image
                        // size={40}
                        style={{
                          width:70,height:70,
                        }}
                        source={require('../../src/assets/images/bill.png')}
                      />
                      <Text style={styles.cardTitle_food}>
                        Billing Invoices
                      </Text>
                    </Body>
                  </CardItem>
                </Card>

                <Card
                  style={{borderRadius: 15, overflow: 'hidden', elevation: 6,height: 140,
                  width: 170,}}>
                  <CardItem
                  button={true}>
                    <Body
                      style={{
                        justifyContent: 'center',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Image
                        // size={80}
                        style={{
                          width:70,height:70,
                        }}
                        source={require('../../src/assets/images/fitness.png')}
                      />
                      <Text style={styles.cardTitle_food}>
                        Fitness Progress
                      </Text>
                    </Body>
                  </CardItem>
                </Card>
              </Row>
            </Grid>

            <Grid style={{flex: 2, justifyContent: 'center', marginTop: 0}}>
              <Row
                style={{
                  justifyContent:"space-around",
                  padding: 10,
                }}>
                <Card
                  style={{borderRadius: 15, overflow: 'hidden', elevation: 6,height: 140,
                  width: 170,}}>
                  <CardItem
                  button={true}
                  onPress={()=>this.event()}>
                    <Body
                      style={{
                        justifyContent: 'center',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Image
                        // size={40}
                        style={{
                          width:70,height:70,
                        }}
                        source={require('../../src/assets/images/email.png')}
                      />
                      <Text style={styles.cardTitle_food}>Events</Text>
                    </Body>
                  </CardItem>
                </Card>

                <Card
                  style={{borderRadius: 15, overflow: 'hidden', elevation: 6,height: 140,
                  width: 170,}}>
                  <CardItem
                  button={true}
                  onPress={()=>this.survey()}>
                    <Body
                      style={{
                        justifyContent: 'center',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Image
                        // size={80}
                        style={{
                          width:70,height:70,
                        }}
                        source={require('../../src/assets/images/survey.png')}
                      />
                      <Text style={styles.cardTitle_food}>Survey / Quiz</Text>
                    </Body>
                  </CardItem>
                </Card>
              </Row>
            </Grid>

            <View style={styles.needs_title}>
              <View style={styles.needs_titlecolor}>
                <View style={styles.needs_circle_red}></View>
                <Text style={styles.profileTitledesc}>Needs Attention</Text>
              </View>
              <View style={styles.needs_titlecolor}>
                <View style={styles.needs_circle_green}></View>
                <Text style={styles.profileTitledesc}>Update Available</Text>
              </View>
            </View>

            <View style={styles.menstrual_title}>
              <View style={styles.needs_titlecolor}>
                <Image
                  // size={80}
                  style={{height: 40, width: 40,}}
                  source={require('../../src/assets/images/menstrual-cycle.png')}
                />
                <Text style={styles.cardTitle_report}>Menstrual Report</Text>
              </View>
              <View style={styles.needs_setting}>
                <Image
                  // size={80}
                  style={{height: 40, width: 40}}
                  source={require('../../src/assets/images/settings.png')}
                />
                <Text style={styles.cardTitle_report}>App Settings</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </Container>
    );
  }
}
