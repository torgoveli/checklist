import React, { Component } from 'react'
import { StyleSheet, View, Text, Button, Image } from "react-native"
import {
    createBottomTabNavigator,
    createStackNavigator,
    createAppContainer,
} from 'react-navigation';

class SettingsScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                {/* other code from before here */}
                <Button
                    title="Go to Star in Settings"
                    onPress={() => this.props.navigation.navigate('Star')}
                />
            </View>
        );
    }
}

export default SettingsScreen
