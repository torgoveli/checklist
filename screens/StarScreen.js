import React, { Component } from 'react'
import { StyleSheet, View, Text } from "react-native"

class StarScreen extends Component {
    static navigationOptions = {
        title: 'Звезда',
    };
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Star!</Text>
            </View>
        );
    }
}


export default StarScreen
