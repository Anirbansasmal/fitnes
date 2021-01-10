import React, {Component} from 'react';
var styles = require('../../src/assets/files/Styles');
import {
  Alert,
  Dimensions,
  Image,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
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
} from 'native-base';
// import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
// import { Icon } from 'react-native-elements';

import {NavigationActions} from 'react-navigation';
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';

import Strings from '../utils/Strings';
import ConfigApp from '../utils/ConfigApp';

import t from 'tcomb-form-native';
import FormValidation from '../forms/Validation';
import Api from '../services/api';
// import RNFetchBlob from 'rn-fetch-blob'

const Form = t.form.Form;

var _ = require('lodash');

const stylesheet = _.cloneDeep(t.form.Form.stylesheet);
import {AuthContext} from '../context';
import AsyncStorage from '@react-native-community/async-storage';

var width = Dimensions.get('window').width;

stylesheet.textbox.normal.color = '#808080';
// stylesheet.textbox.normal.borderRadius = 50;
stylesheet.textbox.normal.borderColor = '#d1d5da';
stylesheet.textbox.normal.borderBottomWidth = 5;
stylesheet.textbox.normal.paddingLeft = 20;
stylesheet.textbox.normal.paddingRight = 20;
stylesheet.textbox.normal.height = 53;
stylesheet.textbox.normal.minWidth = 300;
stylesheet.textbox.normal.backgroundColor = '#E0F2F6';
// stylesheet.textbox.normal.resizeMode = 'contain';

// stylesheet.textbox.error.borderRadius = 50;
stylesheet.textbox.error.paddingLeft = 20;
stylesheet.textbox.error.paddingRight = 20;
stylesheet.textbox.error.borderBottomWidth = 5;
stylesheet.textbox.error.height = 53;
stylesheet.textbox.error.minWidth = 300;
// stylesheet.textbox.error.resizeMode = 'contain';
stylesheet.textbox.error.borderColor = 'red';

export default class Login extends Component {
  static navigationOptions = {
    header: null,
  };

  static contextType = AuthContext;

  constructor() {
    super();
    this.user = t.struct({
      email: FormValidation.email,
      password: FormValidation.password,
    });

    this.options = {
      auto: 'placeholders',
      fields: {
        email: {
          error: '',
          autoCapitalize: 'none',
          placeholderTextColor: '#9EA5AB',
          stylesheet: stylesheet,
        },
        password: {
          error: '',
          password: true,
          secureTextEntry: true,
          placeholderTextColor: '#9EA5AB',
          stylesheet: stylesheet,
        },
      },
    };
  }
  login = async () => {
    const validate = this.refs.formId.getValue();
    if (!validate) {
      Alert.alert('Error', 'Please Enter Correct Information');
    }
    if (validate) {
      var request_1_url = 'login';
      var postData = {
        email: validate.email,
        password: validate.password,
        type: 'c',
      };
	  var apiResponse = await Api.post(request_1_url, postData);
	  console.log(apiResponse)
      if (apiResponse.status === 'success') {
        var token = apiResponse.data.token;
        var userId = apiResponse.data.id;
        console.log(userId);
        await AsyncStorage.setItem('userId', String(userId));
        await AsyncStorage.setItem('token', token);
        await this.context.signIn(token);
        // await this.context.setDetails(userData);
        this.props.navigation.navigate('Home');
      } else {
        this.setState({isLoading: false}, () => {
          var errors = '';
          apiResponse.errors.forEach((element) => {
            errors += element + ' ';
          });
          Alert.alert('Error', errors);
        });
      }
    }
  };

  forgetpass() {
    const navigateAction = NavigationActions.navigate({
      routeName: 'ForgetPass',
    });
    this.props.navigation.dispatch(navigateAction);
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
            {/* <Title style={{color: '#000000'}}>{Strings.ST26}</Title> */}
          </Body>
          <Right style={{flex: 1}} />
        </Header>
        <Body>
          <KeyboardAwareScrollView>
            <View
              style={{
                flex: 1,
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
                Log in to continue{' '}
              </Title>
              <Form ref="formId" type={this.user} options={this.options} />

              <Button
                block
                onPress={this.login.bind(this)}
                style={styles.button_auth}>
                <Text>Log in</Text>
              </Button>

              {/* <TouchableOpacity  onPress={this.forgetpass.bind(this)} style={styles.text_auth} activeOpacity={1}>
				<Text style={styles.text_auth}>{Strings.ST29}</Text>
				</TouchableOpacity> */}
            </View>
          </KeyboardAwareScrollView>
        </Body>
      </Container>
    );
  }
}
