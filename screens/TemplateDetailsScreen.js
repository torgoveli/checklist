import React, { Component } from 'react'
import {View, Text, Button } from "react-native"

export default class TemplateDetailsScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.title,
        headerRight: (
            <Button
                title="Edit"
                onPress={() => navigation.navigate('TemplateDetailsEdit')}
            />
        )
    })
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>TemplateDetailsScreen</Text>
            </View>
        );
    }
}

