
import React, { Component } from 'react';
import {
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

export default class home extends Component{
    static navigationOptions = {
        title: 'Welcome',
    };

    render(){
        const { navigate } = this.props.navigation;
        return(
            <View style={{display:'flex', alignItems:'center',justifyContent:'center'} }>
                <Text>hello from home</Text>
                <Button title="Electronics"
                    color="#000"
                    style={{margin:10, flex:1}}
                    onPress = {() => navigate('Products', {cat: 'electronics'} )}
                    />
                    <Button title="Automobiles"
                    color="green"
                    
                    onPress = {() => navigate('Products', {cat: 'automobiles'} )}
                    />
            </View>
        )

    }

}


AppRegistry.registerComponent('home', () => home);
