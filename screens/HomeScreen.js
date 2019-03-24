import React, { Component } from 'react'
import { StyleSheet, View, FlatList, TouchableOpacity } from "react-native"
import {BlockTemplateSmall} from '../components/BlockTemplateLarge'
import { NavHeaderRightButton } from '../components/ForwardButton'
import NavigationService from '../services/NavigationService'


export default class HomeScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: 'Шаблоны',
            headerRight: (<NavHeaderRightButton/>),
        }
    }


    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={[
                        { key: 'Devin', desc: 'Desc test esc test esc test' },
                        { key: 'Jackson', desc: 'Desc test esc test esc test' },
                        { key: 'James', desc: 'Desc test esc test esc test' },
                        { key: 'Joel', desc: 'Desc test esc test esc test' },
                        { key: 'John', desc: 'Desc test esc test esc test' },
                        { key: 'Jillian', desc: 'Desc test esc test esc test' },
                        { key: 'Jimmy', desc: 'Desc test esc test esc test' },
                        { key: 'Julie', desc: 'Desc test esc test esc test' },
                    ]}
                    renderItem={({ item }) =>
                        <TouchableOpacity
                            onPress={() => {
                                this.props.navigation.navigate('Template', {
                                    title: item.key,
                                    desc: item.desc,
                                })
                            }}>
                            <BlockTemplateSmall title={item.key} desc={item.desc}/>
                        </TouchableOpacity>
                    }
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
