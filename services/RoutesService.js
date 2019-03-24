import React from "react"
import Icon from 'react-native-vector-icons/Ionicons'
import {
    createStackNavigator,
    createAppContainer,
    createBottomTabNavigator
} from 'react-navigation'

import {
    HomeScreen,
    ChecklistsScreen,
    TemplateScreen,
    StarScreen,
    TemplateEditScreen,
    TemplateDetailsScreen,
    TemplateDetailsEditScreen
} from '../screens'


const HomeStack = createStackNavigator({
    Home: HomeScreen,
    Template: TemplateScreen,
    TemplateEdit: TemplateEditScreen,
    TemplateDetails: TemplateDetailsScreen,
    TemplateDetailsEdit: TemplateDetailsEditScreen,
})
HomeStack.navigationOptions = {
    tabBarLabel: 'Шаблоны',
}

const ChecklistsStack = createStackNavigator({
    Checklists: ChecklistsScreen,
    Star: StarScreen,
})
ChecklistsStack.navigationOptions = {
    tabBarLabel: 'Чек-листы',
}


export default RoutesService = createAppContainer(createBottomTabNavigator(
    {
        Home: HomeStack,
        Checklists: ChecklistsStack,
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                let { routeName } = navigation.state
                let iconName
                if (routeName === 'Home') {
                    iconName = 'ios-albums'
                } else if (routeName === 'Checklists') {
                    iconName = `ios-list${focused ? '-box' : ''}`
                }
                return <Icon name={iconName} size={28} color={tintColor}/>
            },
        }),
        tabBarOptions: {
            activeTintColor: '#007AFF',
            inactiveTintColor: '#999999',
        },
    })
)


