import React, {Component} from 'react';
import styles from '../../src/assets/files/Styles';
// import { Body, View} from 'native-base';
import {Image, ImageBackground, TouchableOpacity,SafeAreaView,} from 'react-native';
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
import Icon from 'react-native-vector-icons/FontAwesome';
import AppIntroSlider from 'react-native-app-intro-slider';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';

let images = [
  {
    key: 's1',
    // img: require('../../src/assets/images/woman-meditating-nature_113065-182.png'),
    logoSplash: require('../../src/assets/images/WhatsApp_Image_woman.jpeg'),
  },
  {
    key: 's2',
    // img: require('../../src/assets/images/woman-meditating-nature_113065-182.png'),
    logoSplash: require('../../src/assets/images/WhatsApp_Image_woman.jpeg'),
  },
  {
    key: 's3',
    // img: require('../../src/assets/images/woman-meditating-nature_113065-182.png'),
    logoSplash: require('../../src/assets/images/WhatsApp_Image_woman.jpeg'),
  },
];

export default class SplashScreen1 extends Component {
  _renderNextButton = () => {
    return (
      // <View
      //   style={[
      //     {
      //       flexDirection: 'row',
      //       alignItems: 'center',
      //       justifyContent: 'space-around',
      //       marginTop: 10,
      //     },
      //   ]}>
        
        <View
          style={[
            {
              // color: '#f444',
              height: 30,
              width: 180,
              marginStart: 10,
              borderRadius: 9,
              // marginTop: 20,
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 20,
              alignSelf: 'center',
              // borderWidth: 1,
              backgroundColor: '#035048',
            },
          ]}>
            <Text style={[{color: '#cfcfcf'}]}>Next</Text>
          </View>
      // </View>
    );
  };
  _renderItem = ({item}) => {
    // console.log(item.img);
    return (
      <View style={{backgroundColor: '#E7FDFF',flex:1}}>
      <View
        style={{
          // flex: 1,
          flexDirection: 'column',
          // justifyContent: 'center',
          alignItems: 'center',
          // padding: 30,
          paddingBottom: 0,
          backgroundColor: '#9dd6ac',
          marginTop: 20,
          // marginBottom: 10,
          marginLeft:20,
          marginEnd:20,
          height:500,
          borderTopLeftRadius:20,
          borderTopRightRadius:20,
          // borderColor:"#3309d9",
          // borderWidth:2,
        }}>
        <View style={{
          marginTop:80
        }}>
        <Title
            style={{
              color: '#ffffff',
              paddingBottom: 1,
              fontWeight: 'bold',
              fontSize: 24,
            }}>
            Keep Track of Weight{' '}
          </Title>
          <Title
            style={{
              color: '#ffffff',
              paddingBottom: 1,
              fontWeight: 'bold',
              fontSize: 24,
            }}>
            {'       '}Everyday Diet
          </Title>
          <Title
            style={{
              color: '#ffffff',
              paddingBottom: 1,
              fontWeight: 'bold',
              fontSize: 24,
            }}>
            and be in touch with
          </Title>
          <Title
            style={{
              color: '#ffffff',
              paddingBottom: 1,
              fontWeight: 'bold',
              fontSize: 24,
            }}>
            {'       '}Your Dietician
          </Title>
          </View>
        {/* <Text style={styles.title}>{item.title}</Text> */}
        <ImageBackground
          style={[
            {
              width: '50%',
              height: '25%',
              // resizeMode: 'cover',
              // alignItems: 'baseline',
              position: 'absolute',
              bottom: 0,
              // backgroundColor:'rgba(0,0,0,0)',
            },
          ]}
          source={item.logoSplash}>
          
          {/* <Image
            source={item.logoSplash}
            style={styles.logo_start}
            resizeMode="contain"
          /> */}
        </ImageBackground>
      </View>
      </View>
    );
  };
  _renderDotInactive = () => {
    <View
      style={[
        {
          // flexDirection: 'row',
          // alignItems: 'center',
          // justifyContent: 'space-around',
          // marginTop: 10,
          height: 10,
          width: 10,
          borderRadius: 6,
          backgroundColor: '#cfcfcf',
        },
      ]}></View>;
  };
  _renderDotActive = () => {
    <View
      style={[
        {
          // flexDirection: 'row',
          // alignItems: 'center',
          // justifyContent: 'space-around',
          // marginTop: 10,
          height: 10,
          width: 10,
          borderRadius: 6,
          backgroundColor: '#7368e3',
        },
      ]}></View>;
  };
  _renderDoneButton = () => {
    return (
      <TouchableOpacity
          style={[
            {
              // color: '#f444',
              height: 30,
              width: 180,
              marginStart: 10,
              borderRadius: 9,
              // marginTop: 20,
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 20,
              alignSelf: 'center',
              // borderWidth: 1,
              backgroundColor: '#035048',
            },
          ]}
          onPress={()=>this.props.navigation.navigate('start')}>
            <Text style={[{color: '#cfcfcf'}]}>Done</Text>
          </TouchableOpacity>
    );
  };
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
      <View style={{flex:1}}>
            <AppIntroSlider
              data={images}
              
              renderNextButton={this._renderNextButton}
              renderDoneButton={this._renderDoneButton}
              // dotStyle={this._renderDotInactive}
              // activeDotStyle={this._renderDotActive}
              renderItem={this._renderItem}
              //  showSkipButton
              // showPrevButton
              bottomButton={true}
            />
      </View>
      </SafeAreaView>
    );
  }
}
