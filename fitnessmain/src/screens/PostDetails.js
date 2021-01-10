 import React, {Component} from 'react';
import { NavigationActions, StackNavigator } from 'react-navigation';
import { Container, Content, Body, Text, Card,List, Right, Button, ListItem} from 'native-base';
import{ ImageBackground, Dimensions, View, TouchableOpacity, SafeAreaView, ScrollView, FlatList, AsyncStorage, Linking, Image } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import LinearGradient from 'react-native-linear-gradient';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';

import ConfigApp from '../utils/ConfigApp';
import Strings from '../utils/Strings';
import HTMLView from 'react-native-htmlview';
import Api from '../services/api';
import { Placeholder,PlaceholderMedia,PlaceholderLine,Fade } from "rn-placeholder";


var styles = require('../../src/assets/files/Styles');
var {height, width} = Dimensions.get('window');

export default class PostDetails extends Component {
   static navigationOptions = ({ route,navigation }) => ({
    title: `${route.params.title}`,
    });

  constructor(props) {
    super(props)
    this.state = {
      id:props.route.params.id,
      title:props.route.params.title,
      LatestBlog:[],
      blogLoading:true

    };
  }


  componentDidMount() {    
    this.savePosts();
     }

savePosts = async () => {
  const Id = this.state.id;
  // console.log(Id);
  // var blog = await Api.getBlog('wp-json/wp/v2/posts/?_embed&include[]='+Id);
  var blog = await Api.getBlog('wp-json/wp/v2/recipe/?_embed&include[]='+Id);

  // console.log(blog);
  if(blog){
    var latestBlog = blog[0];
    var blogData ={
      title:latestBlog.title.rendered,
      except:latestBlog.excerpt.rendered,
      content:latestBlog.content.rendered,
      date:latestBlog.date,
      images:latestBlog["_embedded"]["wp:featuredmedia"][0]["source_url"]
    }
    console.log(blogData.content);
    this.setState({
      isloading:false,
      LatestBlog : blogData,
      blogLoading:false
  });
  }
};

  render() {

    const {item} = this.state;  
    // var user = firebase.auth().currentUser;

    return (
<Container style={styles.background_general}>

{this.state.blogLoading == true ?
<Card>
     <Placeholder
    Animation={Fade}
    style={{
      marginVertical: 6,
      marginHorizontal: 15,
      borderRadius: 4,
    }}
    Left={props => (
      <PlaceholderMedia
        style={[
          props.style,
          {
            width: 380,
            height: 200,
          },
        ]}
      />
    )}
  >
  </Placeholder>
  <Placeholder
            Animation={Fade}>
            <PlaceholderLine width={50} />
            <PlaceholderLine />
            <PlaceholderLine />
          </Placeholder>
  </Card>
  :
<ScrollView>
<KeyboardAwareScrollView>
<ImageBackground source={{uri: this.state.LatestBlog.images}} style={styles.postDetail_background}>
<LinearGradient colors={['rgba(0,0,0,0.0)', 'rgba(0,0,0,0.9)']} style={styles.postDetail_gradient}/>
<TouchableOpacity activeOpacity={1} style={{backgroundColor: '#f39c12', width: 50, height: 50, position: 'absolute', right: 15, bottom: -25, borderRadius: 50 , alignItems: 'center', justifyContent: 'center'}} >
<Image source={require('../../src/assets/images/bookmarked.png')} style={{width: 25, height: 25}}/>
</TouchableOpacity>
</ImageBackground>
<View style={{margin: 15, marginBottom: 5}}>
<Text style={styles.postDetail_title}>{this.state.LatestBlog.title}</Text>   
<Button transparent>
<Icon name='calendar' />
<Text style={styles.postDetail_date}>{this.state.LatestBlog.date}</Text>
</Button>
<HTMLView value={this.state.LatestBlog.content} />
</View>
  </KeyboardAwareScrollView>
</ScrollView>
  }
</Container>
    );
  }
}

