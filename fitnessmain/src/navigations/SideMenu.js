import PropTypes from 'prop-types';
import React, {Component} from 'react';
var styles = require('../../src/assets/files/Styles');
import {NavigationActions} from 'react-navigation';
import {
  Dimensions,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Text,
  Left,
  Thumbnail,
  Icon,
  Body,
  Right,
  Switch,
} from 'native-base';
var {height, width} = Dimensions.get('window');

import Strings from '../utils/Strings';

class SideMenu extends Component {
  navigateToScreen = (route) => () => {
    this.props.navigation.navigate(route);
  };

  render() {
    return (
      <View style={styles.container_menu}>
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#FFF',
            height: height * 0.3,
            marginTop: 30,
            padding: 30,
          }}>
          <Image
            source={require('../../src/assets/images/new_logo.png')}
            style={{flex: 1, width: 120, height: 120}}
            resizeMode="contain"
          />
        </View>

        <ScrollView>
          {/* <ListItem style={styles.item_menu} onPress={this.navigateToScreen('workout')}>
              <Body>
                <Text style={styles.text_menu}>{Strings.ST1}</Text>
              </Body>
              <Right>
                <Icon name="ios-arrow-forward-outline" style={styles.icon_menu} />
              </Right>
            </ListItem> */}

          {/* <ListItem style={styles.item_menu} onPress={this.navigateToScreen('ExercisesScreen')}>
              <Body>
                <Text style={styles.text_menu}>{Strings.ST2}</Text>
              </Body>
              <Right>
                <Icon name="ios-arrow-forward-outline" style={styles.icon_menu} />
              </Right>
            </ListItem> */}

          <ListItem
            style={styles.item_menu}
            onPress={this.navigateToScreen('diet')}>
            <Body>
              <Text style={styles.text_menu}>{Strings.ST3}</Text>
            </Body>
            <Right>
              <Icon name="ios-arrow-forward-outline" style={styles.icon_menu} />
            </Right>
          </ListItem>
          <ListItem
            style={styles.item_menu}
            onPress={this.navigateToScreen('DiatesPlan')}>
            <Body>
              <Text style={styles.text_menu}>{Strings.ST3} new</Text>
            </Body>
            <Right>
              <Icon name="ios-arrow-forward-outline" style={styles.icon_menu} />
            </Right>
          </ListItem>
          {/* <ListItem style={styles.item_menu} onPress={this.navigateToScreen('PostsScreen')}>
              <Body>
                <Text style={styles.text_menu}>{Strings.ST4}</Text>
              </Body>
              <Right>
                <Icon name="ios-arrow-forward-outline" style={styles.icon_menu} />
              </Right>
            </ListItem> */}

          {/* <ListItem style={styles.item_menu} onPress={this.navigateToScreen('QuotesScreen')}>
              <Body>
                <Text style={styles.text_menu}>{Strings.ST5}</Text>
              </Body>
              <Right>
                <Icon name="ios-arrow-forward-outline" style={styles.icon_menu} />
              </Right>
            </ListItem> */}

          <ListItem
            style={styles.item_menu}
            onPress={this.navigateToScreen('ProfileScreen')}>
            <Body>
              <Text style={styles.text_menu}>{Strings.ST6}</Text>
            </Body>
            <Right>
              <Icon name="ios-arrow-forward-outline" style={styles.icon_menu} />
            </Right>
          </ListItem>

          {/* <ListItem style={styles.item_menu} onPress={this.navigateToScreen('SettingsScreen')}>
              <Body>
                <Text style={styles.text_menu}>{Strings.ST7}</Text>
              </Body>
              <Right>
                <Icon name="ios-arrow-forward-outline" style={styles.icon_menu} />
              </Right>
            </ListItem> */}
        </ScrollView>
        <View style={styles.footer_menu}>
          <TouchableOpacity onPress={this.navigateToScreen('LogoutScreen')}>
            <Text>{Strings.ST8}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

SideMenu.propTypes = {
  navigation: PropTypes.object,
};

export default SideMenu;
