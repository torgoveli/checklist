import React from "react"
import Router from 'react-native-easy-router'

import HomeScreen from "./HomeScreen"
import StarScreen from "./StarScreen"
import SettingsScreen from "./SettingsScreen"

const routesScreen = {
    Home: ({ router }) => HomeScreen(),
    Star: ({ router }) => StarScreen(),
    Settings: ({ router }) => SettingsScreen(),
}

export default routesScreen
