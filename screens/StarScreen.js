import React, { Component } from 'react'
import { View, Text } from "react-native"

export default class StarScreen extends Component {
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
