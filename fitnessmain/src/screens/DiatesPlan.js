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
class DiatesPlan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectColor: '#10c923',
      unselectColor: '#edf7ee',
    };
  }
  monday = () => {};

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
            }}>
            <Tabs
              tabBarUnderlineStyle={{backgroundColor: '#11ba11'}}
              tabContainerStyle={{elevation: 0}}>
              <Tab
                heading="MO"
                tabStyle={styles.tabs_diets}
                activeTabStyle={styles.activetabs_diets}
                textStyle={styles.tabs_text_diets}
                activeTextStyle={styles.activetabs_text_diets}>
                <View
                  style={{
                    padding: 10,
                    paddingTop: 10,
                    // backgroundColor: '#f39c12',
                    marginTop: 20,
                  }}>
                  <Grid style={{flex: 1}}>
                    <Col
                      style={{
                        // height: 170,
                        // width: 180,
                        flex: 1,
                        // paddingRight: 10,
                        // paddingLeft: 10,
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
                              //   justifyContent: 'center',
                              // alignItems: 'center',
                            }}>
                            <View
                              style={{
                                flexDirection: 'row',
                                // marginTop: 0,
                                justifyContent: 'space-between',
                                // backgroundColor: '#f39c12',
                                width: '100%',
                              }}>
                              <View
                                style={{
                                  flexDirection: 'column',
                                  //   backgroundColor: '#f39c12',
                                  //   alignSelf: 'flex-start',
                                  width: 180,
                                }}>
                                <Text style={styles.cardTitle_days}>
                                  EARLY MORNING
                                </Text>
                                <Text style={styles.cardTitle_desc}>
                                  Steamed sprouts salad (1/2bowl) + Brown rice
                                  (half bowl) + Vegetable shambar dal (1bowl) +
                                  Cauliflower vegetable (1bowl) +Curd (100g)
                                </Text>
                              </View>
                              <View
                                style={{
                                  flexDirection: 'column',
                                  justifyContent: 'space-around',
                                }}>
                                <View style={styles.cardTitle_like}>
                                  <Image
                                    style={{
                                      height: 40,
                                      width: 40,
                                      marginEnd: 20,
                                      alignSelf: 'center',
                                      marginStart: 18,
                                    }}
                                    source={require('../../src/assets/images/like.png')}
                                  />
                                </View>
                                <View style={styles.cardTitle_like}>
                                  <Image
                                    style={{
                                      height: 40,
                                      width: 40,
                                      marginEnd: 20,
                                      alignSelf: 'center',
                                      marginStart: 18,
                                      marginTop: 6,
                                    }}
                                    source={require('../../src/assets/images/dislike.png')}
                                  />
                                </View>
                              </View>
                            </View>
                          </Body>
                        </CardItem>
                      </Card>

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
                              //   justifyContent: 'center',
                              // alignItems: 'center',
                            }}>
                            <View
                              style={{
                                flexDirection: 'row',
                                // marginTop: 0,
                                justifyContent: 'space-between',
                                // backgroundColor: '#f39c12',
                                width: '100%',
                              }}>
                              <View
                                style={{
                                  flexDirection: 'column',
                                  //   backgroundColor: '#f39c12',
                                  //   alignSelf: 'flex-start',
                                  width: 180,
                                }}>
                                <Text style={styles.cardTitle_days}>
                                  breakfast
                                </Text>
                                <Text style={styles.cardTitle_desc}>
                                  Steamed sprouts salad (1/2bowl) + Brown rice
                                  (half bowl) + Vegetable shambar dal (1bowl) +
                                  Cauliflower vegetable (1bowl) +Curd (100g)
                                </Text>
                              </View>
                              <View
                                style={{
                                  flexDirection: 'column',
                                  justifyContent: 'space-around',
                                }}>
                                <View style={styles.cardTitle_like}>
                                  <Image
                                    style={{
                                      height: 40,
                                      width: 40,
                                      marginEnd: 20,
                                      alignSelf: 'center',
                                      marginStart: 18,
                                    }}
                                    source={require('../../src/assets/images/like.png')}
                                  />
                                </View>
                                <View style={styles.cardTitle_like}>
                                  <Image
                                    style={{
                                      height: 40,
                                      width: 40,
                                      marginEnd: 20,
                                      alignSelf: 'center',
                                      marginStart: 18,
                                      marginTop: 6,
                                    }}
                                    source={require('../../src/assets/images/dislike.png')}
                                  />
                                </View>
                              </View>
                            </View>
                          </Body>
                        </CardItem>
                      </Card>

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
                              //   justifyContent: 'center',
                              // alignItems: 'center',
                            }}>
                            <View
                              style={{
                                flexDirection: 'row',
                                // marginTop: 0,
                                justifyContent: 'space-between',
                                // backgroundColor: '#f39c12',
                                width: '100%',
                              }}>
                              <View
                                style={{
                                  flexDirection: 'column',
                                  //   backgroundColor: '#f39c12',
                                  //   alignSelf: 'flex-start',
                                  width: 180,
                                }}>
                                <Text style={styles.cardTitle_days}>
                                  Mid morning
                                </Text>
                                <Text style={styles.cardTitle_desc}>
                                  Steamed sprouts salad (1/2bowl) + Brown rice
                                  (half bowl) + Vegetable shambar dal (1bowl) +
                                  Cauliflower vegetable (1bowl) +Curd (100g)
                                </Text>
                              </View>
                              <View
                                style={{
                                  flexDirection: 'column',
                                  justifyContent: 'space-around',
                                }}>
                                <View style={styles.cardTitle_like}>
                                  <Image
                                    style={{
                                      height: 40,
                                      width: 40,
                                      marginEnd: 20,
                                      alignSelf: 'center',
                                      marginStart: 18,
                                    }}
                                    source={require('../../src/assets/images/like.png')}
                                  />
                                </View>
                                <View style={styles.cardTitle_like}>
                                  <Image
                                    style={{
                                      height: 40,
                                      width: 40,
                                      marginEnd: 20,
                                      alignSelf: 'center',
                                      marginStart: 18,
                                      marginTop: 6,
                                    }}
                                    source={require('../../src/assets/images/dislike.png')}
                                  />
                                </View>
                              </View>
                            </View>
                          </Body>
                        </CardItem>
                      </Card>

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
                              //   justifyContent: 'center',
                              // alignItems: 'center',
                            }}>
                            <View
                              style={{
                                flexDirection: 'row',
                                // marginTop: 0,
                                justifyContent: 'space-between',
                                // backgroundColor: '#f39c12',
                                width: '100%',
                              }}>
                              <View
                                style={{
                                  flexDirection: 'column',
                                  //   backgroundColor: '#f39c12',
                                  //   alignSelf: 'flex-start',
                                  width: 180,
                                }}>
                                <Text style={styles.cardTitle_days}>lunch</Text>
                                <Text style={styles.cardTitle_desc}>
                                  Steamed sprouts salad (1/2bowl) + Brown rice
                                  (half bowl) + Vegetable shambar dal (1bowl) +
                                  Cauliflower vegetable (1bowl) +Curd (100g)
                                </Text>
                              </View>
                              <View
                                style={{
                                  flexDirection: 'column',
                                  justifyContent: 'space-around',
                                }}>
                                <View style={styles.cardTitle_like}>
                                  <Image
                                    style={{
                                      height: 40,
                                      width: 40,
                                      marginEnd: 20,
                                      alignSelf: 'center',
                                      marginStart: 18,
                                    }}
                                    source={require('../../src/assets/images/like.png')}
                                  />
                                </View>
                                <View style={styles.cardTitle_like}>
                                  <Image
                                    style={{
                                      height: 40,
                                      width: 40,
                                      marginEnd: 20,
                                      alignSelf: 'center',
                                      marginStart: 18,
                                      marginTop: 6,
                                    }}
                                    source={require('../../src/assets/images/dislike.png')}
                                  />
                                </View>
                              </View>
                            </View>
                          </Body>
                        </CardItem>
                      </Card>
                    </Col>
                  </Grid>
                </View>
              </Tab>
              <Tab
                heading="TU"
                tabStyle={styles.tabs_diets}
                activeTabStyle={styles.activetabs_diets}
                textStyle={styles.tabs_text_diets}
                activeTextStyle={styles.activetabs_text_diets}></Tab>
              <Tab
                heading="WE"
                tabStyle={styles.tabs_diets}
                activeTabStyle={styles.activetabs_diets}
                textStyle={styles.tabs_text_diets}
                activeTextStyle={styles.activetabs_text_diets}></Tab>
              <Tab
                heading="TH"
                tabStyle={styles.tabs_diets}
                activeTabStyle={styles.activetabs_diets}
                textStyle={styles.tabs_text_diets}
                activeTextStyle={styles.activetabs_text_diets}></Tab>
              <Tab
                heading="FR"
                tabStyle={styles.tabs_diets}
                activeTabStyle={styles.activetabs_diets}
                textStyle={styles.tabs_text_diets}
                activeTextStyle={styles.activetabs_text_diets}></Tab>
              <Tab
                heading="SA"
                tabStyle={styles.tabs_diets}
                activeTabStyle={styles.activetabs_diets}
                textStyle={styles.tabs_text_diets}
                activeTextStyle={styles.activetabs_text_diets}></Tab>
            </Tabs>
          </View>
        </ScrollView>
      </Container>
    );
  }
}

export default DiatesPlan;
