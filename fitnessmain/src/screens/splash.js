import React, {Component} from 'react';
import styles from '../../src/assets/files/Styles';
import { Body, View} from 'native-base';
import { Image } from 'react-native';



export default class splash extends Component {
  render() {
    return (
    <Body>
        <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <Image source={require('../../src/assets/images/Food-N-Wellness.png')} style={styles.logo_start} resizeMode="contain"/>
        </View>
    </Body>
    );
  }
}