import React, { Component } from 'react'
import { View } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons'


export default class ForwardButton extends Component {
    render() {
        return (
            <View>
                <Icon name="ios-arrow-forward" size={28} color="#999999"/>
            </View>
        )
    }
}

