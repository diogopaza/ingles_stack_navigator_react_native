
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
        const { params } =this.props.navigation.state;
        return(
            <View>
                <Text>hello from produts</Text>
                <Text 
                style={{color:'#000', fontWeight:'bold'}}>Category Name: {params.cat}</Text>
            </View>
        )

    }

}


AppRegistry.registerComponent('products', () => products);
