

import React, { Component } from 'react';
import {
    AppRegistry,
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './home';

import Products from './products';

/*
export default class App extends Component{
  
      render(){
          return(s
              <View>
                  <text>hello from index.js</text>
              </View>
          )
      }
  } 

*/
const nativeShop = StackNavigator({
    Home: {screen: HomeScreen },
    Products: {screen : Products}

});

export default nativeShop;

