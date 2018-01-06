
import React, { Component } from 'react';
import {
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class home extends Component{
    static navigationOptions = {
        title: 'Welcome',
    };

    render(){
        return(
            <View>
                <Text>hello from home</Text>
            </View>
        )

    }

}


AppRegistry.registerComponent('home', () => home);
