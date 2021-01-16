import React, {Component} from 'react';
// import * as firebase from 'firebase';
import {NavigationActions, StackNavigator} from 'react-navigation';
import {
  ImageBackground,
  Dimensions,
  View,
  ScrollView,
  SafeAreaView,
  Alert,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Body,
  Text,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Title,
  List,
  ListItem,
  Thumbnail,
} from 'native-base';
import {Col, Row, Grid} from 'react-native-easy-grid';
import Strings from '../utils/Strings';
import AsyncStorage from '@react-native-community/async-storage';
import Api from '../services/api';
import AppPreLoader from '../components/AppPreLoader';
import {Image} from 'react-native';
// import * as Progress from 'react-native-progress';
import ProgressBar from 'react-native-progress/Bar';
import HTMLView from 'react-native-htmlview';

import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  Fade,
} from 'rn-placeholder';
import SwiperFlatList from 'react-native-swiper-flatlist';

var styles = require('../../src/assets/files/Styles');
var {height, width} = Dimensions.get('window');
import Head from '../components/Header';

export default class Home extends Component {
  // static navigationOptions = {
  //   title: `${Strings.ST0}`,
  // };
  constructor(props) {
    super(props);
    // Don't call this.setState() here!userData
    this.state = {
      counter: 0,
      username: 'Subrata',
      isloading: false,
      LatestBlog: [],
      blogLoading: true,
      Latestrecipe: [],
      recipeLoading: true,
      task: [],
      taskLoading: true,
      profile_name:'',
      weight:'',
      bmi:'',
      taskdet:'',
      userDiet:'',
      
    };
  }
  componentDidMount() {
    //this.LoginCheck();
    this.getBlog();
    this.getRecipe();
    this.getMytask();
  }
  getBlog = async () => {
    var blog = await Api.getBlog('wp-json/wp/v2/posts?_embed&per_page=1');
    if (blog) {
      var latestBlog = blog[0];
      var blogData = {
        title: latestBlog.title.rendered,
        except: latestBlog.excerpt.rendered,
        images: latestBlog['_embedded']['wp:featuredmedia'][0]['source_url'],
      };
      this.setState({
        isloading: false,
        LatestBlog: blogData,
        blogLoading: false,
      });
    }
  };
  getRecipe = async () => {
    var blog = await Api.getBlog('wp-json/wp/v2/recipe?_embed&per_page=1');
    if (blog) {
      var latestRecipe = blog[0];
      var recipeData = {
        title: latestRecipe.title.rendered,
        except: latestRecipe.excerpt.rendered,
        images: latestRecipe['_embedded']['wp:featuredmedia'][0]['source_url'],
      };
      this.setState({
        isloading: false,
        Latestrecipe: recipeData,
        recipeLoading: false,
      });
    }
  };
  getMytask = async () => {
    var user = await AsyncStorage.getItem('userId');
    var apiResponse = await Api.get('userById/' + user);
    // console.log(apiResponse);
    if (apiResponse.status === 'success') {
      // Alert.alert('Success', 'Profile Updated');

      this.setState({
        isloading: false,
        task: apiResponse.data.tasks,
        taskLoading: false,
        profile_name:apiResponse.data.details.first_name,
        weight:apiResponse.data.details.weight,
        bmi:apiResponse.data.details.bmi,
        userDiet: apiResponse.data.dietchart,
      });
      if(apiResponse.data.tasks==""){
        this.setState({
          taskdet:"No task available",
        })
      }else{
        this.setState({
          taskdet:apiResponse.data.tasks[0].task,
        })
      }
      console.log("userDiet",apiResponse)
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
    console.log("user",this.state.task[0].task)
  };
  navigateToScreen = (route) => () => {
    this.props.navigation.navigate(route);
  };
  LoginCheck = async () => {
    console.log('login check');
    var token = await AsyncStorage.getItem('token');
    var user = await AsyncStorage.getItem('userId');
    // console.log(user);
    var userDetails = await Api.get('userById/' + user);
    console.log(userDetails);
    if (userDetails.status === 'success') {
      console.log(userDetails.data.details.first_name);
      this.setState({
        username: userDetails.data.details.first_name,
        isloading: false,
      });
    }
  };
  task() {
    this.props.navigation.navigate('My_task');
  }
  dietplan(){
    if(this.state.userDiet==""){
      Alert.alert('Diet plan', "No diet exist");
    }else{
      this.props.navigation.navigate('DiatesPlan',{data: this.state.userDiet[0]});
    }
  }
  render() {
    var loaded = this.state.isloading;
    if (loaded) {
      return <AppPreLoader />;
    }
    return (
      <Container style={styles.background_general}>
        <ScrollView>
          <Head navigation={this.props.navigation} title="" />

          <View style={styles.homeTitle}>
            <CardItem>
              <Left>
                <Body>
                  <Text style={styles.textTitle}>
                    Hi , {this.state.profile_name}
                  </Text>
                </Body>
              </Left>
              <Right>
                <TouchableOpacity
                  style={styles.MainContainer}
                  onPress={() => this.task()}>
                  <View style={styles.childView}>
                    <Text style={styles.More_text}> My task </Text>
                  </View>
                </TouchableOpacity>
              </Right>
            </CardItem>
          </View>
          <View style={styles.taskHolder}>
            <Text style={styles.task}>Next: {this.state.taskdet}</Text>
          </View>
          <List>
            <View style={styles.stepView}>
              <Text style={styles.stepText}>Daily Progress</Text>
            </View>
            <ListItem style={styles.listitem_home}>
              <ProgressBar progress={0.5} width={200} height={15} />
            </ListItem>
            <ListItem style={styles.listitem_home}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: -20,
                }}>
                <Text style={styles.stepText}>50%</Text>
              </View>
            </ListItem>
            <ListItem>
              <View style={{flex: 1, flexDirection: 'row', marginBottom: 10}}>
                <View
                  style={{
                    width: '33%',
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    width={200}
                    source={require('../../src/assets/images/footprints.png')}
                  />
                  <Text style={styles.counterText}>280/1000</Text>
                </View>
                <View
                  style={{
                    width: '33%',
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    width={120}
                    source={require('../../src/assets/images/weight-scale.png')}
                  />
                  {this.state.weight ==" " ?(
                    <Text style={styles.counterText}>_</Text>
                  ):(
                  <Text style={styles.counterText}>{this.state.weight} kgs</Text>
                  )}
                </View>
                <View
                  style={{
                    width: '33%',
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    width={120}
                    source={require('../../src/assets/images/bmi.png')}
                  />
                  {this.state.weight ==" " ?(
                    <Text style={styles.counterText}>_</Text>  
                  ):(
                  <Text style={styles.counterText}>{this.state.bmi}</Text>
                  )}
                </View>
              </View>
            </ListItem>
          </List>
          <View>
            <Card style={{backgroundColor: '#d8cecd'}}>
              <CardItem style={{backgroundColor: '#d8cecd'}}>
                <Left>
                  <Body>
                    <Text style={styles.homeText}>Upcoming Event</Text>
                  </Body>
                </Left>
                <Right>
                  <View style={styles.MainContainer}>
                    <View style={styles.childView}>
                      <Text style={styles.More_text}> calender </Text>
                    </View>
                  </View>
                </Right>
              </CardItem>
              <CardItem
                style={{
                  justifyContent: 'center',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#d8cecd',
                }}>
                <Image
                  source={require('../../src/assets/images/event-post.png')}
                />
              </CardItem>
            </Card>
          </View>

          {/* <View style={{flexDirection:'column', backgroundColor: '#000000', height: height * 0.25}}>
<ImageBackground
      source={require('../../src/assets/images/profilebg.jpg')}
      style={{flex: 1, width: null, height: null}}>
</ImageBackground>
</View> */}

          <View style={{padding: 10, paddingTop: 10, backgroundColor: '#FFF'}}>
            <Grid style={{flex: 2}}>
              <Col
                style={{
                  height: 160,
                  width: 150,
                  flex: 1,
                  paddingRight: 15,
                  paddingLeft: 15,
                }}>
                <Card style={{borderRadius: 15, overflow: 'hidden'}}>
                  <CardItem
                  button={true}
                    onPress={() => 
                    this.dietplan()
                    }>
                    <Body
                      style={{
                        justifyContent: 'center',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Image
                        size={40}
                        source={require('../../src/assets/images/diet.png')}
                      />
                      <Text style={styles.cardTitle}>My Diet Plan</Text>
                    </Body>
                  </CardItem>
                </Card>
              </Col>
              <Col
                style={{
                  height: 160,
                  width: 150,
                  flex: 1,
                  paddingLeft: 10,
                  paddingRight: 15,
                }}>
                <Card style={{borderRadius: 15, overflow: 'hidden'}}>
                  <CardItem
                    button={true}
                    onPress={() => {
                      this.props.navigation.navigate('My_program');
                    }}
                    >
                    <Body
                      style={{
                        justifyContent: 'center',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Image
                        size={80}
                        source={require('../../src/assets/images/health.png')}
                      />
                      <Text style={styles.cardTitle}>My Program</Text>
                    </Body>
                  </CardItem>
                </Card>
              </Col>
            </Grid>
            <Grid style={{flex: 2}}>
              <Col
                style={{
                  height: 200,
                  width: 150,
                  flex: 1,
                  paddingRight: 15,
                  paddingLeft: 15,
                }}>
                <Card style={{borderRadius: 15, overflow: 'hidden'}}>
                  <CardItem
                    button={true}
                    onPress={() => {
                      this.props.navigation.navigate('My_Calender');
                    }}>
                    <Body
                      style={{
                        justifyContent: 'center',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Image
                        size={80}
                        source={require('../../src/assets/images/2019.png')}
                      />
                      <Text style={styles.cardTitle}>My Calendar</Text>
                    </Body>
                  </CardItem>
                </Card>
              </Col>
              <Col
                style={{
                  height: 200,
                  width: 150,
                  flex: 1,
                  paddingLeft: 10,
                  paddingRight: 15,
                }}>
                <Card style={{borderRadius: 15, overflow: 'hidden'}}>
                  <CardItem
                    button={true}
                    onPress={() => {
                      this.props.navigation.navigate('diet');
                    }}>
                    <Body
                      style={{
                        justifyContent: 'center',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Image
                        source={require('../../src/assets/images/basket.png')}
                      />
                      <Text style={styles.cardTitle}>Health Stores</Text>
                    </Body>
                  </CardItem>
                </Card>
              </Col>
            </Grid>

            <View style={{backgroundColor: '#f6ffee', paddingBottom: 20}}>
              {this.state.blogLoading == false ? (
                <View>
                  <CardItem style={{backgroundColor: '#f6ffee'}}>
                    <Left>
                      <Body>
                        <Text style={styles.homeText}>KEEP READING</Text>
                      </Body>
                    </Left>
                    <Right>
                      <View style={styles.MainContainer}>
                        <View style={styles.childView}>
                          <Text
                            style={styles.More_text}
                            onPress={() => {
                              this.props.navigation.navigate('PostsScreen', {
                                type: 'recipe',
                              });
                            }}>
                            More Recipe
                          </Text>
                        </View>
                      </View>
                    </Right>
                  </CardItem>
                  <Card style={{borderRadius: 15, overflow: 'hidden'}}>
                    <CardItem>
                      <Image
                        source={{uri: this.state.Latestrecipe.images}}
                        style={{height: 200, width: null, flex: 1}}
                      />
                    </CardItem>
                    <CardItem>
                      <Body>
                        <Text>{this.state.LatestBlog.title}</Text>
                        <HTMLView value={this.state.Latestrecipe.except} />
                      </Body>
                    </CardItem>
                  </Card>
                </View>
              ) : (
                <Placeholder
                  Animation={Fade}
                  Left={PlaceholderMedia}
                  Right={PlaceholderMedia}>
                  <PlaceholderLine width={80} />
                  <PlaceholderLine />
                  <PlaceholderLine width={30} />
                </Placeholder>
              )}
            </View>

            <View>
              {this.state.blogLoading == false ? (
                <View>
                  <CardItem>
                    <Left>
                      <Body>
                        <Text style={styles.homeText}>KEEP READING</Text>
                      </Body>
                    </Left>
                    <Right>
                      <View style={styles.MainContainer}>
                        <View style={styles.childView}>
                          <Text
                            style={styles.More_text}
                            onPress={() => {
                              this.props.navigation.navigate('PostsScreen', {
                                type: 'posts',
                              });
                            }}>
                            More Blog{' '}
                          </Text>
                        </View>
                      </View>
                    </Right>
                  </CardItem>
                  <Card style={{borderRadius: 15, overflow: 'hidden'}}>
                    <CardItem cardBody>
                      <Image
                        source={{uri: this.state.LatestBlog.images}}
                        style={{height: 200, width: null, flex: 1}}
                      />
                    </CardItem>
                    <CardItem>
                      <Body>
                        <Text>{this.state.LatestBlog.title}</Text>
                        <HTMLView value={this.state.LatestBlog.except} />
                      </Body>
                    </CardItem>
                  </Card>
                </View>
              ) : (
                <Placeholder
                  Animation={Fade}
                  Left={PlaceholderMedia}
                  Right={PlaceholderMedia}>
                  <PlaceholderLine width={80} />
                  <PlaceholderLine />
                  <PlaceholderLine width={30} />
                </Placeholder>
              )}
            </View>
          </View>

          <View>
            <Card style={{backgroundColor: '#f6ffee'}}>
              <CardItem style={{backgroundColor: '#f6ffee'}}>
                <Left>
                  <Body>
                    <Text style={styles.homeText}>Client Speak</Text>
                  </Body>
                </Left>
                <Right>
                  <View style={styles.MainContainer}>
                    <View style={styles.childView}>
                      <Text style={styles.More_text}> Testimonial </Text>
                    </View>
                  </View>
                </Right>
              </CardItem>
              <CardItem
                style={{
                  justifyContent: 'center',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#f6ffee',
                }}>
                {/* <Thumbnail source={require('../../src/assets/images/avatar.png')} /> */}
                <Body style={{flex: 1, flexDirection: 'row'}}>
                  <View style={{width: '30%'}}>
                    <Thumbnail
                      source={require('../../src/assets/images/avatar.png')}
                    />
                  </View>
                  <View style={{width: '70%'}}>
                    <Text style={styles.cardTitle}>Lost 10kgs in 2 Months</Text>
                    <Text style={{fontSize: 12}}>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua.
                    </Text>
                    <View style={{flex: 1, flexDirection: 'row', fontSize: 14}}>
                      <View style={{flexDirection: 'row'}}>
                        <Text
                          style={{
                            fontSize: 12,
                            backgroundColor: '#77b942',
                            color: '#fff',
                            padding: 5,
                            marginRight: 5,
                          }}>
                          P
                        </Text>
                        <Text style={{fontSize: 12}}>weight-loss</Text>
                      </View>
                      <View style={{flexDirection: 'row'}}>
                        <Text
                          style={{
                            fontSize: 12,
                            backgroundColor: '#77b942',
                            color: '#fff',
                            padding: 5,
                            marginRight: 5,
                            marginLeft: 5,
                          }}>
                          L
                        </Text>
                        <Text style={{fontSize: 12}}>singapore</Text>
                      </View>
                      <View style={{flexDirection: 'row'}}>
                        <Text
                          style={{
                            fontSize: 12,
                            backgroundColor: '#77b942',
                            color: '#fff',
                            padding: 5,
                            marginLeft: 5,
                            marginRight: 5,
                          }}>
                          A
                        </Text>
                        <Text style={{fontSize: 12}}>29 f</Text>
                      </View>
                    </View>
                  </View>
                </Body>
              </CardItem>
            </Card>
          </View>
        </ScrollView>
      </Container>
    );
  }
}
