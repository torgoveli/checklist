import React, { Component } from 'react'
import { View } from "react-native"
import Icon from "react-native-vector-icons/Ionicons"

export default class NavHeaderRightEdit extends Component {
    render() {
        return (
            <View style={styles.icon}>
                <Icon name="ios-add" size={28} color="#007AFF"/>
            </View>
        )
    }
}
