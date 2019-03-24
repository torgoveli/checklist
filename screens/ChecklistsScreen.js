import React, { Component } from 'react'
import { View, Button} from "react-native"
import NavigationService from '../services/NavigationService'


export default class ChecklistsScreen extends Component {
    static navigationOptions = {
        title: 'Чек-листы',
    };
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Button
                    title="Go to Star in Settings"
                    onPress={() => NavigationService.navigate('Star')}
                />
            </View>
        );
    }
}

