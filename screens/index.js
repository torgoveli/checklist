import React from "react"
// import Ionicons from 'react-native-vector-icons/Ionicons'
import {
    createStackNavigator,
    createAppContainer,
} from 'react-navigation';

import HomeScreen from "./HomeScreen"
// import StarScreen from "./StarScreen"
// import ModalScreen from "./ModalScreen"
// import SettingsScreen from "./SettingsScreen"

const HomeStack = createStackNavigator({
    Home: HomeScreen,
    // Star: StarScreen,
})

// const SettingsStack = createStackNavigator({
//     Settings: SettingsScreen,
//     Star: StarScreen,
// })



export default createAppContainer(HomeStack);
// export default createAppContainer(createBottomTabNavigator(
//     {
//         Home: HomeStack,
//         Settings: SettingsStack,
//     },
//     {
//         defaultNavigationOptions: ({ navigation }) => ({
//             tabBarIcon: ({ focused, horizontal, tintColor }) => {
//                 const { routeName } = navigation.state
//                 let IconComponent = Ionicons
//                 let iconName
//                 if (routeName === 'Home') {
//                     iconName = `ios-information-circle${focused ? '' : '-outline'}`
//                     // Sometimes we want to add badges to some icons.
//                     // You can check the implementation below.
//                 } else if (routeName === 'Star') {
//                     iconName = `ios-options`
//                 }
//
//                 // You can return any component that you like here!
//                 return <IconComponent name={iconName} size={25} color={tintColor}/>
//             },
//         }),
//         tabBarOptions: {
//             activeTintColor: 'tomato',
//             inactiveTintColor: 'gray',
//         },
//     })
// )


