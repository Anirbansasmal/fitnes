import React, {Component} from 'react';
// import { View, Text } from 'react-native';
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
  Animated,
} from 'react-native';
import {Col, Row, Grid} from 'react-native-easy-grid';
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
class My_billing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progressStatus: 0,
      program: [],
    };
  }

  anim = new Animated.Value(0);

  componentDidMount() {
    this.dietprogram();
  }

  dietprogram = async () => {
    var user = await AsyncStorage.getItem('userId');
    // console.log(user);
    var userDetails = await Api.get('userById/' + user);
    // console.log(userDetails);
    if (userDetails.status === 'success') {
      // console.log(userDetails.data.details.first_name);
      this.setState({
        program: userDetails.data.invoice,
        isloading: false,
      });
    }
  };
  render() {
    return (
      <Container style={styles.background_general}>
        <Head navigation={this.props.navigation} title="" />
        <ScrollView>
          <Text style={styles.profileTitle}>Billing Invoice</Text>
          <View style={{padding: 0, paddingTop: 0}}>
            {/* <View></View> */}
            <Grid
              style={{
                flex: 2,
                marginTop: 20,
                justifyContent: 'center',
                elevation: 6,
                // backgroundColor:"#dba858"
              }}>
              <Col
                style={{
                  paddingRight: 20,
                  paddingLeft: 20,
                }}>
                {this.state.program.map((student, index) => (
                  <Card
                    style={{
                      borderRadius: 15,
                      overflow: 'hidden',
                      elevation: 6,
                      flex: 1,
                      // backgroundColor:"#dba858"
                      // borderWidth:1,
                      // borderColor:"#eb910c",
                      // elevation:4,
                    }}>
                    <CardItem
                      button={true}
                      style={{
                        backgroundColor: '#edbd77',
                        borderWidth: 1,
                        borderColor: '#eb910c',
                        elevation: 4,
                      }}>
                      <Body
                        style={{
                          justifyContent: 'center',
                          flexDirection: 'column',
                          justifyContent: 'center',
                          // alignItems: 'center',
                          // marginStart:6,
                          // paddingRight:4,
                          // paddingTop:4,
                        }}>
                        <Text style={styles.cardTitle_programs}>
                          Current Invoice: #{student.invoice_number}
                        </Text>
                        <View style={{flexDirection: 'column', marginTop: 10}}>
                          <View
                          // style={{
                          //   flexDirection: 'row',
                          // }}
                          >
                            <Text style={styles.cardTitle_health}>
                              Amount : INR {student.amount}
                            </Text>
                          </View>

                          <View
                            style={{
                              flexDirection: 'row',
                            }}>
                            <Text style={styles.cardTitle_health}>
                              Due Date : {student.date}
                            </Text>
                          </View>
                          <Text style={styles.cardTitle_health}>
                            Narration: Bill for the month of {student.date}
                          </Text>
                        </View>

                        <View
                          style={{
                            flexDirection: 'row',
                            alignSelf: 'flex-end',
                            marginTop: 10,
                            // backgroundColor:"#11ba11",
                            // width: '100%',
                          }}>
                          <TouchableOpacity style={{
                            justifyContent:"center",
                          }}>
                            <Image
                              // size={40}
                              style={{
                                height: 50,
                                width: 50,
                                marginEnd: 20,
                                alignSelf: 'center',
                              }}
                              source={require('../../src/assets/images/PDF_file_icon.png')}
                            />
                            <Text style={styles.cardTitle_health}>
                              Download Invoice
                            </Text>
                          </TouchableOpacity>
                          <TouchableOpacity style={{
                            justifyContent:"center",
                          }}>
                            <Image
                              // size={40}
                              style={{
                                height: 50,
                                width: 50,
                                marginEnd: 10,
                                marginStart:20,
                                alignSelf: 'center',
                              }}
                              source={require('../../src/assets/images/card.png')}
                            />
                            <Text style={styles.cardTitle_health}>
                              Pay Online
                            </Text>
                          </TouchableOpacity>
                        </View>

                        {/* </View> */}
                      </Body>
                    </CardItem>
                  </Card>
                ))}
              </Col>
            </Grid>
          </View>
        </ScrollView>
      </Container>
    );
  }
}

export default My_billing;
