import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons'



class NavHeaderRightButton extends Component {
    render() {
        return (
            <View style={styles.icon}>
                <Icon name="ios-add" size={28} color="#007AFF"/>
            </View>
        )
    }
}
class ForwardButton extends Component {
    render() {
        return (
            <View style={styles.icon}>
                <Icon name="ios-arrow-forward" size={28} color="#999999"/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {},
    icon: {
        paddingRight: 10
    }
})
export {NavHeaderRightButton, ForwardButton }
