import React, { Component } from 'react'
import { StyleSheet, View, Text, Button } from "react-native"
import {
    createBottomTabNavigator,
    createStackNavigator,
    createAppContainer,
} from 'react-navigation';

class StarScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Star!</Text>
            </View>
        );
    }
}


export default StarScreen
