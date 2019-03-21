import React, {Component} from 'react'
import { Text, View, StyleSheet, Image, Button } from 'react-native'
import { createStackNavigator, createAppContainer } from "react-navigation";

import RootStack from "./screens"

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
    render() {
        return <AppContainer />;
    }
}

// const styles = StyleSheet.create({
//     container: {
//         flex : 1,
//         backgroundColor : 'green'
//     }
// })

