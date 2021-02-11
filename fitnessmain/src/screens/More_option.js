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
import Strings from '../utils/Strings';
import AppPreLoader from '../components/AppPreLoader';

var styles = require('../../src/assets/files/Styles');
var {height, width} = Dimensions.get('window');
import AsyncStorage from '@react-native-community/async-storage';
import Api from '../services/api';
import Head from '../components/Header_profile';
import Modal from 'react-native-modal';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
export default function More_option() {
  // static navigationOptions = {
  //   title: 'Profile',
  // };

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     isloading: true,
  //     isVisableMore:false,
  //   };
  //   console.log("jkgdsfjhfghdfh",this.props)
  // }
  // componentDidMount() {
  // this.LoginCheck();
  // }
  const navigation = useNavigation();
  const about = () => {
    navigation.navigate('AboutUsScreen');
  };
  const contact = () => {
    navigation.navigate('ContactUsScreen');
  };
  const faq = () => {
    navigation.navigate('Faq');
  };
  const disclaimer = () => {
    navigation.navigate('Disclaimer');
  };
  const policies = () => {
    navigation.navigate('Polices');
  };
  const refer = () => {
    navigation.navigate('Refer');
  };
  const [data, setData] = React.useState({
    isVisableMore: false,
  });
  // render() {

  return (
    // <Container>
    <>
      <TouchableOpacity
        onPress={() => {
          setData({isVisableMore: true});
        }}>
        <MaterialCommunityIcons
          name="dots-horizontal-circle-outline"
          style={{
            color: '#ffff',
            alignSelf: 'center',
            marginTop: 7,
            marginEnd: 20,
          }}
          size={36}
        />

        {/* /> */}
      </TouchableOpacity>
      <View style={{backgroundColor: 'transparent'}}>
        <Modal
          isVisible={data.isVisableMore}
          style={{
            // height: 100,
            // backdropOpacity: 10.7,
            alignSelf: 'flex-end',
            width: '50%',
            paddingLeft: 30,
            // paddingRight: 30,
            // alignItems:"flex-end"
            // position:"relative",
          }}
          // marginTop={width}
          marginTop={height - 390}
          backdropColor="transparent"
          coverScreen={true}
          hasBackdrop={true}
          onBackdropPress={() =>
            setData({
              isVisableMore: false,
            })
          }>
          <View
            style={{
              backgroundColor: '#ffff',
              // height: 300,
              // borderWidth: 1,
              borderRadius: 20,
            }}>
            <View style={{alignSelf: 'center'}}>
              <Text style={styles.stepsLog}>More Options</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginTop: 18,
              }}>
              <View>
                <TouchableOpacity onPress={() => about()}>
                  <Text style={styles.stepsSetting}>About F&W</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => contact()}>
                  <Text style={styles.stepsSetting}>Contact</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => faq()}>
                  <Text style={styles.stepsSetting}>FAQ</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => disclaimer()}>
                  <Text style={styles.stepsSetting}>Disclaimer</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => policies()}>
                  <Text style={styles.stepsSetting}>Policies</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => refer()}>
                  <Text style={styles.stepsSetting_bottom}>Refer</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </>
    // </Container>
  );
}
// }
