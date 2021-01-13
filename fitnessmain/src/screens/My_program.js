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
class My_program extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progressStatus: 0,
      program:[],
    };
  }

  anim = new Animated.Value(0);

  componentDidMount() {
    this.onAnimate();
    this.dietprogram();
  }

  onAnimate = () => {
    this.anim.addListener(({value}) => {
      this.setState({progressStatus: parseInt(value, 10)});
    });
    Animated.timing(this.anim, {
      toValue: 100,
      duration: 50000,
    }).start();
  };
dietprogram=async()=>{
  var user = await AsyncStorage.getItem('userId');
    // console.log(user);
    var userDetails = await Api.get('userById/' + user);
    // console.log(userDetails);
    if (userDetails.status === 'success') {
      // console.log(userDetails.data.details.first_name);
      this.setState({
        program: userDetails.data,
        isloading: false,
      });
    }
}
  render() {
    return (
      <Container style={styles.background_general}>
        <Head navigation={this.props.navigation} title="" />
        <ScrollView>
          <Text style={styles.profileTitle}>MY PROGRAMS</Text>
          <View style={{padding: 0, paddingTop: 0}}>
            {/* <View></View> */}
            <Grid
              style={{
                flex: 2,
                marginTop: 20,
                justifyContent: 'center',
                elevation: 6,
                // backgroundColor: '#10a31c',
              }}>
              <Row
                style={{
                  // height: 270,
                  // width: 180,
                  //   flex: 1,
                  paddingRight: 20,
                  paddingLeft: 20,
                }}>
                <Card
                  style={{
                    borderRadius: 15,
                    overflow: 'hidden',
                    elevation: 6,
                    flex: 1,
                  }}>
                  <CardItem button={true}>
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
                        DIABETES MANAGEMENT
                      </Text>
                      <View style={{flexDirection: 'column', marginTop: 10}}>
                        <View
                          style={{
                            flexDirection: 'row',
                          }}>
                          <Text style={styles.cardTitle_health}>
                            Start Date :
                          </Text>
                          <Text style={styles.cardTitle_date}>{this.state.program.created_at}</Text>
                        </View>

                        

                        <View
                          style={{
                            flexDirection: 'row',
                          }}>
                          <Text style={styles.cardTitle_health}>
                            End Date :
                          </Text>
                          <Text style={styles.cardTitle_date}>{this.state.program.updated_at}</Text>
                        </View>

                        <View
                          style={{
                            flexDirection: 'row',
                          }}>
                          <Text style={styles.cardTitle_health}>
                            Assigned Dietician :
                          </Text>
                          <Text style={styles.cardTitle_date}>
                            {this.state.program.dietitian_name}
                          </Text>
                        </View>
                      </View>

                      <View style={styles.inner_barpro}>
                        <Animated.View
                          style={[
                            styles.inner_bar,
                            {width: this.state.progressStatus + '%'},
                          ]}
                        />
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'flex-end',
                          marginTop: 20,
                          // backgroundColor:"#11ba11",
                          width: '100%',
                        }}>
                        <Image
                          // size={40}
                          style={{
                            height: 40,
                            width: 40,
                            marginEnd: 20,
                          }}
                          source={require('../../src/assets/images/message.png')}
                        />
                        <Image
                          // size={40}
                          style={{
                            height: 40,
                            width: 40,
                          }}
                          source={require('../../src/assets/images/icon_war.png')}
                        />
                      </View>

                      {/* </View> */}
                    </Body>
                  </CardItem>
                </Card>
              </Row>
              <Text style={styles.profileTitle}>SUGGESTED PROGRAMS</Text>
              <Row
                style={{
                  height: 220,
                  // width: 180,
                  //   flex: 1,
                  paddingLeft: 20,
                  paddingRight: 20,
                }}>
                <Card
                  style={{
                    borderRadius: 15,
                    overflow: 'hidden',
                    elevation: 6,
                    flex: 1,
                  }}>
                  <CardItem>
                    <Body
                      style={{
                        // justifyContent: 'center',
                        flexDirection: 'column',
                        // justifyContent: 'center',
                        // alignItems: 'center',
                        // padding:10,
                        // marginStart: 10,
                        paddingRight: 6,
                        paddingTop: 10,
                      }}>
                      <Text style={styles.weightTitle}>WEIGHT MANAGEMENT</Text>

                      <Text style={styles.cardTitle_health}>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s
                      </Text>
                      <Image
                        // size={40}
                        style={{
                          height: 40,
                          width: 40,
                          alignSelf: 'flex-end',
                        }}
                        source={require('../../src/assets/images/icon_war.png')}
                      />
                    </Body>
                  </CardItem>
                </Card>
              </Row>
            </Grid>
          </View>
        </ScrollView>
      </Container>
    );
  }
}

export default My_program;
