import React, {Component} from 'react';
var styles = require('../../src/assets/files/Styles');
import {Alert, Dimensions, Image} from 'react-native';
import {
  Container,
  Body,
  Footer,
  Header,
  Input,
  Item,
  Left,
  Text,
  Title,
  Right,
  View,
  Button,
  Toast,
  Picker,
} from 'native-base';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
// import {NavigationActions} from 'react-navigation';
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {AuthContext} from '../context';
import AsyncStorage from '@react-native-community/async-storage';
import Strings from '../utils/Strings';
import Api from '../services/api';

import t from 'tcomb-form-native';
const Form = t.form.Form;
import FormValidation from '../forms/Validation';

var _ = require('lodash');

const stylesheet = _.cloneDeep(t.form.Form.stylesheet);

// var width = Dimensions.get('window').width;

stylesheet.textbox.normal.color = '#808080';
// stylesheet.textbox.normal.borderRadius = 50;
stylesheet.textbox.normal.borderColor = '#d1d5da';
stylesheet.textbox.normal.paddingLeft = 20;
stylesheet.textbox.normal.paddingRight = 20;
stylesheet.textbox.normal.height = 53;
stylesheet.textbox.normal.minWidth = 300;
stylesheet.textbox.normal.backgroundColor = '#E0F2F6';
stylesheet.textbox.normal.borderBottomWidth = 5;

stylesheet.pickerContainer.normal.borderWidth = 20;
stylesheet.pickerContainer.normal.borderColor = 'red';

// stylesheet.select.

// stylesheet.textbox.normal.resizeMode = 'contain';

// stylesheet.textbox.error.borderRadius = 50;
stylesheet.textbox.error.paddingLeft = 20;
stylesheet.textbox.error.paddingRight = 20;
stylesheet.textbox.error.height = 53;
stylesheet.textbox.error.minWidth = 300;
// stylesheet.textbox.error.resizeMode = 'contain';
stylesheet.textbox.error.borderColor = 'red';

export default class Register extends Component {
  static navigationOptions = {
    header: null,
  };
  static contextType = AuthContext;
  constructor() {
    super();

    this.state = {
      user: {},
      gender: 'Female',
      isLoading: false,
    };

    this.samePassword = t.refinement(t.String, (s) => {
      return s === this.state.user.password;
    });
    // var Gender = t.enums({
    // 	M: 'Male',
    // 	F: 'Female'
    //   },"Gender");

    this.user = t.struct({
      name: t.String,
      email: FormValidation.email,
      password: FormValidation.password,
      confirm_password: this.samePassword,
      // gender: Gender // enum
    });

    this.options = {
      auto: 'placeholders',
      fields: {
        name: {
          placeholderTextColor: '#d1d5da',
          stylesheet: stylesheet,
        },
        email: {
          autoCapitalize: 'none',
          placeholderTextColor: '#d1d5da',
          stylesheet: stylesheet,
        },
        password: {
          password: true,
          secureTextEntry: true,
          placeholderTextColor: '#d1d5da',
          stylesheet: stylesheet,
        },
        confirm_password: {
          password: true,
          secureTextEntry: true,
          placeholderTextColor: '#d1d5da',
          stylesheet: stylesheet,
        },
        // gender: {
        // 	label: 'Gender' ,
        // 	// placeholderTextColor: '#d1d5da',
        // 	// stylesheet: stylesheet,
        // },
      },
    };

    this.validate = null;
  }

  register = async () => {
    console.log('hi');
    const validate = this.refs.form.getValue();
    if (this.validate) {
      const errorHandler = (e) => {
        console.log(e);
        if (e.code == 'auth/email-already-in-use') {
          Toast.show({
            text: `${Strings.ST36}`,
            position: 'bottom',
            buttonText: `${Strings.ST33}`,
          });
        } else {
          Toast.show({
            text: `${Strings.ST32}`,
            position: 'bottom',
            buttonText: `${Strings.ST33}`,
          });
        }
      };
      if (validate) {
        var request_1_url = 'register';
        var postData = {
          first_name: validate.name,
          email: validate.email,
          password: validate.password,
          c_password: validate.confirm_password,
          user_type: 'c',
          gender: this.state.gender,
          dietitian_id: 0,
        };
        var apiResponse = await Api.post(request_1_url, postData);
        console.log("success",apiResponse);
        if (apiResponse.status === 'success') {
          var token = apiResponse.data.token;
          var userId = apiResponse.data.user.id;
          await AsyncStorage.setItem('userId', String(userId));
          await AsyncStorage.setItem('token', token);
          await this.context.signIn(token);
          // this.props.navigation.navigate('Home');
          Alert.alert('Success', "Register user successfully");
        } else {
          console.log(apiResponse.errors);
          const error = apiResponse.errors;
          // Object.keys(error).forEach(function (key){
          // 	console.log(error[key]);
          // });
          this.setState({isLoading: false}, () => {
            var errors = '';
            Object.keys(error).forEach(function (key) {
              errors += error[key] + ' ';
            });
            Alert.alert('Error', errors);
          });
        }
      }
      console.log(this.refs.form.getValue());
      // firebase.auth().createUserWithEmailAndPassword(validate.email,validate.password).then((response) => {
      //     firebase.auth().currentUser.updateProfile({
      //         displayName : validate.name,
      //     }).then(()=>{
      //     }).catch(errorHandler);

      // }).catch(errorHandler)
    }
  };

  /*

	register () {

		if(this.validate) {
		firebase.auth().createUserWithEmailAndPassword(this.validate.email, this.validate.password).then((response) => {

            firebase.auth().currentUser.updateProfile({
                displayName : this.validate.name,
            }).then(()=>{

            }).catch();

        }).catch()
    }
	}

	*/
	componentDidUpdate(){
		
	}
  onChange(user) {
    this.setState({user});
    if (user.confirm_password !== null && user.confirm_password !== '') {
      this.validate = this.refs.form.getValue();
    }
  }

  render() {
    return (
      <Container style={{backgroundColor: '#E7FDFF'}}>
        <Header
          style={{
            backgroundColor: '#E7FDFF',
            borderBottomWidth: 0,
            shadowOpacity: 0,
            elevation: 0,
          }}>
          <Left style={{flex: 1}}>
            <Button transparent>
              <Icon
                name="arrow-left"
                style={{fontSize: 18}}
                onPress={() => this.props.navigation.goBack()}
              />
            </Button>
          </Left>
          <Body
            style={{flex: 4, justifyContent: 'center', alignItems: 'center'}}>
            {/* <Title style={{color: '#000000'}}>{Strings.ST27}</Title> */}
          </Body>
          <Right style={{flex: 1}} />
        </Header>
        <Body>
          <KeyboardAwareScrollView>
            <View
              style={{
                flex: 0.8,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 20,
              }}>
              <Image
                source={require('../../src/assets/images/new_logo.png')}
                style={styles.logo_start}
                resizeMode="contain"
              />
              <Title
                style={{
                  color: '#000000',
                  paddingBottom: 30,
                  fontWeight: 'bold',
                  fontSize: 24,
                }}>
                Register with Us
              </Title>

              <Form
                ref="form"
                type={this.user}
                options={this.options}
                onChange={(v) => this.onChange(v)}
                value={this.state.user}
              />
              <View
                style={{
                  width: 300,
                  marginTop: 15,
                  marginLeft: 20,
                  marginRight: 20,
                  borderColor: '#d1d5da',
                  borderWidth: 1,
                  borderBottomWidth: 5,
                  borderRadius: 5,
                  alignSelf: 'center',
                  marginBottom: 20,
                }}>
                <Picker
                  style={{width: '100%', paddingBottom: 10}}
                  selectedValue={this.state.gender}
                  onValueChange={(loc) => this.setState({gender: loc})}>
                  <Picker.Item label="Male" value="Male" />
                  <Picker.Item label="Female" value="Female" />
                </Picker>
              </View>

              <Button
                block
                onPress={this.register.bind(this)}
                style={styles.button_auth}>
                <Text>{Strings.ST28}</Text>
              </Button>
            </View>
          </KeyboardAwareScrollView>
        </Body>
      </Container>
    );
  }
}
