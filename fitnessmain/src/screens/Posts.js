import React, {Component} from 'react';
import {NavigationActions, StackNavigator} from 'react-navigation';
import AppPreLoader from '../components/AppPreLoader';
import {
  ImageBackground,
  Dimensions,
  View,
  TouchableOpacity,
  FlatList,
  Button,
  ActivityIndicator,
  StyleSheet,
  ScrollView,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
// import { LinearGradient } from 'expo';
import LinearGradient from 'react-native-linear-gradient';

import {Grid, Row} from 'react-native-easy-grid';
import {
  Container,
  Text,
  Body,
  Right,
  List,
  ListView,
  Left,
  Thumbnail,
  ListItem,
  Card,
  CardItem,
} from 'native-base';
import SwiperFlatList from 'react-native-swiper-flatlist';
import ConfigApp from '../utils/ConfigApp';
// import BannerAd from '../components/BannerAd';
import Strings from '../utils/Strings';
import Api from '../services/api';
import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  Fade,
} from 'rn-placeholder';
import HTMLView from 'react-native-htmlview';
var styles = require('../../src/assets/files/Styles');
var {height, width} = Dimensions.get('window');

export default class Posts extends Component {
  static navigationOptions = ({navigation}) => ({
    title: `${Strings.ST4}`,
    headerRight: (
      <Icon
        name="md-search"
        style={{marginRight: 20}}
        size={27}
        color="white"
        onPress={() => navigation.navigate('TagsScreen')}
      />
    ),
  });

  constructor(props) {
    super(props);
    // console.log(props.route.params.type);
    this.infiniteScrollRef = null;
    this.state = {
      isLoading: true,
      recentposts: [],
      type: props.route.params.type,
    };
  }

  componentDidMount() {
    this.getBlog();
  }
  getBlog = async () => {
    let blogs = [];
    // var blog = await Api.getBlog('wp-json/wp/v2/posts?_embed&per_page=10');
    var blog = await Api.getBlog(
      'wp-json/wp/v2/' + this.state.type + '?_embed&per_page=10',
    );

    if (blog) {
      for (let blogList of blog) {
        var blogData = {
          id: blogList.id,
          title: blogList.title.rendered,
          except: blogList.excerpt.rendered,
          images: blogList['_embedded']['wp:featuredmedia'][0]['source_url'],
        };
        // blogs.push({ blogData });
        this.setState({
          recentposts: [...this.state.recentposts, blogData],
        });
      }
      console.log('recentposts', this.state.recentposts);
      this.setState({isLoading: false, posts: blogs});
    }
  };

  PostDetails(item) {
    this.props.navigation.navigate('PostDetailsScreen', {
      id: item.id,
      title: item.title,
    });
  }

  PostsByTag = (tag_id, tag_title) => {
    this.props.navigation.navigate('PostsByTagScreen', {
      IdTag: tag_id,
      TitleTag: tag_title,
    });
  };

  render() {
    if (this.state.isLoading) {
      return (
        // <AppPreLoader/>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View>
            <Placeholder
              Animation={Fade}
              style={{
                marginVertical: 6,
                marginHorizontal: 15,
                borderRadius: 4,
              }}
              Left={(props) => (
                <PlaceholderMedia
                  style={[
                    props.style,
                    {
                      width: 150,
                      height: 100,
                    },
                  ]}
                />
              )}></Placeholder>
            <Placeholder Animation={Fade}>
              <PlaceholderLine width={58} />
            </Placeholder>
          </View>
          <View>
            <Placeholder
              Animation={Fade}
              style={{
                marginVertical: 6,
                marginHorizontal: 15,
                borderRadius: 4,
              }}
              Left={(props) => (
                <PlaceholderMedia
                  style={[
                    props.style,
                    {
                      width: 150,
                      height: 100,
                    },
                  ]}
                />
              )}></Placeholder>
            <Placeholder Animation={Fade}>
              <PlaceholderLine width={80} />
            </Placeholder>
          </View>
        </View>
      );
    }

    // const { params } = this.props.navigation.state;

    return (
      <Container style={styles.background_general}>
        <ScrollView>
          <View style={{margin: 7, marginTop: 8}}>
            <View
              style={{
                height: 50,
                alignSelf: 'center',
                backgroundColor: '#a5d1a7',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  padding: 7,
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: '#035048',
                }}>
                {Strings.ST54}
              </Text>
            </View>
            <FlatList
              data={this.state.recentposts}
              // numColumns={2}
              renderItem={({item, index}) => (
                <TouchableWithoutFeedback
                  onPress={() => this.PostDetails(item)}
                  activeOpacity={1}
                  style={{flex: 1}}>
                  {/* // <TouchableOpacity activeOpacity={1} style={{flex: 1}}> */}
                  <View
                    style={{
                      margin: 5,
                      marginLeft: 4,
                      borderWidth: 1,
                      borderRadius: 10,
                      flexDirection: 'row',
                      borderColor: '#d3e3d4',
                      justifyContent: 'space-between',
                    }}>
                    {/* <View style={{margin: 7,backgroundColor:"#ffff"}}> */}
                    {/* <View></View> */}
                    <Image
                      source={{uri: item.images}}
                      style={styles.background_posts_2columns}></Image>
                    {/* </View> */}

                    <View
                      style={{
                        margin: 4,
                        marginEnd: 10,
                        height: 170,
                        width: width * 0.45,
                      }}>
                      <ScrollView
                        // showsHorizontalScrollIndicator={false}
                        // showsVerticalScrollIndicator={false}
                        >
                        <Text style={styles.title_posts_categories}>
                          {item.title}
                        </Text>
                        <View
                          style={{
                            justifyContent: 'center',
                            padding: 2,
                          }}>
                          <HTMLView
                            value={item.except}
                            stylesheet={styles.desc_posts_categories}
                          />
                        </View>
                      </ScrollView>
                    </View>
                  </View>
                </TouchableWithoutFeedback>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </ScrollView>
      </Container>
    );
  }
}
