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
class Profile_health extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container style={styles.background_general}>
        <Head navigation={this.props.navigation} title="" />
        <ScrollView>
          <Text style={styles.profileTitle}>ME > HEALTH PROGRESS</Text>
          <View style={{padding: 0, paddingTop: 0}}>
            <View>
              <Text style={styles.revenueTitle}>New Revenue</Text>
            </View>

            <Text style={styles.profileTitle_sugg}>
              PERSONALISED SUGGESSTION
            </Text>
            {/* <Text> Profile_custo </Text> */}
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
                  height: 180,
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
                  <CardItem
                    button={true}
                    onPress={() => {
                      this.props.navigation.navigate('Diabetes');
                    }}>
                    <Body
                      style={{
                        justifyContent: 'center',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginStart: 6,
                        paddingRight: 4,
                        paddingTop: 4,
                      }}>
                      <Text style={styles.cardTitle_health}>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </Text>
                    </Body>
                  </CardItem>
                </Card>
              </Row>
              <Row
                style={{
                  height: 120,
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
                        justifyContent: 'center',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        // padding:10,
                        marginStart: 10,
                        paddingRight: 6,
                        paddingTop: 10,
                      }}>
                      <Image
                        // size={40}
                        style={{
                          height: 40,
                          width: 40,
                        }}
                        source={require('../../src/assets/images/icon_war.png')}
                      />
                      <Text style={styles.cardTitle_health}>
                        You haven't enrolled in any program. Please join a
                        program to get personalized suggestions.
                      </Text>
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

export default Profile_health;
