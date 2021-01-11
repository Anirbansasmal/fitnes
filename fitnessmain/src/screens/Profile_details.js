import React, {Component} from 'react';
// import * as firebase from 'firebase';
import { NavigationActions, StackNavigator } from 'react-navigation';
import{ ImageBackground, TouchableOpacity,Alert, Dimensions, View, Image, SafeAreaView, ScrollView, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { Container, Content, Body, Thumbnail,Text, List, Right,Left, Button, ListItem, Tab, Tabs,Form, Item, Input, Label,DatePicker} from 'native-base';
// import { LinearGradient } from 'expo';
import LinearGradient from 'react-native-linear-gradient';
import ConfigApp from '../utils/ConfigApp';
// import TimeAgo from 'react-native-timeago';
// import PostFav from '../components/PostFav';
// import DietFav from '../components/DietFav';
// import WorkoutFav from '../components/WorkoutFav';
import Strings from '../utils/Strings';
import AppPreLoader from "../components/AppPreLoader";


var styles = require('../../src/assets/files/Styles');
var {height, width} = Dimensions.get('window');
import AsyncStorage from '@react-native-community/async-storage';
import Api from '../services/api';



export default class Profile_details extends Component {
static navigationOptions = {
  title: 'Profile',
};


constructor(props) {

    super(props);

    this.state = {
      isloading: true,
      user:[],
      email:'',
      username:'',
      chosenDate:'',
      first_name : '',
      last_name : '' ,
      dob : '',
      weight : '' ,
      height : '' ,
      gender : '' ,
      bmi : '' ,
      visceral_fat : '' ,
      body_fat : '' ,
      skype_id : '' ,
      phone : '' ,
      alt_phone : '' ,
      city : '' ,
      address : '' ,
      pin : '' ,
      country : '' ,
      occupation : '' ,
    }

  }
  componentDidMount(){
    this.LoginCheck();
  }
  LoginCheck = async () => {
    console.log('login check')
    // var token = await AsyncStorage.getItem('token');
    var user = await AsyncStorage.getItem('userId');
    // console.log(user);
        var userDetails = await Api.get('userById/'+user);
        console.log(userDetails);
				if (userDetails.status === 'success') {
            console.log(userDetails.data.details)
            this.setState({
              username: userDetails.data.details.first_name,
              isloading:false,
              user:userDetails.data.details,
              email : userDetails.data.email,
              first_name : userDetails.data.details.first_name,
              last_name : userDetails.data.details.last_name ,
              dob : userDetails.data.details.dob ,
              weight : userDetails.data.details.weight ,
              height : userDetails.data.details.height ,
              gender : userDetails.data.details.gender ,
              bmi : userDetails.data.details.bmi ,
              visceral_fat : userDetails.data.details.visceral_fat ,
              body_fat : userDetails.data.details.body_fat ,
              skype_id : userDetails.data.details.skype_id ,
              phone : userDetails.data.details.phone ,
              alt_phone : userDetails.data.details.alt_phone ,
              city : userDetails.data.details.city ,
              address : userDetails.data.details.address ,
              pin : userDetails.data.details.pin ,
              country : userDetails.data.details.country ,
              occupation : userDetails.data.details.occupation ,
          });
				}
    
    }
    setDate =(value)=>{
      console.log(value);
    }

    setdetails (value,name){
      switch (name) {
        case 'first_name':
          this.setState({
              first_name:value
          });
          break;
        case 'last_name':
          this.setState({
              last_name:value
          });
          break;
        case 'dob':
          this.setState({
              dob:value
          });
          break;
        case 'weight':
          this.setState({
              weight:value
          });
          break;
        case 'height':
          this.setState({
              height:value
          });
          break;
        case 'gender':
          this.setState({
              gender:value
          });
          break;
          case 'bmi':
        this.setState({
            bmi:value
        });
        break;
        case 'visceral_fat':
          this.setState({
              visceral_fat:value
          });
          break;
        case 'body_fat':
          this.setState({
              body_fat:value
          });
          break;
        case 'skype_id':
          this.setState({
              skype_id:value
          });
          break;
        case 'phone':
          this.setState({
              phone:value
          });
          break;
        case 'alt_phone':
          this.setState({
              alt_phone:value
          });
          break;
          case 'city':
            this.setState({
                city:value
            });
            break;
          case 'address':
            this.setState({
                address:value
            });
            break;
          case 'pin':
            this.setState({
                pin:value
            });
            break;
          case 'country':
            this.setState({
                country:value
            });
            break;
          case 'occupation':
            this.setState({
                occupation:value
            });
            break;
      
        default:
          break;
      }
      
      

    }

    onSubmit = async ()=>{
      var data={
        email : this.state.email,
        first_name : this.state.first_name,
        last_name : this.state.last_name ,
        dob : this.state.dob ,
        weight : this.state.weight ,
        height : this.state.height ,
        gender : this.state.gender ,
        bmi : this.state.bmi ,
        visceral_fat : this.state.visceral_fat ,
        body_fat : this.state.body_fat ,
        skype_id : this.state.skype_id ,
        phone : this.state.phone ,
        alt_phone : this.state.alt_phone ,
        city : this.state.city ,
        address : this.state.address ,
        pin : this.state.pin ,
        country : this.state.country ,
        occupation : this.state.occupation ,
      }
      console.log(data)
      var user = await AsyncStorage.getItem('userId');
      var apiResponse = await Api.post('UserDetail/'+user,data);
      console.log(apiResponse);
			if (apiResponse.status === 'success') {	
        Alert.alert('Success',"Profile Updated");
			} else {
        const error = apiResponse.errors
				this.setState({isLoading: false}, () =>{
					var errors=''
					Object.keys(error).forEach(function (key){
						errors += error[key] +' ';
					});
					Alert.alert('Error', errors);
				}
				);
			}
    }


  render () {
    if (this.state.isloading) {
      return (
        <AppPreLoader/>
        );
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
<ImageBackground source={require('../../src/assets/images/profilebg.jpg')} style={{width: width, height: height * 0.20, alignItems: 'center', justifyContent: 'center',}}>
    <Text style={{color: '#f39c12', fontSize: 22, marginTop: 6}}>{this.state.username}</Text>
    {/* <Text style={{color: '#FFF', fontSize: 16, marginTop: 6, textTransform: 'uppercase'}}> {Strings.ST65} </Text> */}
</ImageBackground>
<ScrollView>
<Tabs tabBarUnderlineStyle={{backgroundColor: '#f39c12'}} tabContainerStyle={{ elevation:0 }}>

<Tab heading='View' tabStyle={styles.tabs_diets} activeTabStyle={styles.activetabs_diets} textStyle={styles.tabs_text_diets} activeTextStyle={styles.activetabs_text_diets}>

<List>
  <ListItem>
    <Text>First name : {this.state.user.first_name}</Text>
  </ListItem>
  <ListItem>
    <Text>last name : {this.state.user.last_name}</Text>
  </ListItem>
  <ListItem>
    <Text>Date of birth: {this.state.user.dob}</Text>
  </ListItem>
  <ListItem>
    <Text>Weight: {this.state.user.weight}</Text>
  </ListItem>
  <ListItem>
    <Text>Height: {this.state.user.height}</Text>
  </ListItem>
  <ListItem>
    <Text>BMI: {this.state.user.bmi}</Text>
  </ListItem>
</List> 
</Tab>

<Tab heading='Edit' tabStyle={styles.tabs_diets} activeTabStyle={styles.activetabs_diets} textStyle={styles.tabs_text_diets} activeTextStyle={styles.activetabs_text_diets}>         

<Form>
  <Item>
    <Input placeholder="first name"  value={this.state.first_name} onChangeText={(value)=>this.setdetails(value,'first_name')}/>
  </Item>
  <Item last>
    <Input placeholder="last name" value={this.state.last_name} onChangeText={(value)=>this.setdetails(value,'last_name')}/>
  </Item>
  <Item>
    <Input placeholder="weight" value={this.state.weight} onChangeText={(value)=>this.setdetails(value,'weight')} />
  </Item>
  <Item last>
    <Input placeholder="height" value={this.state.height} onChangeText={(value)=>this.setdetails(value,'height')} />
  </Item>
  <Item last>
    <Input placeholder="Bmi" value={this.state.bmi} onChangeText={(value)=>this.setdetails(value,'bmi')} />
  </Item>

  <Item>
    <Input placeholder="visceral fat"  value={this.state.visceral_fat} onChangeText={(value)=>this.setdetails(value,'visceral_fat')}/>
  </Item>
  <Item last>
    <Input placeholder="body fat" value={this.state.body_fat} onChangeText={(value)=>this.setdetails(value,'body_fat')}/>
  </Item>
  <Item>
    <Input placeholder="skype id" value={this.state.skype_id} onChangeText={(value)=>this.setdetails(value,'skype_id')} />
  </Item>
  <Item last>
    <Input placeholder="phone" value={this.state.phone} onChangeText={(value)=>this.setdetails(value,'phone')} />
  </Item>
  <Item last>
    <Input placeholder="alt phone" value={this.state.alt_phone} onChangeText={(value)=>this.setdetails(value,'alt_phone')} />
  </Item>
  <Item last>
    <Input placeholder="city" value={this.state.city} onChangeText={(value)=>this.setdetails(value,'city')} />
  </Item>
  <Item last>
    <Input placeholder="address" value={this.state.address} onChangeText={(value)=>this.setdetails(value,'address')} />
  </Item>
  <Item last>
    <Input placeholder="pin" value={this.state.pin} onChangeText={(value)=>this.setdetails(value,'pin')} />
  </Item>
  <Item last>
    <Input placeholder="country" value={this.state.country} onChangeText={(value)=>this.setdetails(value,'country')} />
  </Item>
  <Item last>
    <Input placeholder="occupation" value={this.state.occupation} onChangeText={(value)=>this.setdetails(value,'occupation')} />
  </Item>

  <Item>
  <DatePicker
      defaultDate={new Date(2020, 12, 12)}
      minimumDate={new Date(1970, 1, 1)}
      maximumDate={new Date(2040, 12, 31)}
      locale={"en"}
      timeZoneOffsetInMinutes={undefined}
      modalTransparent={false}
      animationType={"fade"}
      androidMode={"default"}
      placeHolderText="Date of birth"
      textStyle={{ color: "green" }}
      placeHolderTextStyle={{ color: "#d3d3d3" }}
      onDateChange={this.setDate}
      disabled={false}
      />
  </Item>
<Button  block onPress={this.onSubmit} style={styles.button_auth}>
 <Text>Update</Text> 
</Button>

</Form>

</Tab>
</Tabs>

</ScrollView>

</Container>

    )
  }

}