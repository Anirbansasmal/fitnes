/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import StartScreen from "../screens/Start";
import LoginScreen from "../screens/Login";
import RegisterScreen from "../screens/Register";
import ForgetPassScreen from "../screens/ForgetPass";
import SplashScreen from "../screens/splash";
import SplashScreen1 from "../screens/splash1";
import {navigationRef} from './Route';

const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
  <AuthStack.Navigator headerMode="none" initialRouteName="Splash1">
    <AuthStack.Screen name="Splash1" component={SplashScreen1} />
    <AuthStack.Screen name="splash" component={SplashScreen} />
    <AuthStack.Screen name="start" component={StartScreen} />
    <AuthStack.Screen name="SplashHome" component={ForgetPassScreen} />
    <AuthStack.Screen name="LogIn" component={LoginScreen} />
    <AuthStack.Screen name="SignUp" component={RegisterScreen} />
  </AuthStack.Navigator>
);


const RootStack = createStackNavigator();
const RootStackScreen = ({userToken}) => (
  
  <RootStack.Navigator headerMode="none">
    <RootStack.Screen name="App" component={AuthStackScreen} />
  </RootStack.Navigator>
);



export default ({userToken}) => (
  <NavigationContainer ref={navigationRef}>
    <RootStackScreen userToken={userToken} />
  </NavigationContainer>
);