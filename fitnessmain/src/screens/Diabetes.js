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

class Diabetes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progressStatus: 0,
    };
  }
  anim = new Animated.Value(0);

  componentDidMount() {
    this.onAnimate();
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

  render() {
    return (
      <Container style={styles.background_general}>
        <Head navigation={this.props.navigation} title="" />
        <ScrollView>
          <Text style={styles.profileTitle}>MY PROGRAMS > DETAILS</Text>
          <Text style={styles.diabetesTitle}>DIABETES MANAGEMENT</Text>
          <View style={{padding: 0, paddingTop: 0}}>
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
                  //   height: 270,
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
                      <View style={{flexDirection: 'column', marginTop: 10}}>
                        <View
                          style={{
                            flexDirection: 'row',
                          }}>
                          <Text style={styles.cardTitle_health}>
                            Start Date :
                          </Text>
                          <Text style={styles.cardTitle_date}>24-Dec-2020</Text>
                        </View>

                        <View
                          style={{
                            flexDirection: 'row',
                          }}>
                          <Text style={styles.cardTitle_health}>
                            Start Date :
                          </Text>
                          <Text style={styles.cardTitle_date}>24-Dec-2020</Text>
                        </View>

                        <View
                          style={{
                            flexDirection: 'row',
                          }}>
                          <Text style={styles.cardTitle_health}>
                            End Date :
                          </Text>
                          <Text style={styles.cardTitle_date}>23-Mar-2021</Text>
                        </View>

                        <View
                          style={{
                            flexDirection: 'row',
                          }}>
                          <Text style={styles.cardTitle_health}>
                            Assigned Dietician :
                          </Text>
                          <Text style={styles.cardTitle_date}>
                            Shampa Banerjee
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
                        }}></View>

                      {/* </View> */}
                    </Body>
                  </CardItem>
                </Card>
              </Row>

              {/* </Row> */}
            </Grid>
            <View>
              <Text style={styles.profileTitle}>MY PROGRESS</Text>
            </View>
            <View>
              <Text style={styles.revenueTitle}>New Revenue</Text>
            </View>
            <Grid>
              <Text style={styles.profileTitle}>MY DIETICIAN</Text>
              <Row
                style={{
                  //   height: 220,
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
                        flexDirection: 'column',
                        paddingRight: 6,
                        paddingTop: 10,
                      }}>
                      <View
                        style={{
                          flexDirection: 'row',
                          paddingRight: 6,
                          paddingTop: 10,
                        }}>
                        <Image
                          // size={40}
                          style={{
                            height: 90,
                            width: 90,
                            borderRadius: 50,
                          }}
                          source={require('../../src/assets/images/diation.jpg')}
                        />
                        <View
                          style={{
                            flexDirection: 'column',
                            paddingRight: 6,
                            // paddingTop: 10,
                            marginBottom: 20,
                            // backgroundColor: '#11ba11',
                            justifyContent: 'space-around',
                          }}>
                          <Text style={styles.weightTitle}>
                            Sr. Dt. Shampa Banerjee
                          </Text>
                          <Text style={styles.diationTitle}>
                            Senior dietitian and Diabetes educator Msc.
                            Dietetics and Food service management
                          </Text>
                        </View>
                      </View>

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
                        source={require('../../src/assets/images/message.png')}
                      />
                    </Body>
                  </CardItem>
                </Card>
              </Row>
            </Grid>
            <View
              style={{
                flexDirection: 'column',
                paddingRight: 6,
                // paddingTop: 10,
                marginBottom: 20,
                // backgroundColor: '#11ba11',
                // justifyContent: 'space-around',
                marginStart: 20,
              }}>
              <Text style={styles.profileTitle}>NOTES & UPDATES</Text>
              <Text style={styles.cardTitle_healthnote}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginStart: 40,
                marginBottom: 20,
              }}>
              <Image
                style={{
                  height: 40,
                  width: 40,
                }}
                source={require('../../src/assets/images/icon.png')}
              />
              <Text style={styles.profileTitle}>Raise a Concern</Text>
            </View>
          </View>
        </ScrollView>
      </Container>
    );
  }
}

export default Diabetes;
