import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'

import {
    StyleSheet,
    View,
    Text,
    FlatList,
    TouchableOpacity,
    Button
} from "react-native"

import {
    ItemTemplate,
    ForwardButton,
    NavHeaderRightButton,
    BlockTemplateLarge
} from "./../components"


export default class TemplateScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.title,
        headerRight: (
            <Button
                title="Edit"
                onPress={() => navigation.navigate('TemplateEdit')}
            />
        )
    })

    render() {
        const title = this.props.navigation.getParam('title', 'Шаблон')
        const desc = this.props.navigation.getParam('desc', 'Простое описание')
        return (
            <View style={styles.container}>
                <BlockTemplateLarge title={title} desc={desc}/>
                <FlatList
                    data={[{ key: 'Devin', desc: 'Desc test esc test esc test' }]}
                    ListHeaderComponent={<Text>QUALITY</Text>}
                    renderItem={({ item }) => <ItemTemplate2 title={item.key} desc={item.desc}/>}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3F3F3',
        paddingTop: 32
    }
})


