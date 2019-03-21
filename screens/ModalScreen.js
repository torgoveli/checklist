import React, { Component } from 'react'
import { StyleSheet, View, Text, Button, Image } from "react-native"
import { createStackNavigator, createAppContainer } from 'react-navigation'

class ModalScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Modal Screen</Text>
            </View>
        );
    }
}
export default ModalScreen
