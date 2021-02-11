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
class Profile_custo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container style={styles.background_general}>
        <Head navigation={this.props.navigation} title="" />
        <ScrollView>
          <Text style={styles.profileTitle}>ME > MY PROFILE</Text>
          <View style={{padding: 0, paddingTop: 0}}>
            {/* <Text> Profile_custo </Text> */}
            <Grid
              style={{
                flex: 2,
                marginTop: 20,
                justifyContent: 'center',
                elevation: 6,
              }}>
              <Row
                style={{
                  justifyContent: 'space-around',
                  padding: 10,
                }}>
                <Card
                  style={{
                    borderRadius: 15,
                    overflow: 'hidden',
                    elevation: 6,
                    height: 140,
                    width: 170,
                  }}>
                  <CardItem
                    button={true}
                    onPress={() => {
                      this.props.navigation.navigate('Profile_details');
                    }}>
                    <Body
                      style={{
                        justifyContent: 'center',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Image
                        // size={40}
                        style={{
                          width: 70,
                          height: 70,
                        }}
                        source={require('../../src/assets/images/personal-information.png')}
                      />
                      <Text style={styles.cardTitle_food}>
                        Personal Details
                      </Text>
                    </Body>
                  </CardItem>
                </Card>

                <Card
                  style={{
                    borderRadius: 15,
                    overflow: 'hidden',
                    elevation: 6,
                    height: 140,
                    width: 170,
                  }}>
                  <CardItem
                    button={true}
                    onPress={() => {
                      this.props.navigation.navigate('height_profile');
                    }}>
                    <Body
                      style={{
                        justifyContent: 'center',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Image
                        // size={40}
                        style={{
                          height: 60,
                          width: 60,
                        }}
                        source={require('../../src/assets/images/height.png')}
                      />
                      <Text style={styles.cardTitle_food}>
                        Height, Weight Food Prefs
                      </Text>
                    </Body>
                  </CardItem>
                </Card>
              </Row>
            </Grid>

            <Grid style={{flex: 2, justifyContent: 'center', marginTop: 0}}>
              <Row
                style={{
                  justifyContent: 'space-around',
                  padding: 10,
                }}>
                <Card
                  style={{
                    borderRadius: 15,
                    overflow: 'hidden',
                    elevation: 6,
                    height: 140,
                    width: 170,
                  }}>
                  <CardItem button={true}
                  onPress={() => {
                      this.props.navigation.navigate('MedicalDetails');
                    }}>
                    <Body
                      style={{
                        justifyContent: 'center',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Image
                        // size={40}
                        style={{
                          width: 70,
                          height: 70,
                        }}
                        source={require('../../src/assets/images/medical-record.png')}
                      />
                      <Text style={styles.cardTitle_food}>Medical Details</Text>
                    </Body>
                  </CardItem>
                </Card>

                <Card
                  style={{
                    borderRadius: 15,
                    overflow: 'hidden',
                    elevation: 6,
                    height: 140,
                    width: 170,
                  }}>
                  <CardItem
                  button={true}
                  // onPress={() => {
                      // this.props.navigation.navigate('height_profile');
                    // }}
                    >
                    <Body
                      style={{
                        justifyContent: 'center',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Image
                        // size={80}
                        style={{
                          width: 70,
                          height: 70,
                        }}
                        source={require('../../src/assets/images/anger.png')}
                      />
                      <Text style={styles.cardTitle_food}>Work and Stress</Text>
                    </Body>
                  </CardItem>
                </Card>
              </Row>
            </Grid>

            <Grid style={{flex: 2, justifyContent: 'center', marginTop: 0}}>
              <Row
                style={{
                  justifyContent: 'space-around',
                  padding: 10,
                }}>
                <Card
                  style={{
                    borderRadius: 15,
                    overflow: 'hidden',
                    elevation: 6,
                    height: 140,
                    width: 170,
                  }}>
                  <CardItem
                  button={true}
                  onPress={() => {
                      this.props.navigation.navigate('Medication');
                    }}>
                    <Body
                      style={{
                        justifyContent: 'center',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Image
                        // size={40}
                        style={{
                          width: 70,
                          height: 70,
                        }}
                        source={require('../../src/assets/images/first-aid-kit.png')}
                      />
                      <Text style={styles.cardTitle_food}>Medications</Text>
                    </Body>
                  </CardItem>
                </Card>

                <Card
                  style={{
                    borderRadius: 15,
                    overflow: 'hidden',
                    elevation: 6,
                    height: 140,
                    width: 170,
                  }}>
                  <CardItem
                  button={true}
                  // onPress={() => {
                  //     this.props.navigation.navigate('height_profile');
                  //   }}
                    >
                    <Body
                      style={{
                        justifyContent: 'center',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Image
                        // size={80}
                        style={{
                          width: 70,
                          height: 70,
                        }}
                        source={require('../../src/assets/images/vitamin.png')}
                      />
                      <Text style={styles.cardTitle_food}>Suppliments</Text>
                    </Body>
                  </CardItem>
                </Card>
              </Row>
            </Grid>

            <Grid style={{flex: 2, justifyContent: 'center', marginTop: 0}}>
              <Row
                style={{
                  justifyContent: 'space-around',
                  padding: 10,
                }}>
                <Card
                  style={{
                    borderRadius: 15,
                    overflow: 'hidden',
                    elevation: 6,
                    height: 140,
                    width: 170,
                  }}>
                  <CardItem
                  button={true}
                  // onPress={() => {
                  //     this.props.navigation.navigate('height_profile');
                  //   }}
                    >
                    <Body
                      style={{
                        justifyContent: 'center',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Image
                        // size={40}
                        style={{
                          width: 70,
                          height: 70,
                        }}
                        source={require('../../src/assets/images/challenge.png')}
                      />
                      <Text style={styles.cardTitle_food}>Goals</Text>
                    </Body>
                  </CardItem>
                </Card>

                <Card
                  style={{
                    borderRadius: 15,
                    overflow: 'hidden',
                    elevation: 6,
                    height: 140,
                    width: 170,
                  }}>
                  <CardItem
                  button={true}
                  // onPress={() => {
                  //     this.props.navigation.navigate('height_profile');
                  //   }}
                    >
                    <Body
                      style={{
                        justifyContent: 'center',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Image
                        // size={80}
                        style={{
                          width: 70,
                          height: 70,
                        }}
                        source={require('../../src/assets/images/profile.png')}
                      />
                      <Text style={styles.cardTitle_food}>Other Details</Text>
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

export default Profile_custo;
