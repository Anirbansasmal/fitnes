import React, {Component} from 'react';
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

class Refer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      programtask: [],
      isloading: false,
    };
  }
  componentDidMount() {
    this.task();
  }
  task = async () => {
    var user = await AsyncStorage.getItem('userId');
    // console.log(user);
    var userDetails = await Api.get('userById/' + user);
    // console.log(userDetails);
    if (userDetails.status === 'success') {
      // console.log(userDetails.data.details.first_name);
      this.setState({
        programtask: userDetails.data.tasks,
        isloading: false,
      });
    }
  };
  render() {
    return (
      <Container style={styles.background_general}>
        <Head navigation={this.props.navigation} title="" />
        <ScrollView>
          <Text style={styles.profileTitle}>My Task</Text>
          <View style={{padding: 0, paddingTop: 0}}>
            <Grid
              style={{
                flex: 2,
                marginTop: 20,
                justifyContent: 'center',
                elevation: 6,
                // backgroundColor: '#10a31c',
              }}>
              <Col
                style={{
                  height: 270,
                  // width: 180,
                  //   flex: 1,
                  paddingRight: 20,
                  paddingLeft: 20,
                }}>
                {this.state.programtask.map((student, index) => (
                  <Card style={styles.card_each}>
                    <CardItem header bordered>
                      <Body
                        style={{
                          flexDirection: 'column',
                        }}>
                        <View style={styles.cardTitle_text}>
                          <View
                            style={{
                              flexDirection: 'column',
                              width: 180,
                            }}>
                            <Text style={styles.cardTitle_days}>
                              {student.title}
                            </Text>
                            <Text style={styles.cardTitle_desc}>
                              {student.task}
                            </Text>
                            <View
                              style={{
                                flexDirection: 'row',
                                // justifyContent:"center"
                                
                              }}>
                              <Text style={styles.cardTitle_desc}>
                                {student.priority}
                              </Text>
                              {student.priority === 'High' ? (
                                <View
                                  style={{
                                    height: 10,
                                    width: 10,
                                    borderRadius: 10,
                                    backgroundColor:"#f24924",
                                    // alignSelf:"center",
                                    marginTop:10,
                                    marginStart:10,
                                  }}>
                                  {/* {student.priority} */}
                                </View>
                              ) : null}
                              {student.priority == 'Medium' ? (
                                <View
                                  style={{
                                    height: 10,
                                    width: 10,
                                    borderRadius: 10,
                                    backgroundColor:"#74bd2b",
                                    // alignSelf:"center",
                                    marginTop:10,
                                    marginStart:10,
                                  }}>
                                  {/* {student.priority} */}
                                </View>
                              ) : null}
                              {this.state.programtask == 'Low' ? (
                                <View
                                  style={{
                                    height: 10,
                                    width: 10,
                                    borderRadius: 10,
                                    backgroundColor:"#d1c719",
                                    // alignSelf:"center",
                                    marginTop:10,
                                    marginStart:10,
                                  }}>
                                  {/* {student.priority} */}
                                </View>
                              ) : null}
                            </View>
                          </View>
                        </View>
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

export default Refer;
