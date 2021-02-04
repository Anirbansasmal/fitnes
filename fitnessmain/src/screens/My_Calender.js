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
  TextInput,
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
import {LocaleConfig, Calendar} from 'react-native-calendars';
// import TimeAgo from 'react-native-timeago';
// import PostFav from '../components/PostFav';
// import DietFav from '../components/DietFav';
// import WorkoutFav from '../components/WorkoutFav';
import Strings from '../utils/Strings';
import AppPreLoader from '../components/AppPreLoader';
import Modal from 'react-native-modal';
var styles = require('../../src/assets/files/Styles');
var {height, width} = Dimensions.get('window');
import AsyncStorage from '@react-native-community/async-storage';
import Api from '../services/api';
import Head from '../components/Header_profile';
import Dialog, {DialogContent} from 'react-native-popup-dialog';
// import {TextInput} from 'react-native-paper';
import moment from 'moment';
const deviceWidth = Dimensions.get('window').width;
const deviceHeight =
  Platform.OS === 'ios'
    ? Dimensions.get('window').height
    : Dimensions.get('window').height;
const massage = {key: 'massage', color: '#f54114', selectedDotColor: '#f54114'};
const workout = {key: 'workout', color: '#ffc31c'};

const massage1 = {
  key: 'massage',
  color: '#0dcc0a',
  selectedDotColor: '#0dcc0a',
};
const workout1 = {key: 'workout', color: '#21a1ed'};
class My_Calender extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisable: false,
      count: 0,
      isVisableMood: false,
      isVisableTask: false,
      isVisableFood: false,
      isVisableActivity: false,
      isVisableMenstruation: false,
      isVisableWeight: false,
      showsMood: false,
      taskdet: [],
      taskAddlog: '',
      taskmoodtitle: '',
      taskmooddesc: '',
      taskweight1: '',
      taskweight2: '',
      taskmood: '',
      month: '',
      year: '',
      logData: [],
      titlefetch: '',
      descfetch: '',
      logmood: '',
    };
    this.year = new Date().getFullYear();
    this.month = new Date().getMonth() + 1;
    this.day = new Date().getDay();
    this.logdate = moment().format('YYYY-MM-DD');
  }
  show() {
    if (this.state.count == 0) {
      this.setState({
        isVisable: true,
        count: 1,
        // taskAdd:'Mood'
      });
    } else {
      this.setState({
        isVisable: false,
        count: 0,
        // taskAdd:'',
      });
    }
  }
  mood() {
    this.setState({
      isVisableMood: true,
      taskAddlog: 'mood',
    });
  }
  task() {
    this.setState({
      isVisableTask: true,
      taskAddlog: 'task',
    });
  }
  food() {
    this.setState({
      isVisableFood: true,
      taskAddlog: 'food',
    });
  }
  activity() {
    this.setState({
      isVisableActivity: true,
      taskAddlog: 'activity',
    });
  }
  menstruation() {
    this.setState({
      isVisableMenstruation: true,
      taskAddlog: 'menstruation',
    });
  }
  weight() {
    this.setState({
      isVisableWeight: true,
      taskAddlog: 'weight',
    });
  }

  async reminder() {
    //  calendar/store
    var user = await AsyncStorage.getItem('userId');
    var formdata = new FormData();
    console.log('logdate', this.logdate);
    formdata.append('title', this.state.taskmoodtitle);
    formdata.append('title_desc', this.state.taskmooddesc);
    var logs = {
      title: this.state.taskmoodtitle,
      title_desc: this.state.taskmooddesc,
    };
    var data = {
      user_id: user,
      date: this.logdate,
      type: this.state.taskAddlog,
      log: JSON.stringify(logs),
    };

    var apiResponse = await Api.postlog('calendar/store', data);
    console.log('apiResponse', apiResponse);
    if (apiResponse.status === 'success') {
      this.setState({
        isVisableMood: false,
      });
      Alert.alert('Successfully', 'Your mood Add');
    } else {
    }
  }
  async submitTask() {
    var user = await AsyncStorage.getItem('userId');
    var formdata = new FormData();
    formdata.append('title', this.state.taskmoodtitle);
    formdata.append('title_desc', this.state.taskmooddesc);
    formdata.append('type_log', this.state.taskmood);
    var data = {
      user_id: user,
      date: this.logdate,
      type: this.state.taskAddlog,
      log: JSON.stringify(formdata),
    };

    var apiResponse = await Api.postlog('calendar/store', data);
    console.log('apiResponse', apiResponse);
    if (apiResponse.status === 'success') {
      this.setState({
        isVisableMood: false,
      });
      Alert.alert('Successfully', 'Your mood Add');
    } else {
    }
  }
  async submitFood() {
    var user = await AsyncStorage.getItem('userId');
    var formdata = new FormData();
    formdata.append('title', this.state.taskmoodtitle);
    formdata.append('title_desc', this.state.taskmooddesc);
    formdata.append('type', this.state.taskmood);
    var data = {
      user_id: user,
      date: this.logdate,
      type: this.state.taskAddlog,
      log: JSON.stringify(formdata),
    };
    var apiResponse = await Api.post('calendar/store', data);
    if (apiResponse.status === 'success') {
      this.setState({
        isVisableFood: false,
      });
      Alert.alert('Successfully', 'Add your food');
    } else {
    }
  }
  async submitActivity() {
    var user = await AsyncStorage.getItem('userId');
    var formdata = new FormData();
    formdata.append('title', this.state.taskmoodtitle);
    formdata.append('title_desc', this.state.taskmooddesc);
    formdata.append('type', this.state.taskmood);
    var data = {
      user_id: user,
      date: this.logdate,
      type: this.state.taskAddlog,
      log: JSON.stringify(formdata),
    };
    var apiResponse = await Api.post('calendar/store', data);
    if (apiResponse.status === 'success') {
      this.setState({
        isVisableActivity: false,
      });
      Alert.alert('Successfully', 'Add your Activity');
    } else {
    }
  }
  async submitMenstruation() {
    var user = await AsyncStorage.getItem('userId');
    var formdata = new FormData();
    formdata.append('title', this.state.taskmoodtitle);
    formdata.append('title_desc', this.state.taskmooddesc);
    formdata.append('type', this.state.taskmood);
    var data = {
      user_id: user,
      date: this.logdate,
      type: this.state.taskAddlog,
      log: JSON.stringify(formdata),
    };
    var apiResponse = await Api.post('calendar/store', data);
    if (apiResponse.status === 'success') {
      this.setState({
        isVisableMenstruation: false,
      });
      Alert.alert('Successfully', 'Add your Menstruation');
    } else {
    }
  }
  async submitWeight() {
    var user = await AsyncStorage.getItem('userId');
    var formdata = new FormData();
    formdata.append('title', this.state.taskmoodtitle);
    formdata.append('title_desc', this.state.taskmooddesc);
    formdata.append('type', this.state.taskmood);
    var data = {
      user_id: user,
      date: this.logdate,
      type: this.state.taskAddlog,
      log: JSON.stringify(formdata),
    };
    var apiResponse = await Api.post('calendar/store', data);
    if (apiResponse.status === 'success') {
      this.setState({
        isVisableWeight: false,
      });
      Alert.alert('Successfully', 'Add your Weight');
    } else {
    }
  }
  taskaddLog() {}
  componentDidMount() {
    this.taskadd();
  }
  async taskadd() {
    var user = await AsyncStorage.getItem('userId');
    var apiResponse = await Api.get('userById/' + user);
    // console.log(apiResponse);
    if (apiResponse.status === 'success') {
      // Alert.alert('Success', 'Profile Updated');

      // this.setState({
      //   isloading: false,
      //   task: apiResponse.data.tasks,
      //   taskLoading: false,
      //   profile_name:apiResponse.data.details.first_name,
      //   weight:apiResponse.data.details.weight,
      //   bmi:apiResponse.data.details.bmi,
      //   userDiet: apiResponse.data.dietchart,
      // });
      if (apiResponse.data.tasks == '') {
        this.setState({
          taskdet: 'No task available',
        });
      } else {
        this.setState({
          taskdet: apiResponse.data.tasks[0].task,
        });
      }
      console.log('userDiet', apiResponse.data.created_at);
    } else {
      const error = apiResponse.errors;
      this.setState({isLoading: false}, () => {
        var errors = '';
        Object.keys(error).forEach(function (key) {
          errors += error[key] + ' ';
        });
        Alert.alert('Error', errors);
      });
    }
    console.log('user', this.state.task[0].task);
  }
  async taskfecth() {
    var user = await AsyncStorage.getItem('userId');
    var data = {
      user_id: user,
      month: this.state.month,
      year: this.state.year,
    };
    var apiResponse = await Api.post('calendar/fetch', data);
    if (apiResponse.status === 'success') {
      this.setState({
        logData: apiResponse.data,
        titlefetch: apiResponse,
        descfetch: apiResponse,
        logmood: apiResponse,
      });
    } else {
    }
  }
  setTaskti = (task) => {
    this.setState({
      taskmoodtitle: task,
    });
  };
  setTaskdesc = (task) => {
    this.setState({
      taskmooddesc: task,
    });
  };
  setTaskweight1 = (task) => {
    this.setState({
      taskweight1: task,
    });
  };
  setTaskweight2 = (task) => {
    this.setState({
      taskweight2: task,
    });
  };
  taskmood = () => {
    this.setState({
      taskmood: 'Reminder',
    });
  };
  close() {
    this.setState({
      showsMood: false,
    });
  }
  renderlog({index, item}) {
    console.log(item.log[index].title);
    return (
      <View>
        <View style={{alignSelf: 'center'}}>
          <Text style={styles.stepsLog}>LOG {item.log_type}</Text>
        </View>
        {/* {this.state.titlefetch == '' ? null : ( */}
        <Text
          style={{
            marginLeft: 10,
            marginRight: 40,
            alignSelf: 'center',
            marginTop: 10,
          }}>
          created at: {item.log_date}
        </Text>
        {/* )} */}
        {/* {this.state.titlefetch == '' ? null : ( */}
        <Text
          style={{
            marginLeft: 10,
            marginRight: 10,
            marginTop: 10,
          }}>
          {/* {this.state.titlefetch} */}
        </Text>
        {/* )} */}
      </View>
    );
  }
  render() {
    return (
      <Container style={styles.background_general}>
        <Head navigation={this.props.navigation} title="" />
        <ScrollView>
          <View
            style={{
              height: 60,
              // shadowColor: '#000000',
              // borderBottomWidth: 0,
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.9,
              // borderBottomWidth: 1,
              borderBottomColor: '#ddd',
              elevation: 3,
              // shadowRadius: 3,
            }}>
            <Text style={styles.profileTitle}>MY CALENDAR</Text>
          </View>
          <View
            style={{
              backgroundColor: '#f5f7f5',
              padding: 10,
            }}>
            <Calendar
              style={{
                // borderWidth: 1,
                // borderColor: 'gray',
                height: 350,
              }}
              // Specify theme properties to override specific styles for calendar parts. Default = {}
              theme={{
                backgroundColor: '#ffffff',
                calendarBackground: '#ffffff',
                textSectionTitleColor: '#b6c1cd',
                textSectionTitleDisabledColor: '#d9e1e8',
                selectedDayBackgroundColor: '#00adf5',
                selectedDayTextColor: '#ffffff',
                todayTextColor: '#00adf5',
                dayTextColor: '#2d4150',
                textDisabledColor: '#d9e1e8',
                dotColor: '#00adf5',
                selectedDotColor: '#ffffff',
                arrowColor: 'orange',
                disabledArrowColor: '#d9e1e8',
                monthTextColor: 'blue',
                indicatorColor: 'blue',
                textDayFontFamily: 'monospace',
                textMonthFontFamily: 'monospace',
                textDayHeaderFontFamily: 'monospace',
                textDayFontWeight: '300',
                textMonthFontWeight: 'bold',
                textDayHeaderFontWeight: '300',
                textDayFontSize: 16,
                textMonthFontSize: 16,
                textDayHeaderFontSize: 16,
                textSectionTitleDisabledColor: '#d9e1e8',
              }}
              onDayPress={(day) => {
                console.log('selected day', day);
                this.setState(
                  {
                    month: day.month,
                    year: day.year,
                    showsMood: true,
                  },
                  this.taskfecth,
                );
              }}
              hideExtraDays={true}
              firstDay={1}
              showWeekNumbers={true}
              enableSwipeMonths={true}
              // markingType={'multi-dot'}
              // renderArrow={(direction) => (<Arrow/>)}
              markedDates={{
                // '2021-01-09': {
                //   selected: true,
                //   marked: true,
                //   selectedColor: '#f53716',
                // },
                '2021-01-07': {dots: [workout], dotColor: 'red'},
                '2021-01-18': {dots: [massage], dotColor: 'red'},
                '2021-01-19': {dots: [massage, workout], dotColor: 'red'},
                '2021-01-10': {dots: [massage1, workout1], dotColor: 'red'},
              }}
              markingType={'multi-dot'}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  height: 10,
                  width: 10,
                  borderRadius: 10,
                  backgroundColor: '#c93916',
                  marginTop: 4,
                }}></View>
              <Text
                style={{
                  marginLeft: 4,
                }}>
                Bad
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  height: 10,
                  width: 10,
                  borderRadius: 10,
                  backgroundColor: '#d6b309',
                  marginTop: 4,
                }}></View>

              <Text
                style={{
                  marginLeft: 4,
                }}>
                Ok
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  height: 10,
                  width: 10,
                  borderRadius: 10,
                  backgroundColor: '#24b329',
                  marginTop: 4,
                }}></View>
              <Text
                style={{
                  marginLeft: 4,
                }}>
                Awesome
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  height: 10,
                  width: 10,
                  borderRadius: 10,
                  backgroundColor: '#1396ba',
                  marginTop: 4,
                }}></View>
              <Text
                style={{
                  marginLeft: 4,
                }}>
                Self Log
              </Text>
            </View>
          </View>

          <View style={{flexDirection: 'column'}}>
            <Text style={styles.Titletoday}>TODAY'S TASKS</Text>

            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              {this.state.taskdet != 'No task available' ? (
                <View
                  style={{
                    // backgroundColor: '#ffff44',
                    flexDirection: 'column',
                    width: 200,
                    alignSelf: 'flex-start',
                    justifyContent: 'flex-start',
                    // position:"absolute"
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginStart: 20,
                      marginTop: 10,
                    }}>
                    <View
                      style={{
                        height: 20,
                        width: 20,
                        borderWidth: 1,
                        borderColor: '#035048',
                        backgroundColor: '#d7dbd7',
                      }}></View>
                    <Text style={styles.stepsTitle}>Walk 10000 Steps</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginStart: 20,
                      marginTop: 10,
                    }}>
                    <View
                      style={{
                        height: 20,
                        width: 20,
                        borderWidth: 1,
                        borderColor: '#035048',
                        backgroundColor: '#d7dbd7',
                      }}></View>
                    <Text style={styles.stepsTitle}>Drink 1ltr Water</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginStart: 20,
                      marginTop: 10,
                    }}>
                    <View
                      style={{
                        height: 20,
                        width: 20,
                        borderWidth: 1,
                        borderColor: '#035048',
                        backgroundColor: '#d7dbd7',
                      }}></View>
                    <Text style={styles.stepsTitle}>Heart Medicine</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginStart: 20,
                      marginTop: 10,
                    }}>
                    <View
                      style={{
                        height: 20,
                        width: 20,
                        borderWidth: 1,
                        borderColor: '#035048',
                        backgroundColor: '#d7dbd7',
                      }}></View>
                    <Text style={styles.stepsTitle}>Evening Walk</Text>
                  </View>
                </View>
              ) : null}
              {this.state.isVisable === true ? (
                <View style={styles.flatPopup}>
                  <Text style={styles.stepsLog}>SELF LOG</Text>
                  <View
                    style={{
                      flexDirection: 'column',
                      marginStart: 20,
                      marginTop: 10,
                      // padding:10,
                    }}>
                    <TouchableOpacity onPress={() => this.mood()}>
                      <Text style={styles.stepsLogs}>Mood</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.task()}>
                      <Text style={styles.stepsLogs}>Task</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.food()}>
                      <Text style={styles.stepsLogs}>Food</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.activity()}>
                      <Text style={styles.stepsLogs}>Activity</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.menstruation()}>
                      <Text style={styles.stepsLogs}>Menstruation</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.weight()}>
                      <Text style={styles.stepsLogs_weight}>Weight</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ) : null}
            </View>
          </View>
          <TouchableOpacity
            style={styles.flatButton}
            onPress={() => this.show()}>
            <Image
              style={{
                height: 40,
                width: 40,
                marginEnd: 20,
              }}
              source={require('../../src/assets/images/flat_add.png')}></Image>
          </TouchableOpacity>

          <Modal
            isVisible={this.state.isVisableMood}
            style={{
              backdropOpacity: 10.7,
              alignSelf: 'center',
              width: '90%',
              paddingLeft: 30,
              paddingRight: 30,
            }}
            backdropColor="#ffff"
            coverScreen={true}
            hasBackdrop={true}
            onBackdropPress={() =>
              this.setState({
                isVisableMood: false,
                taskAddlog: '',
              })
            }>
            <View
              style={{
                backgroundColor: '#ffff',
                height: 400,
                borderWidth: 1,
                borderRadius: 20,
              }}>
              <View style={{alignSelf: 'center'}}>
                <Text style={styles.stepsLog}>LOG MOOD</Text>
              </View>
              <TextInput
                placeholder="Task Title"
                // value={text}
                onChangeText={(text) => this.setTaskti(text)}
                style={{
                  marginLeft: 10,
                  marginRight: 10,
                  backgroundColor: '#dcdedc',
                }}
              />
              <TextInput
                placeholder="optionally share something more ..."
                // value={text}
                multiline={true}
                onChangeText={(text) => this.setTaskdesc(text)}
                style={{
                  marginLeft: 10,
                  marginRight: 10,
                  marginTop: 10,
                  height: 190,
                  textAlignVertical: 'top',
                  // alignSelf: 'flex-start',
                  backgroundColor: '#dcdedc',
                }}
              />
              <TouchableOpacity
                style={{
                  backgroundColor: '#069906',
                  width: 120,
                  alignSelf: 'center',
                  borderRadius: 10,
                  marginTop: 10,
                }}
                onPress={() => this.reminder()}>
                <Text style={{margin: 10, alignSelf: 'center', color: '#ffff'}}>
                  Submit
                </Text>
              </TouchableOpacity>
            </View>
          </Modal>

          <Modal
            isVisible={this.state.isVisableTask}
            style={{
              // height: 100,
              backdropOpacity: 10.7,
              alignSelf: 'center',
              width: '90%',
              paddingLeft: 30,
              paddingRight: 30,
            }}
            backdropColor="#ffff"
            coverScreen={true}
            hasBackdrop={true}
            onBackdropPress={() =>
              this.setState({
                isVisableTask: false,
              })
            }>
            <View
              style={{
                backgroundColor: '#ffff',
                height: 450,
                borderWidth: 1,
                borderRadius: 20,
                // width:'90%',
                // paddingLeft:20,
                // paddingRight:20,
              }}>
              <View style={{alignSelf: 'center'}}>
                <Text style={styles.stepsLog}>LOG TASK</Text>
              </View>
              <TextInput
                placeholder="Task Title"
                // value={text}
                onChangeText={(text) => this.setTaskti(text)}
                style={{
                  marginLeft: 10,
                  marginRight: 10,
                  backgroundColor: '#dcdedc',
                }}
              />
              <TextInput
                placeholder="optionally share something more ..."
                // value={text}
                onChangeText={(text) => this.setTaskdesc(text)}
                style={{
                  marginLeft: 10,
                  marginRight: 10,
                  marginTop: 10,
                  height: 190,
                  textAlignVertical: 'top',
                  backgroundColor: '#dcdedc',
                }}
              />
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                }}
                onPress={() => this.taskmood()}>
                <Image
                  size={40}
                  source={require('../../src/assets/images/reminder.png')}
                  style={{
                    height: 40,
                    width: 40,
                    margin: 10,
                  }}
                />
                <Text style={{margin: 10, alignSelf: 'center'}}>
                  SET REMINDER
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: '#069906',
                  width: 120,
                  alignSelf: 'center',
                  borderRadius: 10,
                }}
                onPress={() => this.submitTask()}>
                <Text style={{margin: 10, alignSelf: 'center', color: '#ffff'}}>
                  Submit
                </Text>
              </TouchableOpacity>
            </View>
          </Modal>

          <Modal
            isVisible={this.state.isVisableFood}
            style={{
              // height: 100,
              backdropOpacity: 10.7,
              alignSelf: 'center',
              width: '90%',
              paddingLeft: 30,
              paddingRight: 30,
            }}
            backdropColor="#ffff"
            coverScreen={true}
            hasBackdrop={true}
            onBackdropPress={() =>
              this.setState({
                isVisableFood: false,
              })
            }>
            <View
              style={{
                backgroundColor: '#ffff',
                height: 400,
                borderWidth: 1,
                borderRadius: 20,
                // width:'90%',
                // paddingLeft:20,
                // paddingRight:20,
              }}>
              <View style={{alignSelf: 'center'}}>
                <Text style={styles.stepsLog}>LOG FOOD</Text>
              </View>
              <TextInput
                placeholder="What did you eat"
                // value={text}
                onChangeText={(text) => this.setTaskti(text)}
                style={{
                  marginLeft: 10,
                  marginRight: 10,
                  backgroundColor: '#dcdedc',
                }}
              />
              <TextInput
                placeholder="optionally share something more ..."
                // value={text}
                onChangeText={(text) => this.setTaskdesc(text)}
                style={{
                  marginLeft: 10,
                  marginRight: 10,
                  marginTop: 10,
                  height: 190,
                  backgroundColor: '#dcdedc',
                  textAlignVertical: 'top',
                }}
              />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                }}>
                <View
                  style={{
                    height: 20,
                    width: 20,
                    margin: 10,
                    backgroundColor: '#dff0df',
                    borderColor: '#4d5c4d',
                    borderWidth: 1,
                    borderRadius: 20,
                  }}
                />
                <Text
                  style={{
                    margin: 10,
                    alignSelf: 'center',
                    fontWeight: '700',
                    fontSize: 18,
                    color: '#035048',
                  }}>
                  TELL MY DIETICIAN
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  backgroundColor: '#069906',
                  width: 120,
                  alignSelf: 'center',
                  borderRadius: 10,
                }}
                onPress={() => this.submitFood()}>
                <Text style={{margin: 10, alignSelf: 'center', color: '#ffff'}}>
                  Submit
                </Text>
              </TouchableOpacity>
            </View>
          </Modal>

          <Modal
            isVisible={this.state.isVisableActivity}
            style={{
              // height: 100,
              backdropOpacity: 10.7,
              alignSelf: 'center',
              width: '90%',
              paddingLeft: 30,
              paddingRight: 30,
            }}
            backdropColor="#ffff"
            coverScreen={true}
            hasBackdrop={true}
            onBackdropPress={() =>
              this.setState({
                isVisableActivity: false,
              })
            }>
            <View
              style={{
                backgroundColor: '#ffff',
                height: 380,
                borderWidth: 1,
                borderRadius: 20,
              }}>
              <View style={{alignSelf: 'center'}}>
                <Text style={styles.stepsLog}>LOG ACTIVITY</Text>
              </View>
              <View
                style={{justifyContent: 'space-around', flexDirection: 'row'}}>
                <TouchableOpacity
                  onPress={() =>
                    this.setState({
                      taskmood: 'weight',
                    })
                  }>
                  <Image
                    size={40}
                    source={require('../../src/assets/images/e87be674516ed204f304cf0bff8a577c.png')}
                    style={{
                      height: 40,
                      width: 40,
                      margin: 10,
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() =>
                    this.setState({
                      taskmood: 'walk',
                    })
                  }>
                  <Image
                    size={40}
                    source={require('../../src/assets/images/5f0a282cee6bcd654d14f9349fb8db20.png')}
                    style={{
                      height: 40,
                      width: 40,
                      margin: 10,
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() =>
                    this.setState({
                      taskmood: 'sleep',
                    })
                  }>
                  <Image
                    size={40}
                    source={require('../../src/assets/images/628c748a20f0f8d8306ebbdd04d1662d.png')}
                    style={{
                      height: 40,
                      width: 40,
                      margin: 10,
                    }}
                  />
                </TouchableOpacity>
              </View>
              <TextInput
                placeholder="optionally share something more ..."
                // value={text}
                onChangeText={(text) => this.setTaskti(text)}
                style={{
                  marginLeft: 10,
                  marginRight: 10,
                  marginTop: 10,
                  height: 190,
                  backgroundColor: '#dcdedc',
                  textAlignVertical: 'top',
                }}
              />

              <TouchableOpacity
                style={{
                  backgroundColor: '#069906',
                  width: 120,
                  alignSelf: 'center',
                  borderRadius: 10,
                  marginTop: 18,
                }}
                onPress={() => this.submitActivity()}>
                <Text style={{margin: 10, alignSelf: 'center', color: '#ffff'}}>
                  Submit
                </Text>
              </TouchableOpacity>
            </View>
          </Modal>

          <Modal
            isVisible={this.state.isVisableMenstruation}
            style={{
              // height: 100,
              backdropOpacity: 10.7,
              alignSelf: 'center',
              width: '90%',
              paddingLeft: 30,
              paddingRight: 30,
            }}
            backdropColor="#ffff"
            coverScreen={true}
            hasBackdrop={true}
            onBackdropPress={() =>
              this.setState({
                isVisableMenstruation: false,
              })
            }>
            <View
              style={{
                backgroundColor: '#ffff',
                height: 450,
                borderWidth: 1,
                borderRadius: 20,
                // width:'90%',
                // paddingLeft:20,
                // paddingRight:20,
              }}>
              <ScrollView>
                <View style={{alignSelf: 'center'}}>
                  <Text style={styles.stepsLog}>LOG MENSTRUATION</Text>
                </View>
                <View style={{justifyContent: 'space-around'}}>
                  <Text style={styles.title_MENSTRUATION}>FLOW</Text>
                  <View
                    style={{
                      justifyContent: 'space-around',
                      flexDirection: 'row',
                    }}>
                    <View>
                      <TouchableOpacity
                        onPress={() =>
                          this.setState({
                            taskmood: 'spotting',
                          })
                        }>
                        <Image
                          size={40}
                          source={require('../../src/assets/images/spotting.png')}
                          style={{
                            height: 40,
                            width: 40,
                            margin: 10,
                          }}
                        />
                      </TouchableOpacity>
                      <Text style={styles.title_subCate}>spotting</Text>
                    </View>
                    <View>
                      <TouchableOpacity
                        onPress={() =>
                          this.setState({
                            taskmood: 'light',
                          })
                        }>
                        <Image
                          size={40}
                          source={require('../../src/assets/images/light.png')}
                          style={{
                            height: 40,
                            width: 40,
                            margin: 10,
                          }}
                        />
                      </TouchableOpacity>
                      <Text style={styles.title_subCate}>light</Text>
                    </View>
                    <View>
                      <TouchableOpacity
                        onPress={() =>
                          this.setState({
                            taskmood: 'medium',
                          })
                        }>
                        <Image
                          size={40}
                          source={require('../../src/assets/images/medium.png')}
                          style={{
                            height: 40,
                            width: 40,
                            margin: 10,
                          }}
                        />
                      </TouchableOpacity>
                      <Text style={styles.title_subCate}>medium</Text>
                    </View>
                    <View>
                      <TouchableOpacity
                        onPress={() =>
                          this.setState({
                            taskmood: '',
                          })
                        }>
                        <Image
                          size={40}
                          source={require('../../src/assets/images/heavy.png')}
                          style={{
                            height: 40,
                            width: 40,
                            margin: 10,
                          }}
                        />
                      </TouchableOpacity>
                      <Text style={styles.title_subCate}>heavy</Text>
                    </View>
                  </View>
                  <Text style={styles.title_MENSTRUATION}>DISCHARGE</Text>
                  <View
                    style={{
                      justifyContent: 'space-around',
                      flexDirection: 'row',
                    }}>
                    <View>
                      <TouchableOpacity
                        onPress={() =>
                          this.setState({
                            taskmood: 'egg white',
                          })
                        }>
                        <Image
                          size={40}
                          source={require('../../src/assets/images/egg_white.png')}
                          style={{
                            height: 40,
                            width: 40,
                            margin: 10,
                          }}
                        />
                        <Text style={styles.title_subCate}>egg white</Text>
                      </TouchableOpacity>
                    </View>
                    <View>
                      <TouchableOpacity
                        onPress={() =>
                          this.setState({
                            taskmood: 'creamy',
                          })
                        }>
                        <Image
                          size={40}
                          source={require('../../src/assets/images/creamy.png')}
                          style={{
                            height: 40,
                            width: 40,
                            margin: 10,
                          }}
                        />
                      </TouchableOpacity>
                      <Text style={styles.title_subCate}>creamy</Text>
                    </View>
                    <View>
                      <TouchableOpacity
                        onPress={() =>
                          this.setState({
                            taskmood: 'sticky',
                          })
                        }>
                        <Image
                          size={40}
                          source={require('../../src/assets/images/sticky.png')}
                          style={{
                            height: 40,
                            width: 40,
                            margin: 10,
                          }}
                        />
                      </TouchableOpacity>
                      <Text style={styles.title_subCate}>sticky</Text>
                    </View>
                    <View>
                      <TouchableOpacity
                        onPress={() =>
                          this.setState({
                            taskmood: 'unusual',
                          })
                        }>
                        <Image
                          size={40}
                          source={require('../../src/assets/images/unusual.png')}
                          style={{
                            height: 40,
                            width: 40,
                            margin: 10,
                          }}
                        />
                      </TouchableOpacity>
                      <Text style={styles.title_subCate}>unusual</Text>
                    </View>
                  </View>
                  <Text style={styles.title_MENSTRUATION}>HOW DO YOU FEEL</Text>
                  <View
                    style={{
                      justifyContent: 'space-around',
                      flexDirection: 'row',
                    }}>
                    <View>
                      <TouchableOpacity
                        onPress={() =>
                          this.setState({
                            taskmood: 'cramps',
                          })
                        }>
                        <Image
                          size={40}
                          source={require('../../src/assets/images/cramps.png')}
                          style={{
                            height: 40,
                            width: 40,
                            margin: 10,
                          }}
                        />
                      </TouchableOpacity>
                      <Text style={styles.title_subCate}>cramps</Text>
                    </View>
                    <View>
                      <TouchableOpacity
                        onPress={() =>
                          this.setState({
                            taskmood: 'headache',
                          })
                        }>
                        <Image
                          size={40}
                          source={require('../../src/assets/images/headache.png')}
                          style={{
                            height: 40,
                            width: 40,
                            margin: 10,
                          }}
                        />
                      </TouchableOpacity>
                      <Text style={styles.title_subCate}>headache</Text>
                    </View>
                    <View>
                      <TouchableOpacity
                        onPress={() =>
                          this.setState({
                            taskmood: 'acne',
                          })
                        }>
                        <Image
                          size={40}
                          source={require('../../src/assets/images/acne.png')}
                          style={{
                            height: 40,
                            width: 40,
                            margin: 10,
                          }}
                        />
                      </TouchableOpacity>
                      <Text style={styles.title_subCate}>acne</Text>
                    </View>
                    <View>
                      <TouchableOpacity
                        onPress={() =>
                          this.setState({
                            taskmood: 'sick',
                          })
                        }>
                        <Image
                          size={40}
                          source={require('../../src/assets/images/sick.png')}
                          style={{
                            height: 40,
                            width: 40,
                            margin: 10,
                          }}
                        />
                      </TouchableOpacity>
                      <Text style={styles.title_subCate}>sick</Text>
                    </View>
                  </View>
                </View>
                <TextInput
                  placeholder="optionally share something more ..."
                  // value={text}
                  onChangeText={(text) => this.setText(text)}
                  style={{
                    marginLeft: 10,
                    marginRight: 10,
                    marginTop: 10,
                    height: 190,
                    backgroundColor: '#dcdedc',
                    textAlignVertical: 'top',
                  }}
                />

                <TouchableOpacity
                  style={{
                    backgroundColor: '#069906',
                    width: 120,
                    alignSelf: 'center',
                    borderRadius: 10,
                    marginBottom: 20,
                    margin: 10,
                  }}
                  onPress={() => this.submitMenstruation()}>
                  <Text
                    style={{margin: 10, alignSelf: 'center', color: '#ffff'}}>
                    Submit
                  </Text>
                </TouchableOpacity>
              </ScrollView>
            </View>
          </Modal>

          <Modal
            isVisible={this.state.isVisableWeight}
            style={{
              // height: 100,
              backdropOpacity: 10.7,
              alignSelf: 'center',
              width: '90%',
              paddingLeft: 30,
              paddingRight: 30,
            }}
            backdropColor="#ffff"
            coverScreen={true}
            hasBackdrop={true}
            onBackdropPress={() =>
              this.setState({
                isVisableWeight: false,
              })
            }>
            <View
              style={{
                backgroundColor: '#ffff',
                height: 300,
                borderWidth: 1,
                borderRadius: 20,
              }}>
              <View style={{alignSelf: 'center'}}>
                <Text style={styles.stepsLog}>LOG WEIGHT</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  marginTop: 18,
                }}>
                <View>
                  <TextInput
                    // value={text}
                    onChangeText={(text) => this.setTaskweight1(text)}
                    style={{
                      marginLeft: 10,
                      // marginRight: 10,
                      width: 90,
                      height: 60,
                      backgroundColor: '#dcdedc',
                    }}
                  />
                  <Text style={styles.stepsLog}>KGS</Text>
                </View>
                <View>
                  <TextInput
                    // value={text}
                    onChangeText={(text) => this.setTaskweight2(text)}
                    style={{
                      marginLeft: 10,
                      marginRight: 10,
                      height: 60,
                      width: 90,
                      backgroundColor: '#dcdedc',
                    }}
                  />
                  <Text style={styles.stepsLog}>GMS</Text>
                </View>
              </View>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  marginLeft: 40,
                  marginRight: 20,
                }}
                onPress={() =>
                  this.setState({
                    taskmood: 'Smart Scale',
                  })
                }>
                <Image
                  size={40}
                  source={require('../../src/assets/images/WEIGHT.png')}
                  style={{
                    height: 40,
                    width: 40,
                    margin: 10,
                  }}
                />
                <Text
                  style={{
                    margin: 10,
                    alignSelf: 'center',
                    color: '#035048',
                    fontWeight: '700',
                    fontSize: 18,
                    textAlign: 'center',
                  }}>
                  Click to get weight from a Smart Scale
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: '#069906',
                  width: 120,
                  alignSelf: 'center',
                  borderRadius: 10,
                }}
                onPress={() => this.submitWeight()}>
                <Text style={{margin: 10, alignSelf: 'center', color: '#ffff'}}>
                  Submit
                </Text>
              </TouchableOpacity>
            </View>
          </Modal>

          <Modal
            isVisible={this.state.showsMood}
            style={{
              backdropOpacity: 10.7,
              alignSelf: 'center',
              width: '90%',
              paddingLeft: 30,
              paddingRight: 30,
            }}
            backdropColor="#ffff"
            coverScreen={true}
            hasBackdrop={true}
            onBackdropPress={() =>
              this.setState({
                showsMood: false,
                taskAddlog: '',
              })
            }>
            <View
              style={{
                backgroundColor: '#ffff',
                height: 400,
                borderWidth: 1,
                borderRadius: 20,
              }}>
              <FlatList
                data={this.state.logData}
                renderItem={this.renderlog}
                keyExtractor={(item, index) => index.toString()}
              />
              <TouchableOpacity
                style={{
                  backgroundColor: '#069906',
                  width: 120,
                  alignSelf: 'center',
                  borderRadius: 10,
                  marginTop: 10,
                  marginBottom: 20,
                }}
                onPress={() => this.close()}>
                <Text style={{margin: 10, alignSelf: 'center', color: '#ffff'}}>
                  OK
                </Text>
              </TouchableOpacity>
            </View>
          </Modal>
          {/* </View> */}
        </ScrollView>
      </Container>
    );
  }
}

export default My_Calender;
