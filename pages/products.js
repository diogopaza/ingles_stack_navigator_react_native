
import React, { Component } from 'react';
import {
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class products extends Component{
    static navigationOptions = {
        title: 'Products',
    };

    render(){
        return(
            <View>
                <Text>hello from produts</Text>
            </View>
        )

    }

}


AppRegistry.registerComponent('products', () => products);
