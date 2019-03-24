import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, Button } from 'react-native'
import { createStackNavigator, createAppContainer } from "react-navigation"
import RoutesService from './services/RoutesService'
import NavigationService from './services/NavigationService'

const AppContainer = createAppContainer(RoutesService)

export default class App extends React.Component {
    render() {
        return (
            <AppContainer ref={navigatorRef => {
                NavigationService.setTopLevelNavigator(navigatorRef)
            }}/>
        )
    }
}

