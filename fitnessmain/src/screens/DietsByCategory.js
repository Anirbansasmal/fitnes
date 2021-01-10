import React, {Component} from 'react';
import { NavigationActions, StackNavigator, withNavigation } from 'react-navigation';
import{ ImageBackground, Dimensions, View, TouchableOpacity, AsyncStorage, ScrollView, FlatList, Image, SafeAreaView } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import { LinearGradient } from 'expo';
import {Grid, Row, Col } from 'react-native-easy-grid';
import { Container, Content, Body, Text, List, Right, ListItem, Tab, Tabs, Left, Card, CardItem} from 'native-base';
// import * as firebase from 'firebase';
import ConfigApp from '../utils/ConfigApp';
// import BannerAd from '../components/BannerAd';
// import HTML from 'react-native-render-html';
import HTMLView from 'react-native-htmlview';

import Strings from '../utils/Strings';
// import ToastModal from '../components/ToastModal';
// import {Toast} from 'antd-mobile';
// const Checked = () => (<ToastModal title={Strings.ST53}/>);

var styles = require('../../src/assets/files/Styles');
var {height, width} = Dimensions.get('window');
import AppPreLoader from '../components/AppPreLoader';


export default class DietsByCategory extends Component {
   static navigationOptions = ({ navigation }) => ({
    title: `Diet`,
    });

  constructor(props) {
    super(props);
    // const {params} = props.navigation.state;
    this.state = {
      item: props.route.params.data,
      isLoading: false,
    };
    console.log(this.state.item);
  }


  render() {
    if (this.state.isLoading) {
      return (
        <AppPreLoader/>
      );
    }
return (
  
<Container style={styles.background_general}>
  <ImageBackground source={require('../../src/assets/images/profilebg.jpg')} style={{width: width, height: height * 0.20, alignItems: 'center', justifyContent: 'center',}}>
      <Text style={{color: '#FFF', fontSize: 16, marginTop: 6, textTransform: 'uppercase'}}> {Strings.ST65} </Text>
  </ImageBackground>
  <ScrollView>
  <Tabs tabBarUnderlineStyle={{backgroundColor: '#f39c12'}} tabContainerStyle={{ elevation:0 }}>

  {/* <Tab heading='Suggested Changes' tabStyle={styles.tabs_diets} activeTabStyle={styles.activetabs_diets} textStyle={styles.tabs_text_diets} activeTextStyle={styles.activetabs_text_diets}>
  {this.state.item.items.map((student, index) => (
    <Card>
      <CardItem header>
        <Text>{student.item}</Text>
      </CardItem>
      <CardItem>
        <Body>
          <Text>
          {student.suggest}
          </Text>
        </Body>
      </CardItem>
    </Card>
    
  ))}
  </Tab> */}

  {this.state.item.data_sub.map((student, index) => (
  <Tab heading={student.day} tabStyle={styles.tabs_diets} activeTabStyle={styles.activetabs_diets} textStyle={styles.tabs_text_diets} activeTextStyle={styles.activetabs_text_diets}>

    <Card>
      <CardItem header bordered>
        <Text>{student.day}</Text>
      </CardItem>
      <CardItem header>
        <Text style={styles.time}>Early Mornings</Text>
      </CardItem>
      <CardItem bordered>
        <Body>
          <Text>{student['Early Mornings']}</Text>
        </Body>
      </CardItem>
      <CardItem header>
        <Text style={styles.time}>Breakfast</Text>
      </CardItem>
      <CardItem bordered>
        <Body>
          <Text>{student['Breakfast']}</Text>
        </Body>
      </CardItem><CardItem header>
        <Text style={styles.time}>Mid Morning</Text>
      </CardItem>
      <CardItem bordered>
        <Body>
          <Text>{student['Mid Morning']}</Text>
        </Body>
      </CardItem><CardItem header>
        <Text style={styles.time}>Lunch</Text>
      </CardItem>
      <CardItem bordered>
        <Body>
          <Text>{student['Lunch']}</Text>
        </Body>
      </CardItem><CardItem header>
        <Text style={styles.time}>Afternoon Snack</Text>
      </CardItem>
      <CardItem bordered>
        <Body>
          <Text>{student['Afternoon Snack']}</Text>
        </Body>
      </CardItem><CardItem header>
        <Text style={styles.time}>Evening Snack</Text>
      </CardItem>
      <CardItem bordered>
        <Body>
          <Text>{student['Evening Snack']}</Text>
        </Body>
      </CardItem><CardItem header>
        <Text style={styles.time}>Dinner</Text>
      </CardItem>
      <CardItem bordered>
        <Body>
          <Text>{student['Dinner']}</Text>
        </Body>
      </CardItem><CardItem header>
        <Text style={styles.time}>Post Dinner</Text>
      </CardItem>
      <CardItem bordered>
        <Body>
          <Text>{student['Post Dinner']}</Text>
        </Body>
      </CardItem>
    </Card>
  </Tab>
    
  ))}

  </Tabs>
  </ScrollView>
</Container>

)
  }
}

