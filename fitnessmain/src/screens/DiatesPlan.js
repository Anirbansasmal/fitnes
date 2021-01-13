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
    };
  }
  // monday = () => {};
  // like = () => {};
  // dislike = () => {};
  componentDidMount() {
    // this.setState({
    //   dataditeSu:this.props.route.params.item,
    // })
    // this.ditelist();
    console.log('dite weeks', this.state.dataditeSu.data_sub);
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
  like = () => {
    console.log(this.state.countlike);
    if (this.state.countlike === 0) {
      this.setState({countlike: 0, islike: true});
    } else {
      this.setState({countlike: 1, islike: false});
    }
  };
  dislike = () => {
    if (this.state.countdislike === 0) {
      this.setState({countdislike: 1, isdislike: true});
    } else {
      this.setState({countdislike: 0, isdislike: false});
    }
  };
  renderCardMo = () => {
    // console.log(item)
    return (
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
                      {this.state.dataditeSu['Early Mornings']}
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
                      style={styles.cardTitle_like}
                      onPress={() => this.dislike()}>
                      <Image
                        style={styles.card_likeimg}
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
                      {this.state.dataditeSu['Breakfast']}
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
                      style={styles.cardTitle_like}
                      onPress={() => this.dislike()}>
                      <Image
                        style={styles.card_likeimg}
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
                      {this.state.dataditeSu['Mid Morning']}
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
                      style={styles.cardTitle_like}
                      onPress={() => this.dislike()}>
                      <Image
                        style={styles.card_likeimg}
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
                      {this.state.dataditeSu['Lunch']}
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
                      style={styles.cardTitle_like}
                      onPress={() => this.dislike()}>
                      <Image
                        style={styles.card_likeimg}
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
                      {this.state.dataditeSu['Afternoon Snack']}
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
                      style={styles.cardTitle_like}
                      onPress={() => this.dislike()}>
                      <Image
                        style={styles.card_likeimg}
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
                      {this.state.dataditeSu['Evening Snack']}
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
                      style={styles.cardTitle_like}
                      onPress={() => this.dislike()}>
                      <Image
                        style={styles.card_likeimg}
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
                      {this.state.dataditeSu['Dinner']}
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
                      style={styles.cardTitle_like}
                      onPress={() => this.dislike()}>
                      <Image
                        style={styles.card_likeimg}
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
                      {this.state.dataditeSu['Post Dinner']}
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
                      style={styles.cardTitle_like}
                      onPress={() => this.dislike()}>
                      <Image
                        style={styles.card_likeimg}
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
    );
  };
  changetab = (i) => {
    console.log('currentTab position', i);
    this.setState({currentTab: i}, this.ditelist);
  };
  likeSubmit = () => {
    this.setState({countlike: 0, islike: false});
  };
  dislikeSubmit = () => {
    this.setState({countdislike: 0, isdislike: false});
  };
  render() {
    return (
      <Container>
        <Head navigation={this.props.navigation} title="" />
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
            <Text style={styles.dietTitle}>DEC 23 - WED - 02:50 pm</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.dietTitle}>day</Text>
            <Text style={styles.dietTitle}>4</Text>
            <Text style={styles.dietTitle}>week</Text>
            <Text style={styles.dietTitle}>3</Text>
          </View>
          <View
            style={{
              marginStart: 10,
              marginEnd: 10,
              marginTop: 16,
              borderRadius: 10,
              // height:40,
            }}>
            <Tabs
              tabBarUnderlineStyle={{backgroundColor: '#11ba11'}}
              tabContainerStyle={{elevation: 0, height: 40, borderRadius: 10,}}
              // onChangeTab={({i}) => this.changetab(i)}
              renderTabBar={() => <ScrollableTab />}>
              {this.state.dataditeSu.data_sub.map((student, index) => (
                <Tab
                  heading={student.day}
                  tabStyle={styles.tabs_diets}
                  activeTabStyle={styles.activetabs_diets}
                  textStyle={styles.tabs_text_diets}
                  activeTextStyle={styles.activetabs_text_diets}>
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
                                    onPress={() => this.like()}>
                                    <Image
                                      style={styles.card_likeimg}
                                      source={require('../../src/assets/images/like.png')}
                                    />
                                  </TouchableOpacity>
                                  <TouchableOpacity
                                    style={styles.cardTitle_like}
                                    onPress={() => this.dislike()}>
                                    <Image
                                      style={styles.card_likeimg}
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
                                    onPress={() => this.like()}>
                                    <Image
                                      style={styles.card_likeimg}
                                      source={require('../../src/assets/images/like.png')}
                                    />
                                  </TouchableOpacity>
                                  <TouchableOpacity
                                    style={styles.cardTitle_like}
                                    onPress={() => this.dislike()}>
                                    <Image
                                      style={styles.card_likeimg}
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
                                    onPress={() => this.like()}>
                                    <Image
                                      style={styles.card_likeimg}
                                      source={require('../../src/assets/images/like.png')}
                                    />
                                  </TouchableOpacity>
                                  <TouchableOpacity
                                    style={styles.cardTitle_like}
                                    onPress={() => this.dislike()}>
                                    <Image
                                      style={styles.card_likeimg}
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
                                    onPress={() => this.like()}>
                                    <Image
                                      style={styles.card_likeimg}
                                      source={require('../../src/assets/images/like.png')}
                                    />
                                  </TouchableOpacity>
                                  <TouchableOpacity
                                    style={styles.cardTitle_like}
                                    onPress={() => this.dislike()}>
                                    <Image
                                      style={styles.card_likeimg}
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
                                    onPress={() => this.like()}>
                                    <Image
                                      style={styles.card_likeimg}
                                      source={require('../../src/assets/images/like.png')}
                                    />
                                  </TouchableOpacity>
                                  <TouchableOpacity
                                    style={styles.cardTitle_like}
                                    onPress={() => this.dislike()}>
                                    <Image
                                      style={styles.card_likeimg}
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
                                    onPress={() => this.like()}>
                                    <Image
                                      style={styles.card_likeimg}
                                      source={require('../../src/assets/images/like.png')}
                                    />
                                  </TouchableOpacity>
                                  <TouchableOpacity
                                    style={styles.cardTitle_like}
                                    onPress={() => this.dislike()}>
                                    <Image
                                      style={styles.card_likeimg}
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
                                    onPress={() => this.like()}>
                                    <Image
                                      style={styles.card_likeimg}
                                      source={require('../../src/assets/images/like.png')}
                                    />
                                  </TouchableOpacity>
                                  <TouchableOpacity
                                    style={styles.cardTitle_like}
                                    onPress={() => this.dislike()}>
                                    <Image
                                      style={styles.card_likeimg}
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
                                    onPress={() => this.like()}>
                                    <Image
                                      style={styles.card_likeimg}
                                      source={require('../../src/assets/images/like.png')}
                                    />
                                  </TouchableOpacity>
                                  <TouchableOpacity
                                    style={styles.cardTitle_like}
                                    onPress={() => this.dislike()}>
                                    <Image
                                      style={styles.card_likeimg}
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
                </Tab>
              ))}
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
            </Tabs>

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
                      style={styles.card_likeimg}
                      source={require('../../src/assets/images/like.png')}
                    />
                    <Text style={styles.stepsLog}>Diet Followed</Text>
                  </View>
                  <Text style={styles.stepsdeviation}>Any deviation?</Text>
                </View>
                <View
                  style={{
                    justifyContent: 'space-around',
                    flexDirection: 'row',
                    marginTop: 10,
                  }}>
                  <Text
                    // onChangeText={() => this.setText(text)}
                    style={{
                      marginLeft: 10,
                      marginRight: 10,
                    }}>
                    Skipped the Meal{' '}
                  </Text>
                </View>
                <View
                  style={{
                    justifyContent: 'space-around',
                    flexDirection: 'row',
                  }}>
                  <Text
                    style={{
                      marginLeft: 10,
                      marginRight: 10,
                      // marginTop: 10,
                      // height: 190,
                    }}>
                    Ate Something Else{' '}
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
                      style={styles.card_likeimg}
                      source={require('../../src/assets/images/dislike.png')}
                    />
                    <Text style={styles.stepsLog}>Diet Missed</Text>
                  </View>
                  <Text style={styles.stepsdeviation}>What Went Wrong ?</Text>
                </View>
                <View
                  style={{
                    justifyContent: 'space-around',
                    flexDirection: 'row',
                    marginTop: 10,
                  }}>
                  <Text
                    style={{
                      marginLeft: 10,
                      marginRight: 10,
                    }}>
                    Skipped the Meal
                  </Text>
                </View>
                <View
                  style={{
                    justifyContent: 'space-around',
                    flexDirection: 'row',
                  }}>
                  <Text
                    style={{
                      marginLeft: 10,
                      marginRight: 10,
                      // marginTop: 10,
                      // height: 190,
                    }}>
                    Ate Something Else
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
      </Container>
    );
  }
}

export default DiatesPlan;
