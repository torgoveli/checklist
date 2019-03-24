import React, { Component } from 'react'
import { View, Button} from "react-native"

class ChecklistsScreen extends Component {
    static navigationOptions = {
        title: 'Чек-листы',
    };
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                {/* other code from before here */}
                <Button
                    title="Go to Star in Settings"
                    onPress={() => this.props.navigation.navigate('Star')}
                />
            </View>
        );
    }
}

export default ChecklistsScreen
