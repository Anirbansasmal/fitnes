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
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
// import { LinearGradient } from 'expo';
import LinearGradient from 'react-native-linear-gradient';
import {Grid, Row, Col} from 'react-native-easy-grid';
import {
  Container,
  Text,
  Body,
  Right,
  List,
  ListView,
  Thumbnail,
  ListItem,
  Left,
  Card,
  CardItem,
} from 'native-base';
import SwiperFlatList from 'react-native-swiper-flatlist';
// import BannerAd from '../components/BannerAd';
// import ConfigApp from '../utils/ConfigApp';
import Strings from '../utils/Strings';
import AsyncStorage from '@react-native-community/async-storage';
import Api from '../services/api';
import HTMLView from 'react-native-htmlview';

var styles = require('../../src/assets/files/Styles');
var {height, width} = Dimensions.get('window');

export default class Diets extends Component {
  static navigationOptions = ({navigation}) => ({
    title: `${Strings.ST3}`,
    headerRight: (
      <Icon
        name="md-search"
        style={{marginRight: 20}}
        size={27}
        color="white"
        onPress={() => navigation.navigate('CategoriesScreen')}
      />
    ),
  });

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      userDiet: [],
    };
  }

  componentDidMount() {
    // var request_1_url = ConfigApp.URL+'json/data_diets.php';
    // var request_2_url = ConfigApp.URL+'json/data_categories.php';
    var request_1_url = 'json/data_diets.php';
    var request_2_url = 'json/data_categories.php';

    // fetch(request_1_url).then((response) => response.json()).then((responseJson)  => {
    //     this.setState({
    //         diets: responseJson.filter(x => x.diet_featured == '1')
    //     });
    // }).then(()=>{
    //     fetch(request_2_url).then((response) => response.json()).then((responseJson) => {
    //      this.setState({
    //         categories: responseJson,
    //         isLoading: false,
    //      });
    //  }).done();
    // }).done();
    this.getData();
  }

  DietDetails(item) {
    const navigateAction = NavigationActions.navigate({
      routeName: 'DietDetails',
      params: {item},
    });
    this.props.navigation.dispatch(navigateAction);
  }

  DietsByCategory = (category_id, category_title) => {
    this.props.navigation.navigate('DietsByCategoryScreen', {
      IdCategory: category_id,
      TitleCategory: category_title,
    });
  };
  getData = async () => {
    var token = await AsyncStorage.getItem('token');
    // var user = await AsyncStorage.getItem('userId');
    // console.log(user);
    var user = 74;
    var userDetails = await Api.get('userById/' + user);
    if (userDetails.status === 'success') {
      this.setState({
        userDiet: userDetails.data.dietchart,
        isLoading: false,
      });
    }
    // console.log(this.state.userDiet)
    this.state.userDiet.map((diet) => {
      console.log(diet.week);
    });
  };
  DietDetails(item) {
    this.props.navigation.navigate('DiatesPlan', {data: item});
    console.log(item);
  }
  render() {
    // displayName = 'chandan';

    if (this.state.isLoading) {
      return <AppPreLoader />;
    }

    // const { params } = this.props.navigation.state;

    return (
      <Container style={styles.background_general}>
        <ImageBackground
          source={require('../../src/assets/images/profilebg.jpg')}
          style={{
            width: width,
            height: height * 0.2,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{color: '#f39c12', fontSize: 22, marginTop: 6}}></Text>
          <Text
            style={{
              color: '#FFF',
              fontSize: 16,
              marginTop: 6,
              textTransform: 'uppercase',
            }}>
            {' '}
            {Strings.ST65}{' '}
          </Text>
        </ImageBackground>
        {this.state.userDiet.length < 1 ? (
          <Text>No Diet Chart Available</Text>
        ) : (
          <List>
            <ListItem>
              <Text>Diet Charts</Text>
            </ListItem>
          </List>
        )}
        {this.state.userDiet.map((student, index) => (
          <List>
            <ListItem icon onPress={() => this.DietDetails(student)} style={{
              marginTop: 10,marginEnd: 20,
            }}>
              {/* <Body><Text>{student.week}</Text></Body> */}
              {/* <Right>
                <Icon active name="arrow-forward" />
              </Right> */}
              {/* <Grid style={{flex: 1}}>
                <Col
                  style={{
                    flex: 1,
                  }}> */}
              <Card style={styles.card_eachitem}>
                <CardItem>
                  <Body
                    style={{
                      flexDirection: 'column',
                    }}>
                    <Text>{student.week}</Text>
                  </Body>
                  <Right>
                    <Icon active name="arrow-forward" />
                  </Right>
                </CardItem>
              </Card>
              {/* </Col>
              </Grid> */}
            </ListItem>
          </List>
        ))}
      </Container>
    );
  }
}
