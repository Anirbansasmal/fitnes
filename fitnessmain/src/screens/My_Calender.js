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
import {TextInput} from 'react-native-paper';
const deviceWidth = Dimensions.get('window').width;
const deviceHeight =
  Platform.OS === 'ios'
    ? Dimensions.get('window').height
    : Dimensions.get('window').height;
    const massage = {key:'massage', color: '#f54114', selectedDotColor: '#f54114'};
    const workout = {key:'workout', color: '#ffc31c'};

    const massage1 = {key:'massage', color: '#0dcc0a', selectedDotColor: '#0dcc0a'};
    const workout1 = {key:'workout', color: '#21a1ed'};
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
    };
  }
  show() {
    if (this.state.count == 0) {
      this.setState({
        isVisable: true,
        count: 1,
      });
    } else {
      this.setState({
        isVisable: false,
        count: 0,
      });
    }
  }
  mood() {
    this.setState({
      isVisableMood: true,
    });
  }
  task() {
    this.setState({
      isVisableTask: true,
    });
  }
  food() {
    this.setState({
      isVisableFood: true,
    });
  }
  activity() {
    this.setState({
      isVisableActivity: true,
    });
  }
  menstruation() {
    this.setState({
      isVisableMenstruation: true,
    });
  }
  weight() {
    this.setState({
      isVisableWeight: true,
    });
  }

  reminder() {
    this.setState({
      isVisableMood: false,
    });
  }
  submitTask() {
    this.setState({
      isVisableTask: false,
    });
  }
  submitFood() {
    this.setState({
      isVisableFood: false,
    });
  }
  submitActivity() {
    this.setState({
      isVisableActivity: false,
    });
  }
  submitMenstruation() {
    this.setState({
      isVisableMenstruation: false,
    });
  }
  submitWeight() {
    this.setState({
      isVisableWeight: false,
    });
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
              }}
              hideExtraDays={true}
              firstDay={1}
              showWeekNumbers={true}
              enableSwipeMonths={true}
              // markingType={'multi-dot'}
              // renderArrow={(direction) => (<Arrow/>)}
              markedDates={{
                '2021-01-09': {
                  selected: true,
                  marked: true,
                  selectedColor: '#f53716',
                },
                '2021-01-07': {dots:[workout], dotColor: 'red',},
                '2021-01-18': {dots:[massage], dotColor: 'red',},
                '2021-01-19': {dots: [massage, workout],dotColor: 'red',},
                '2021-01-10': {dots: [massage1, workout1],dotColor: 'red',},
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
              {this.state.isVisable === true ? (
                <View style={styles.flatPopup}>
                  <Text style={styles.stepsLog}>SELF LOG</Text>
                  <View
                    style={{
                      flexDirection: 'column',
                      marginStart: 20,
                      marginTop: 10,
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
                      <Text style={styles.stepsLogs}>Weight</Text>
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

          {/* <Modal
            isVisible={this.state.isVisableMood}
            backdropColor="#ffff"
            // coverScreen={true}
            // hasBackdrop={true}
            // deviceHeight={100}
            style={{
              width: deviceWidth,
              margin: 0,
              backdropOpacity: 10.7,
              backgroundColor: '#f2f1ed',
              marginTop: deviceHeight - 600,
              // marginBottom:deviceHeight - 600,
              alignSelf: 'center',
            }}
            animationIn={'slideInUp'}
            propagateSwipe={true}>
            <View style={{flex: 1, alignSelf: 'center'}}>
              <Text>Hello!</Text>
            </View>
          </Modal> */}

          {/* <View> */}
          <Modal
            isVisible={this.state.isVisableMood}
            style={{
              // height: 100,
              backdropOpacity: 10.7,
              alignSelf: 'center',
              width: '90%',
              paddingLeft: 30,
              paddingRight: 30,
              // elevation: 10,
              // overflow: 'hidden',
              // borderWidth: 1,
            }}
            backdropColor="#ffff"
            coverScreen={true}
            hasBackdrop={true}
            onBackdropPress={() =>
              this.setState({
                isVisableMood: false,
              })
            }>
            <View
              style={{
                backgroundColor: 'transparent',
                height: 400,
                borderWidth: 1,
                borderRadius: 20,
                // width:'90%',
                // paddingLeft:20,
                // paddingRight:20,
                // elevation:10,
                // shadowColor: '#000',
                // shadowOffset: {width: 1, height: 1},
                // shadowOpacity: 0.4,
                // shadowRadius: 3,
                // elevation: 5,

                // shadowColor: '#000',
                // shadowOffset: {
                //   width: 0,
                //   height: 3,
                // },
                // shadowOpacity: 0.29,
                // shadowRadius: 4.65,

                // elevation: 7,
              }}>
              <View style={{alignSelf: 'center'}}>
                <Text style={styles.stepsLog}>LOG MOOD</Text>
              </View>
              <TextInput
                label="Task Title"
                // value={text}
                onChangeText={() => this.setText(text)}
                style={{
                  marginLeft: 10,
                  marginRight: 10,
                }}
              />
              <TextInput
                label="optionally share something more ..."
                // value={text}
                onChangeText={() => this.setText(text)}
                style={{
                  marginLeft: 10,
                  marginRight: 10,
                  marginTop: 10,
                  height: 190,
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
                backgroundColor: 'transparent',
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
                label="Task Title"
                // value={text}
                onChangeText={() => this.setText(text)}
                style={{
                  marginLeft: 10,
                  marginRight: 10,
                }}
              />
              <TextInput
                label="optionally share something more ..."
                // value={text}
                onChangeText={() => this.setText(text)}
                style={{
                  marginLeft: 10,
                  marginRight: 10,
                  marginTop: 10,
                  height: 190,
                }}
              />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                }}>
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
              </View>
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
                backgroundColor: 'transparent',
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
                label="What did you eat"
                // value={text}
                onChangeText={() => this.setText(text)}
                style={{
                  marginLeft: 10,
                  marginRight: 10,
                }}
              />
              <TextInput
                label="optionally share something more ..."
                // value={text}
                onChangeText={() => this.setText(text)}
                style={{
                  marginLeft: 10,
                  marginRight: 10,
                  marginTop: 10,
                  height: 190,
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
                backgroundColor: 'transparent',
                height: 380,
                borderWidth: 1,
                borderRadius: 20,
              }}>
              <View style={{alignSelf: 'center'}}>
                <Text style={styles.stepsLog}>LOG ACTIVITY</Text>
              </View>
              <View
                style={{justifyContent: 'space-around', flexDirection: 'row'}}>
                <Image
                  size={40}
                  source={require('../../src/assets/images/e87be674516ed204f304cf0bff8a577c.png')}
                  style={{
                    height: 40,
                    width: 40,
                    margin: 10,
                  }}
                />
                <Image
                  size={40}
                  source={require('../../src/assets/images/5f0a282cee6bcd654d14f9349fb8db20.png')}
                  style={{
                    height: 40,
                    width: 40,
                    margin: 10,
                  }}
                />
                <Image
                  size={40}
                  source={require('../../src/assets/images/628c748a20f0f8d8306ebbdd04d1662d.png')}
                  style={{
                    height: 40,
                    width: 40,
                    margin: 10,
                  }}
                />
              </View>
              <TextInput
                label="optionally share something more ..."
                // value={text}
                onChangeText={() => this.setText(text)}
                style={{
                  marginLeft: 10,
                  marginRight: 10,
                  marginTop: 10,
                  height: 190,
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
                backgroundColor: 'transparent',
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
                      <Image
                        size={40}
                        source={require('../../src/assets/images/spotting.png')}
                        style={{
                          height: 40,
                          width: 40,
                          margin: 10,
                        }}
                      />
                      <Text style={styles.title_subCate}>spotting</Text>
                    </View>
                    <View>
                      <Image
                        size={40}
                        source={require('../../src/assets/images/light.png')}
                        style={{
                          height: 40,
                          width: 40,
                          margin: 10,
                        }}
                      />
                      <Text style={styles.title_subCate}>light</Text>
                    </View>
                    <View>
                      <Image
                        size={40}
                        source={require('../../src/assets/images/medium.png')}
                        style={{
                          height: 40,
                          width: 40,
                          margin: 10,
                        }}
                      />
                      <Text style={styles.title_subCate}>medium</Text>
                    </View>
                    <View>
                      <Image
                        size={40}
                        source={require('../../src/assets/images/heavy.png')}
                        style={{
                          height: 40,
                          width: 40,
                          margin: 10,
                        }}
                      />
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
                    </View>
                    <View>
                      <Image
                        size={40}
                        source={require('../../src/assets/images/creamy.png')}
                        style={{
                          height: 40,
                          width: 40,
                          margin: 10,
                        }}
                      />
                      <Text style={styles.title_subCate}>creamy</Text>
                    </View>
                    <View>
                      <Image
                        size={40}
                        source={require('../../src/assets/images/sticky.png')}
                        style={{
                          height: 40,
                          width: 40,
                          margin: 10,
                        }}
                      />
                      <Text style={styles.title_subCate}>sticky</Text>
                    </View>
                    <View>
                      <Image
                        size={40}
                        source={require('../../src/assets/images/unusual.png')}
                        style={{
                          height: 40,
                          width: 40,
                          margin: 10,
                        }}
                      />
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
                      <Image
                        size={40}
                        source={require('../../src/assets/images/cramps.png')}
                        style={{
                          height: 40,
                          width: 40,
                          margin: 10,
                        }}
                      />
                      <Text style={styles.title_subCate}>cramps</Text>
                    </View>
                    <View>
                      <Image
                        size={40}
                        source={require('../../src/assets/images/headache.png')}
                        style={{
                          height: 40,
                          width: 40,
                          margin: 10,
                        }}
                      />
                      <Text style={styles.title_subCate}>headache</Text>
                    </View>
                    <View>
                      <Image
                        size={40}
                        source={require('../../src/assets/images/acne.png')}
                        style={{
                          height: 40,
                          width: 40,
                          margin: 10,
                        }}
                      />
                      <Text style={styles.title_subCate}>acne</Text>
                    </View>
                    <View>
                      <Image
                        size={40}
                        source={require('../../src/assets/images/sick.png')}
                        style={{
                          height: 40,
                          width: 40,
                          margin: 10,
                        }}
                      />
                      <Text style={styles.title_subCate}>sick</Text>
                    </View>
                  </View>
                </View>
                <TextInput
                  label="optionally share something more ..."
                  // value={text}
                  onChangeText={() => this.setText(text)}
                  style={{
                    marginLeft: 10,
                    marginRight: 10,
                    marginTop: 10,
                    height: 190,
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
                backgroundColor: 'transparent',
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
                    onChangeText={() => this.setText(text)}
                    style={{
                      marginLeft: 10,
                      // marginRight: 10,
                      width: 90,
                      height: 60,
                    }}
                  />
                  <Text style={styles.stepsLog}>KGS</Text>
                </View>
                <View>
                  <TextInput
                    // value={text}
                    onChangeText={() => this.setText(text)}
                    style={{
                      marginLeft: 10,
                      marginRight: 10,
                      height: 60,
                      width: 90,
                    }}
                  />
                  <Text style={styles.stepsLog}>GMS</Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  marginLeft: 40,
                  marginRight: 20,
                }}>
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
              </View>
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
          {/* </View> */}
        </ScrollView>
      </Container>
    );
  }
}

export default My_Calender;
