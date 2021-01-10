import React ,{Fragment}from 'react';

// import { Root } from "native-base";
// import { StatusBar } from "react-native";
import AppPreLoader from "./src/components/AppPreLoader";
import {AuthContext} from "./src/context";
// import { NavigationContainer } from '@react-navigation/native';

import Guest from './src/navigations/Guest';
import Logged from './src/navigations/Logged';
import Api from './src/services/api';

import AsyncStorage from '@react-native-community/async-storage';

const App = () => {

  const [loaded, setIsLoading] = React.useState(true);
  const [isSplash, setIsSplash] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);
  const [userDetails, setUserDetails] = React.useState(null);
  const [cartData, setCartData] = React.useState([]);
  
  const authContext = React.useMemo(() => {
    return {
      isLoading: (data) => {
        setIsLoading(data);
      },
      signIn: (token) => {
        setUserToken(token);
      },
      signOut: () => {
        setUserToken(null);
      },
      setDetails: (data) => {
        setUserDetails(data);
      },
      
      setCData: (data) => {
        setCartData(data);
      },
      getToken: userToken,
      userDetails: userDetails,
      cartData: cartData,
    };
  }, [
    userToken,
    userDetails,
    cartData,
  ]);

  React.useEffect(() => {
    // Fcn.init();
    LoginCheck();

  }, []);

  //setting all default vars and location and login check
  const LoginCheck = async () => {
    console.log('login check')
    var token = await AsyncStorage.getItem('token');
    if (token != null && token !== '') {
    //   var apiResponse = await Api.post(EP.TOKENVERIFY, {});
      console.log(loaded);

    //   if (apiResponse.status === 'Active') {
        setUserToken(token);
    //     var userData = JSON.parse(await AsyncStorage.getItem('userData'));
    //     setUserDetails(userData);
    //   }
    }
    setIsLoading(false);
    console.log(loaded);
  };

  if (loaded) {
    return (
      <AppPreLoader/>
      );
  }
  
  if(userToken) {
    // if(1) {
    return (
      <Fragment>
        <AuthContext.Provider value={authContext}>
          <Logged />
        </AuthContext.Provider>
    </Fragment>
      );
  } else {
    return (
      <Fragment>
        <AuthContext.Provider value={authContext}>
          <Guest />
        </AuthContext.Provider>
      </Fragment>
      );
  }
};

export default App;

