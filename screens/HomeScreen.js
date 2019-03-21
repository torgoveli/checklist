import React, { Component } from 'react'
import { StyleSheet, View, Text, Button, Image } from "react-native"
import {
    createBottomTabNavigator,
    createStackNavigator,
    createAppContainer,
} from 'react-navigation';


class HomeScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Home Screen</Text>
            </View>
        );
    }
}

export default HomeScreen
