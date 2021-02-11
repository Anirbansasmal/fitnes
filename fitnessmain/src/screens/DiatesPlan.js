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
  ScrollableTab,
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
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CheckBox from '@react-native-community/checkbox';
class DiatesPlan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectColor: '#10c923',
      unselectColor: '#edf7ee',
      dataditeSu: props.route.params.data,
      // dataditeMo: [],
      // dataditeTu: [],
      // dataditeWe: [],
      // dataditeTh: [],
      // dataditeFr: [],
      // dataditeSt: [],
      currentTab: 0,
      countlike: 0,
      countdislike: 0,
      islike: false,
      isdislike: false,
      pagi: [],
      weeksprev: 0,
      weeksNext: 0,
      count: 0,
      weeksprevVisable: false,
      weeksNextVisable: false,
      resPerPage: 1,
      prev: true,
      nextVisble: false,
      user_days_uniq_id: [],
      activeColor: '#fff999',
      toggleCheckBox1: false,
      toggleCheckBox2: false,
      toggleCheckBox3: false,
      toggleCheckBox4: false,
      days: 1,
      day_ids: '',
      skipmeal: '',
      eatsom: '',
    };
    this.diet();
    // console.log('dite weeks', this.state.dataditeSu.data_sub);
  }
  // monday = () => {};
  // like = () => {};
  // dislike = () => {};
  componentDidMount() {
    // this.setState({
    //   dataditeSu:this.props.route.params.item,
    // })
    // this.ditelist();
    // console.log(this.state.dataditeSu.data_sub.length > 8);
    // console.log(this.state.dataditeSu.created_at);
    // console.log(this.state.pagi.length);
    // console.log('dite weeks', this.state.dataditeSu.data_sub);
  }
  ditelist = async () => {
    var token = await AsyncStorage.getItem('token');
    var user = await AsyncStorage.getItem('userId');
    var userDetails = await Api.get('userById/' + user);
    // console.log(userDetails);
    if (userDetails.status === 'success') {
      console.log(userDetails.data.dietchart[1].data_sub[0]);

      if (this.state.currentTab == 0) {
        this.setState({
          dataditeSu: [],
          dataditeSu: userDetails.data.dietchart[1].data_sub[0],
        });
      } else if (this.state.currentTab == 1) {
        this.setState({
          dataditeSu: [],
          dataditeSu: userDetails.data.dietchart[1].data_sub[1],
        });
      } else if (this.state.currentTab == 2) {
        this.setState({
          dataditeSu: [],
          dataditeSu: userDetails.data.dietchart[1].data_sub[2],
        });
      } else if (this.state.currentTab == 3) {
        this.setState({
          dataditeSu: [],
          dataditeSu: userDetails.data.dietchart[1].data_sub[3],
        });
      } else if (this.state.currentTab == 4) {
        this.setState({
          dataditeSu: [],
          dataditeSu: userDetails.data.dietchart[1].data_sub[4],
        });
      } else if (this.state.currentTab == 5) {
        this.setState({
          dataditeSu: [],
          dataditeSu: userDetails.data.dietchart[1].data_sub[5],
        });
      } else if (this.state.currentTab == 6) {
        this.setState({
          dataditeSu: [],
          dataditeSu: userDetails.data.dietchart[1].data_sub[7],
        });
      }
      // this.setState({
      //   dataditeSu: userDetails.data.dietchart[1].data_sub[0],
      //   dataditeMo: userDetails.data.dietchart[1].data_sub[1],
      //   dataditeTu: userDetails.data.dietchart[1].data_sub[2],
      //   dataditeWe: userDetails.data.dietchart[1].data_sub[3],
      //   dataditeTh: userDetails.data.dietchart[1].data_sub[4],
      //   dataditeFr: userDetails.data.dietchart[1].data_sub[5],
      //   dataditeSt: userDetails.data.dietchart[1].data_sub[6],
      //   isloading: false,
      // });
    }
  };
  like = (student) => {
    console.log(this.state.countlike);
    console.log(student);
    if (this.state.countlike === 0) {
      this.setState({countlike: 0, islike: true, day_ids: student.day_no});
    } else {
      this.setState({countlike: 1, islike: false, day_ids: ''});
    }
  };
  dislike = (student) => {
    if (this.state.countdislike === 0) {
      this.setState({
        countdislike: 1,
        isdislike: true,
        day_ids: student.day_no,
      });
    } else {
      this.setState({countdislike: 0, isdislike: false, day_ids: ''});
    }
  };
  renderCardMo = ({item}) => {
    // console.log(item)
    return (
      <View style={styles.cardTitle_days1}>
        {/* <this.renderCardMo /> */}
        <Grid style={{flex: 1}}>
          <Col
            style={{
              flex: 1,
            }}>
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
                      <Text style={styles.cardTitle_days}>EARLY MORNING</Text>
                      <Text style={styles.cardTitle_desc}>
                        {student['Early Mornings']}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'column',
                        justifyContent: 'space-around',
                      }}>
                      <TouchableOpacity
                        style={styles.cardTitle_like}
                        onPress={() => this.like()}>
                        <Image
                          style={styles.card_likeimg}
                          source={require('../../src/assets/images/like.png')}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.cardTitle_dislike}
                        onPress={() => this.dislike()}>
                        <Image
                          style={styles.card_dislikeimg}
                          source={require('../../src/assets/images/dislike.png')}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </Body>
              </CardItem>
            </Card>

            <Card style={styles.card_each}>
              <CardItem>
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
                      <Text style={styles.cardTitle_days}>Breakfast</Text>
                      <Text style={styles.cardTitle_desc}>
                        {student['Breakfast']}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'column',
                        justifyContent: 'space-around',
                      }}>
                      <TouchableOpacity
                        style={styles.cardTitle_like}
                        onPress={() => this.like()}>
                        <Image
                          style={styles.card_likeimg}
                          source={require('../../src/assets/images/like.png')}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.cardTitle_dislike}
                        onPress={() => this.dislike()}>
                        <Image
                          style={styles.card_dislikeimg}
                          source={require('../../src/assets/images/dislike.png')}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </Body>
              </CardItem>
            </Card>

            <Card style={styles.card_each}>
              <CardItem>
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
                      <Text style={styles.cardTitle_days}>Mid Morning</Text>
                      <Text style={styles.cardTitle_desc}>
                        {student['Mid Morning']}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'column',
                        justifyContent: 'space-around',
                      }}>
                      <TouchableOpacity
                        style={styles.cardTitle_like}
                        onPress={() => this.like()}>
                        <Image
                          style={styles.card_likeimg}
                          source={require('../../src/assets/images/like.png')}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.cardTitle_dislike}
                        onPress={() => this.dislike()}>
                        <Image
                          style={styles.card_dislikeimg}
                          source={require('../../src/assets/images/dislike.png')}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </Body>
              </CardItem>
            </Card>

            <Card style={styles.card_each}>
              <CardItem>
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
                      <Text style={styles.cardTitle_days}>Lunch</Text>
                      <Text style={styles.cardTitle_desc}>
                        {student['Lunch']}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'column',
                        justifyContent: 'space-around',
                      }}>
                      <TouchableOpacity
                        style={styles.cardTitle_like}
                        onPress={() => this.like()}>
                        <Image
                          style={styles.card_likeimg}
                          source={require('../../src/assets/images/like.png')}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.cardTitle_dislike}
                        onPress={() => this.dislike()}>
                        <Image
                          style={styles.card_dislikeimg}
                          source={require('../../src/assets/images/dislike.png')}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </Body>
              </CardItem>
            </Card>

            <Card style={styles.card_each}>
              <CardItem>
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
                      <Text style={styles.cardTitle_days}>Afternoon Snack</Text>
                      <Text style={styles.cardTitle_desc}>
                        {student['Afternoon Snack']}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'column',
                        justifyContent: 'space-around',
                      }}>
                      <TouchableOpacity
                        style={styles.cardTitle_like}
                        onPress={() => this.like()}>
                        <Image
                          style={styles.card_likeimg}
                          source={require('../../src/assets/images/like.png')}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.cardTitle_dislike}
                        onPress={() => this.dislike()}>
                        <Image
                          style={styles.card_dislikeimg}
                          source={require('../../src/assets/images/dislike.png')}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </Body>
              </CardItem>
            </Card>

            <Card style={styles.card_each}>
              <CardItem>
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
                      <Text style={styles.cardTitle_days}>Evening Snack</Text>
                      <Text style={styles.cardTitle_desc}>
                        {student['Evening Snack']}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'column',
                        justifyContent: 'space-around',
                      }}>
                      <TouchableOpacity
                        style={styles.cardTitle_like}
                        onPress={() => this.like()}>
                        <Image
                          style={styles.card_likeimg}
                          source={require('../../src/assets/images/like.png')}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.cardTitle_dislike}
                        onPress={() => this.dislike()}>
                        <Image
                          style={styles.card_dislikeimg}
                          source={require('../../src/assets/images/dislike.png')}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </Body>
              </CardItem>
            </Card>

            <Card style={styles.card_each}>
              <CardItem>
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
                      <Text style={styles.cardTitle_days}>Dinner</Text>
                      <Text style={styles.cardTitle_desc}>
                        {student['Dinner']}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'column',
                        justifyContent: 'space-around',
                      }}>
                      <TouchableOpacity
                        style={styles.cardTitle_like}
                        onPress={() => this.like()}>
                        <Image
                          style={styles.card_likeimg}
                          source={require('../../src/assets/images/like.png')}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.cardTitle_dislike}
                        onPress={() => this.dislike()}>
                        <Image
                          style={styles.card_dislikeimg}
                          source={require('../../src/assets/images/dislike.png')}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </Body>
              </CardItem>
            </Card>

            <Card style={styles.card_each}>
              <CardItem>
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
                      <Text style={styles.cardTitle_days}>Post Dinner</Text>
                      <Text style={styles.cardTitle_desc}>
                        {student['Post Dinner']}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'column',
                        justifyContent: 'space-around',
                      }}>
                      <TouchableOpacity
                        style={styles.cardTitle_like}
                        onPress={() => this.like()}>
                        <Image
                          style={styles.card_likeimg}
                          source={require('../../src/assets/images/like.png')}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.cardTitle_dislike}
                        onPress={() => this.dislike()}>
                        <Image
                          style={styles.card_dislikeimg}
                          source={require('../../src/assets/images/dislike.png')}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </Body>
              </CardItem>
            </Card>
          </Col>
        </Grid>
      </View>
    );
  };
  changetab = (i) => {
    console.log('currentTab position', i);
    this.setState({currentTab: i}, this.ditelist);
  };
  likeSubmit = async () => {
    this.setState({
      countlike: 0,
      islike: false,
      toggleCheckBox1: false,
      toggleCheckBox2: false,
    });
    var formdata = new FormData();
    var user = await AsyncStorage.getItem('userId');
    formdata.append('skip', this.state.skipmeal);
    formdata.append('noteat', this.state.eatsom);
    // formdata.append('user_id', user);
    // formdata.append('type', 0);
    // formdata.append("log",)
    var data = {
      user_id: user,
      week_id: this.state.day_ids,
      log: JSON.stringify(formdata),
      type: 1,
    };
    console.log(data)
    var apiResponse = await Api.post('chartLog/store' , data);
    // console.log(apiResponse);
    if (apiResponse.status === 'success') {
      Alert.alert('Success', apiResponse.status);
    } else {
      // Alert.alert('Error', errors);
    }
  };
  dislikeSubmit = async () => {
    this.setState({
      countdislike: 0,
      isdislike: false,
      toggleCheckBox3: false,
      toggleCheckBox4: false,
    });
    var formdata = new FormData();
    var user = await AsyncStorage.getItem('userId');
    formdata.append('skip', this.state.skipmeal);
    formdata.append('noteat', this.state.eatsom);
    // formdata.append('user_id', user);
    // formdata.append('type', 0);
    var data = {
      user_id: user,
      week_id: this.state.day_ids,
      log: JSON.stringify(formdata),
      type: 0,
    };
    console.log(data)
    var apiResponse = await Api.post('chartLog/store', data);
    // console.log(apiResponse);
    if (apiResponse.status === 'success') {
      Alert.alert('Success', apiResponse.status);
    } else {
    }
  };
  previous = () => {
    if (this.state.resPerPage <= 1) {
      (this.state.user_days_uniq_id = []),
        (this.state.pagi = []),
        (this.state.prev = true);
      this.setState(
        {
          resPerPage: 1,
          // prev: true,
          // pagi:[],
          // user_days_uniq_id:[],
        },
        this.diet(),
      );
    } else {
      (this.state.user_days_uniq_id = []),
        (this.state.pagi = []),
        (this.state.resPerPage = this.state.resPerPage - 1),
        this.setState({
          nextVisble: false,
          // pagi:[],
          // user_days_uniq_id:[],
        });
      this.diet();
    }
    console.log(this.state.resPerPage);
  };
  next = () => {
    try {
      if (this.state.resPerPage <= 0) {
        (this.state.user_days_uniq_id = []),
          (this.state.pagi = []),
          this.setState({
            resPerPage: this.state.resPerPage + 1,
            prev: true,
            // user_days_uniq_id:[],
            // pagi:[],
          });
        this.diet();
        // this.setState({

        // })
      } else {
        (this.state.user_days_uniq_id = []),
          (this.state.pagi = []),
          (this.state.resPerPage = this.state.resPerPage + 1);
        this.setState({
          // resPerPage: this.state.resPerPage+1,
          prev: false,
        });
        this.diet();
        console.log('clicknext', this.state.user_days_uniq_id.length);
        if (this.state.user_days_uniq_id.length == 0) {
          this.state.nextVisble = true;
          // this.state.resPerPage= this.state.resPerPage - 1;
        } else {
        }
      }
    } catch (error) {}
  };
  diet = () => {
    console.log('prev', 4 * this.state.resPerPage - 4);

    if (this.state.dataditeSu.data_sub.length > 8) {
      for (
        let i = 7 * this.state.resPerPage - 7;
        i < 7 * this.state.resPerPage;
        i++
      ) {
        console.log(this.state.dataditeSu.data_sub[i] == '');
        if (this.state.dataditeSu.data_sub[i] == '') {
          // break
        } else {
          this.state.pagi.push(this.state.dataditeSu.data_sub[i]);
        }
      }

      // this.setState({
      //   user_days_uniq_id:[],
      //   pagi:[],
      // })
      this.state.user_days_uniq_id = Array.from(
        new Set(this.state.pagi),
      ).filter((x) => x !== undefined);
      console.log(this.state.user_days_uniq_id);
    } else {
      for (
        let i = 7 * this.state.resPerPage - 7;
        i < 7 * this.state.resPerPage;
        i++
      ) {
        console.log(this.state.dataditeSu.data_sub[i]);
        if (this.state.dataditeSu.data_sub[i] == '') {
          // break
        } else {
          this.state.pagi.push(this.state.dataditeSu.data_sub[i]);
        }
      }
      //   this.setState({
      //     weeksprevVisable: true,
      //     weeksNextVisable: true,
      //     pagi: [this.state.dataditeSu.data_sub],
      //   });
      // }
      this.state.user_days_uniq_id = Array.from(
        new Set(this.state.pagi),
      ).filter((x) => x !== undefined);
    }
  };
  change = () => {
    this.setState({
      activeColor: '#b81b0f',
    });
    // this.state.activeColor="#b81b0f"
  };
  renderDay = ({item}) => {
    console.log('render', item.day);
    return (
      <View style={styles.cardTitle_days1}>
        <TouchableOpacity
          style={{
            width: 80,
            backgroundColor: this.state.activeColor,
          }}
          onPress={() => this.change()}>
          <Text style={styles.dietTitle}>{item.day}</Text>
        </TouchableOpacity>
      </View>
    );
  };
  setToggleCheckBox1 = (newValue) => {
    this.setState({
      toggleCheckBox1: newValue,
    });
    console.log(newValue);
    if (newValue) {
      this.setState({
        skipmeal: 'Everything as planed',
      });
    } else {
      this.setState({
        skipmeal: '',
      });
    }
  };
  setToggleCheckBox2 = (newValue) => {
    this.setState({
      toggleCheckBox2: newValue,
    });
    if (newValue) {
      this.setState({
        noteat: 'Deviated a bit',
      });
    } else {
      this.setState({
        noteat: '',
      });
    }
  };
  setToggleCheckBox3 = (newValue) => {
    this.setState({
      toggleCheckBox3: newValue,
    });
    if (newValue) {
      this.setState({
        skipmeal: 'Skipped the Meal',
      });
    } else {
      this.setState({
        skipmeal: '',
      });
    }
  };
  setToggleCheckBox4 = (newValue) => {
    this.setState({
      toggleCheckBox4: newValue,
    });
    if (newValue) {
      this.setState({
        noteat: 'Ate Something Else',
      });
    } else {
      this.setState({
        noteat: '',
      });
    }
  };
  render() {
    return (
      <Container>
        <Head navigation={this.props.navigation} title="" />
        {this.state.dataditeSu == '' ? null : (
          <ScrollView>
            <View
              style={{
                shadowOffset: {
                  width: 0,
                  height: 1,
                },
                //   shadowOpacity: 0.9,
                //   borderBottomColor: '#ddd',
                //   elevation: 3,
              }}>
              <Text style={styles.dietTitle}>My Diet Plan</Text>
              <Text style={styles.dietTitle}>
                {this.state.dataditeSu.created_at}
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.dietTitle}>day</Text>
              <View
                style={{
                  height: 20,
                  width: 20,
                  backgroundColor: '#09eb46',
                  alignSelf: 'center',
                  // marginTop: 10,
                  marginStart: 12,
                }}>
                <Text style={{color: '#ffff', alignSelf: 'center'}}>
                  {this.state.days}
                </Text>
              </View>
              <Text style={styles.dietTitle}>week</Text>
              <View
                style={{
                  height: 20,
                  width: 20,
                  backgroundColor: '#09eb46',
                  alignSelf: 'center',
                  // marginTop: 10,
                  marginStart: 12,
                }}>
                <Text style={{color: '#ffff', alignSelf: 'center'}}>
                  {this.state.dataditeSu.week}
                </Text>
              </View>
            </View>
            <View
              style={{
                marginStart: 10,
                marginEnd: 10,
                marginTop: 16,
                borderRadius: 10,
                // height:40,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginBottom: 20,
                  // padding:10,
                }}>
                <View
                  style={{
                    height: 20,
                  }}>
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#035048',
                    }}
                    // disabled={this.state.prev}
                  >
                    <Text style={styles.suggestedTitle}>Suggested Changes</Text>
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    // height: 34,
                  }}>
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#035048',
                      flexDirection: 'row',
                      height: 34,
                      // width:88,
                    }}
                    onPress={() => this.previous()}
                    disabled={this.state.prev}>
                    <MaterialIcons
                      name="keyboard-arrow-left"
                      size={20}
                      color="#ffff"
                      style={{
                        alignSelf: 'center',
                      }}></MaterialIcons>
                    <Text style={styles.suggestedTitleweek}>
                      week {this.state.resPerPage}{' '}
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#035048',
                      marginStart: 10,
                      flexDirection: 'row',
                      height: 34,
                      // width:88,
                    }}
                    onPress={() => this.next()}
                    disabled={this.state.nextVisble}>
                    <Text style={styles.suggestedTitleweek}>
                      {' '}
                      week {this.state.resPerPage + 1}
                    </Text>
                    <MaterialIcons
                      name="keyboard-arrow-right"
                      size={20}
                      style={{
                        alignSelf: 'center',
                      }}
                      color="#ffff"></MaterialIcons>
                  </TouchableOpacity>
                </View>
              </View>

              {/* <FlatList
                data={this.state.user_days_uniq_id}
                renderItem={this.renderDay}
                keyExtractor={(item, index) => index.toString()}
                horizontal={true}
              /> */}
              {this.state.user_days_uniq_id.length != 0 ? (
                <Tabs
                  tabBarUnderlineStyle={{backgroundColor: '#11ba11'}}
                  tabContainerStyle={{
                    elevation: 0,
                    height: 40,
                    borderRadius: 10,
                  }}
                  onChangeTab={({i}) =>
                    this.setState({
                      days: i + 1,
                    })
                  }>
                  {this.state.user_days_uniq_id.map((student, index) => (
                    <Tab
                      heading={student.day}
                      tabStyle={styles.tabs_diets}
                      activeTabStyle={styles.activetabs_diets}
                      textStyle={styles.tabs_text_diets}
                      activeTextStyle={styles.activetabs_text_diets}>
                      <View style={styles.cardTitle_days1}>
                        {/* <this.renderCardMo /> */}
                        <Grid style={{flex: 1, flexDirection: 'column'}}>
                          <Col
                            style={{
                              flex: 1,
                            }}>
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
                                        EARLY MORNING
                                      </Text>
                                      <Text style={styles.cardTitle_desc}>
                                        {student['Early Mornings']}
                                      </Text>
                                    </View>
                                    <View
                                      style={{
                                        flexDirection: 'column',
                                        justifyContent: 'space-around',
                                      }}>
                                      <TouchableOpacity
                                        style={styles.cardTitle_like}
                                        onPress={() => this.like(student)}>
                                        <Image
                                          style={styles.card_likeimg}
                                          source={require('../../src/assets/images/like.png')}
                                        />
                                      </TouchableOpacity>
                                      <TouchableOpacity
                                        style={styles.cardTitle_dislike}
                                        onPress={() => this.dislike(student)}>
                                        <Image
                                          style={styles.card_dislikeimg}
                                          source={require('../../src/assets/images/dislike.png')}
                                        />
                                      </TouchableOpacity>
                                    </View>
                                  </View>
                                </Body>
                              </CardItem>
                            </Card>
                          </Col>

                          <Card style={styles.card_each}>
                            <CardItem>
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
                                      Breakfast
                                    </Text>
                                    <Text style={styles.cardTitle_desc}>
                                      {student['Breakfast']}
                                    </Text>
                                  </View>
                                  <View
                                    style={{
                                      flexDirection: 'column',
                                      justifyContent: 'space-around',
                                    }}>
                                    <TouchableOpacity
                                      style={styles.cardTitle_like}
                                      onPress={() => this.like(student)}>
                                      <Image
                                        style={styles.card_likeimg}
                                        source={require('../../src/assets/images/like.png')}
                                      />
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                      style={styles.cardTitle_dislike}
                                      onPress={() => this.dislike(student)}>
                                      <Image
                                        style={styles.card_dislikeimg}
                                        source={require('../../src/assets/images/dislike.png')}
                                      />
                                    </TouchableOpacity>
                                  </View>
                                </View>
                              </Body>
                            </CardItem>
                          </Card>

                          <Card style={styles.card_each}>
                            <CardItem>
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
                                      Mid Morning
                                    </Text>
                                    <Text style={styles.cardTitle_desc}>
                                      {student['Mid Morning']}
                                    </Text>
                                  </View>
                                  <View
                                    style={{
                                      flexDirection: 'column',
                                      justifyContent: 'space-around',
                                    }}>
                                    <TouchableOpacity
                                      style={styles.cardTitle_like}
                                      onPress={() => this.like(student)}>
                                      <Image
                                        style={styles.card_likeimg}
                                        source={require('../../src/assets/images/like.png')}
                                      />
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                      style={styles.cardTitle_dislike}
                                      onPress={() => this.dislike(student)}>
                                      <Image
                                        style={styles.card_dislikeimg}
                                        source={require('../../src/assets/images/dislike.png')}
                                      />
                                    </TouchableOpacity>
                                  </View>
                                </View>
                              </Body>
                            </CardItem>
                          </Card>

                          <Card style={styles.card_each}>
                            <CardItem>
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
                                      Lunch
                                    </Text>
                                    <Text style={styles.cardTitle_desc}>
                                      {student['Lunch']}
                                    </Text>
                                  </View>
                                  <View
                                    style={{
                                      flexDirection: 'column',
                                      justifyContent: 'space-around',
                                    }}>
                                    <TouchableOpacity
                                      style={styles.cardTitle_like}
                                      onPress={() => this.like(student)}>
                                      <Image
                                        style={styles.card_likeimg}
                                        source={require('../../src/assets/images/like.png')}
                                      />
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                      style={styles.cardTitle_dislike}
                                      onPress={() => this.dislike(student)}>
                                      <Image
                                        style={styles.card_dislikeimg}
                                        source={require('../../src/assets/images/dislike.png')}
                                      />
                                    </TouchableOpacity>
                                  </View>
                                </View>
                              </Body>
                            </CardItem>
                          </Card>

                          <Card style={styles.card_each}>
                            <CardItem>
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
                                      Afternoon Snack
                                    </Text>
                                    <Text style={styles.cardTitle_desc}>
                                      {student['Afternoon Snack']}
                                    </Text>
                                  </View>
                                  <View
                                    style={{
                                      flexDirection: 'column',
                                      justifyContent: 'space-around',
                                    }}>
                                    <TouchableOpacity
                                      style={styles.cardTitle_like}
                                      onPress={() => this.like(student)}>
                                      <Image
                                        style={styles.card_likeimg}
                                        source={require('../../src/assets/images/like.png')}
                                      />
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                      style={styles.cardTitle_dislike}
                                      onPress={() => this.dislike(student)}>
                                      <Image
                                        style={styles.card_dislikeimg}
                                        source={require('../../src/assets/images/dislike.png')}
                                      />
                                    </TouchableOpacity>
                                  </View>
                                </View>
                              </Body>
                            </CardItem>
                          </Card>

                          <Card style={styles.card_each}>
                            <CardItem>
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
                                      Evening Snack
                                    </Text>
                                    <Text style={styles.cardTitle_desc}>
                                      {student['Evening Snack']}
                                    </Text>
                                  </View>
                                  <View
                                    style={{
                                      flexDirection: 'column',
                                      justifyContent: 'space-around',
                                    }}>
                                    <TouchableOpacity
                                      style={styles.cardTitle_like}
                                      onPress={() => this.like(student)}>
                                      <Image
                                        style={styles.card_likeimg}
                                        source={require('../../src/assets/images/like.png')}
                                      />
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                      style={styles.cardTitle_dislike}
                                      onPress={() => this.dislike(student)}>
                                      <Image
                                        style={styles.card_dislikeimg}
                                        source={require('../../src/assets/images/dislike.png')}
                                      />
                                    </TouchableOpacity>
                                  </View>
                                </View>
                              </Body>
                            </CardItem>
                          </Card>

                          <Card style={styles.card_each}>
                            <CardItem>
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
                                      Dinner
                                    </Text>
                                    <Text style={styles.cardTitle_desc}>
                                      {student['Dinner']}
                                    </Text>
                                  </View>
                                  <View
                                    style={{
                                      flexDirection: 'column',
                                      justifyContent: 'space-around',
                                    }}>
                                    <TouchableOpacity
                                      style={styles.cardTitle_like}
                                      onPress={() => this.like(student)}>
                                      <Image
                                        style={styles.card_likeimg}
                                        source={require('../../src/assets/images/like.png')}
                                      />
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                      style={styles.cardTitle_dislike}
                                      onPress={() => this.dislike(student)}>
                                      <Image
                                        style={styles.card_dislikeimg}
                                        source={require('../../src/assets/images/dislike.png')}
                                      />
                                    </TouchableOpacity>
                                  </View>
                                </View>
                              </Body>
                            </CardItem>
                          </Card>

                          <Card style={styles.card_each}>
                            <CardItem>
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
                                      Post Dinner
                                    </Text>
                                    <Text style={styles.cardTitle_desc}>
                                      {student['Post Dinner']}
                                    </Text>
                                  </View>
                                  <View
                                    style={{
                                      flexDirection: 'column',
                                      justifyContent: 'space-around',
                                    }}>
                                    <TouchableOpacity
                                      style={styles.cardTitle_like}
                                      onPress={() => this.like(student)}>
                                      <Image
                                        style={styles.card_likeimg}
                                        source={require('../../src/assets/images/like.png')}
                                      />
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                      style={styles.cardTitle_dislike}
                                      onPress={() => this.dislike(student)}>
                                      <Image
                                        style={styles.card_dislikeimg}
                                        source={require('../../src/assets/images/dislike.png')}
                                      />
                                    </TouchableOpacity>
                                  </View>
                                </View>
                              </Body>
                            </CardItem>
                          </Card>
                          {/* </Col> */}
                          {/* </Grid> */}
                        </Grid>
                      </View>
                    </Tab>
                  ))}
                </Tabs>
              ) : null}
              {/* <Tab
                heading="TU"
                tabStyle={styles.tabs_diets}
                activeTabStyle={styles.activetabs_diets}
                textStyle={styles.tabs_text_diets}
                activeTextStyle={styles.activetabs_text_diets}>
                <View style={styles.cardTitle_days1}>
                  <this.renderCardMo />
                </View>
              </Tab> */}
              {/* <Tab
                heading="WE"
                tabStyle={styles.tabs_diets}
                activeTabStyle={styles.activetabs_diets}
                textStyle={styles.tabs_text_diets}
                activeTextStyle={styles.activetabs_text_diets}>
                <View style={styles.cardTitle_days1}>
                  <this.renderCardMo />
                </View>
              </Tab>
              <Tab
                heading="TH"
                tabStyle={styles.tabs_diets}
                activeTabStyle={styles.activetabs_diets}
                textStyle={styles.tabs_text_diets}
                activeTextStyle={styles.activetabs_text_diets}>
                <View style={styles.cardTitle_days1}>
                  <this.renderCardMo />
                </View>
              </Tab>
              <Tab
                heading="FR"
                tabStyle={styles.tabs_diets}
                activeTabStyle={styles.activetabs_diets}
                textStyle={styles.tabs_text_diets}
                activeTextStyle={styles.activetabs_text_diets}>
                <View style={styles.cardTitle_days1}>
                  <this.renderCardMo />
                </View>
              </Tab>
              <Tab
                heading="SA"
                tabStyle={styles.tabs_diets}
                activeTabStyle={styles.activetabs_diets}
                textStyle={styles.tabs_text_diets}
                activeTextStyle={styles.activetabs_text_diets}>
                <View style={styles.cardTitle_days1}>
                  <this.renderCardMo />
                </View>
              </Tab>
              <Tab
                heading="SU"
                tabStyle={styles.tabs_diets}
                activeTabStyle={styles.activetabs_diets}
                textStyle={styles.tabs_text_diets}
                activeTextStyle={styles.activetabs_text_diets}>
                <View style={styles.cardTitle_days1}>
                  <this.renderCardMo />
                </View>
              </Tab> */}
              {/* </Tabs> */}

              <Modal
                isVisible={this.state.islike}
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
                    islike: false,
                    countlike: 0,
                    toggleCheckBox1: false,
                    toggleCheckBox2: false,
                  })
                }>
                <View
                  style={{
                    backgroundColor: '#ffff',
                    // height: 400,
                    borderWidth: 1,
                    borderRadius: 20,
                  }}>
                  <View style={{alignSelf: 'center'}}>
                    <View
                      style={{
                        justifyContent: 'space-around',
                        flexDirection: 'row',
                      }}>
                      <Image
                        style={styles.card_likeimgad}
                        source={require('../../src/assets/images/like.png')}
                      />
                      <Text style={styles.stepsLog}>Diet Followed</Text>
                    </View>
                    <Text style={styles.stepsdeviation}>Any deviation?</Text>
                  </View>
                  <View
                    style={{
                      justifyContent: 'flex-start',
                      flexDirection: 'row',
                      marginTop: 10,
                    }}>
                    <CheckBox
                      disabled={false}
                      value={this.state.toggleCheckBox1}
                      onValueChange={(newValue) =>
                        this.setToggleCheckBox1(newValue)
                      }
                    />
                    <Text
                      // onChangeText={() => this.setText(text)}
                      style={{
                        marginLeft: 10,
                        marginRight: 10,
                        alignSelf: 'center',
                        color: '#035048',
                        fontWeight: '500',
                        fontSize: 18,
                      }}>
                      Everything as planed{' '}
                    </Text>
                  </View>
                  <View
                    style={{
                      justifyContent: 'flex-start',
                      flexDirection: 'row',
                    }}>
                    <CheckBox
                      disabled={false}
                      value={this.state.toggleCheckBox2}
                      onValueChange={(newValue) =>
                        this.setToggleCheckBox2(newValue)
                      }
                    />
                    <Text
                      style={{
                        // marginLeft: 10,
                        marginRight: 10,
                        // marginTop: 10,
                        // height: 190,
                        alignSelf: 'center',
                        color: '#035048',
                        fontWeight: '500',
                        fontSize: 18,
                      }}>
                      {'  '}Deviated a bit
                    </Text>
                  </View>
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#069906',
                      width: 120,
                      alignSelf: 'center',
                      borderRadius: 10,
                      marginTop: 10,
                      marginBottom: 10,
                    }}
                    onPress={() => this.likeSubmit()}>
                    <Text
                      style={{margin: 10, alignSelf: 'center', color: '#ffff'}}>
                      Submit
                    </Text>
                  </TouchableOpacity>
                </View>
              </Modal>

              <Modal
                isVisible={this.state.isdislike}
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
                    isdislike: false,
                    countdislike: 0,
                    toggleCheckBox3: false,
                    toggleCheckBox4: false,
                  })
                }>
                <View
                  style={{
                    backgroundColor: '#ffff',
                    // height: 400,
                    borderWidth: 1,
                    borderRadius: 20,
                  }}>
                  <View style={{alignSelf: 'center'}}>
                    <View
                      style={{alignSelf: 'space-around', flexDirection: 'row'}}>
                      <Image
                        style={styles.card_likeimgad}
                        source={require('../../src/assets/images/dislike.png')}
                      />
                      <Text style={styles.stepsLogdislike}>Diet Missed</Text>
                    </View>
                    <Text style={styles.stepsdeviation}>What Went Wrong ?</Text>
                  </View>
                  <View
                    style={{
                      justifyContent: 'flex-start',
                      flexDirection: 'row',
                      marginTop: 10,
                    }}>
                    <CheckBox
                      disabled={false}
                      value={this.state.toggleCheckBox3}
                      onValueChange={(newValue) =>
                        this.setToggleCheckBox3(newValue)
                      }
                    />
                    <Text
                      style={{
                        marginLeft: 10,
                        marginRight: 10,
                        alignSelf: 'center',
                        color: '#035048',
                        fontWeight: '500',
                        fontSize: 18,
                      }}>
                      Skipped the Meal
                    </Text>
                  </View>
                  <View
                    style={{
                      justifyContent: 'flex-start',
                      flexDirection: 'row',
                    }}>
                    <CheckBox
                      disabled={false}
                      value={this.state.toggleCheckBox4}
                      onValueChange={(newValue) =>
                        this.setToggleCheckBox4(newValue)
                      }
                    />
                    <Text
                      style={{
                        // marginLeft: 10,
                        marginRight: 10,
                        // marginTop: 10,
                        // height: 190,
                        alignSelf: 'center',
                        color: '#035048',
                        fontWeight: '500',
                        fontSize: 18,
                      }}>
                      {'  '}Ate Something Else
                    </Text>
                  </View>
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#069906',
                      width: 120,
                      alignSelf: 'center',
                      borderRadius: 10,
                      marginTop: 10,
                      marginBottom: 10,
                    }}
                    onPress={() => this.dislikeSubmit()}>
                    <Text
                      style={{margin: 10, alignSelf: 'center', color: '#ffff'}}>
                      Submit
                    </Text>
                  </TouchableOpacity>
                </View>
              </Modal>
            </View>
          </ScrollView>
        )}
      </Container>
    );
  }
}

export default DiatesPlan;
