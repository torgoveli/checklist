import React, { Component } from 'react'
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from "react-native"
import ItemTemplate from "./../components/ItemTemplate"
import { ForwardButton, NavHeaderRightButton, NavHeaderTitle } from "./../components/Elements"
import BlockTemplate from "./../components/BlockTemplate"

class TemplateScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.title,
        headerRight: (<NavHeaderRightButton/>),
    })

    render() {
        const title = this.props.navigation.getParam('title', 'Шаблон')
        const desc = this.props.navigation.getParam('desc', 'Простое описание')
        return (
            <View style={styles.container}>
                <BlockTemplate title={title} desc={desc} large={true}/>
                <FlatList
                    data={[
                        { key: 'Devin', desc: 'Desc test esc test esc test' },
                    ]}
                    renderItem={({ item }) =>
                        <TouchableOpacity
                            onPress={() => {
                                this.props.navigation.navigate('TemplateDetails', {
                                    title: item.key,
                                    desc: item.desc,
                                })
                            }}
                        >
                            <ItemTemplate title={item.key} desc={item.desc} />
                        </TouchableOpacity>
                    }
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        // display : "flex",
        flex: 1,
        // flexDirection : 'column',
        // height : '100%',
        // justifyContent: 'flex-start',
        backgroundColor: '#F3F3F3',
        paddingTop: 32
    }
})

export default TemplateScreen
