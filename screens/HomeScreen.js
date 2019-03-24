import React, { Component } from 'react'
import { StyleSheet, View, FlatList, TouchableOpacity } from "react-native"
import BlockTemplate from '../components/BlockTemplate'
import { NavHeaderRightButton } from './../components/Elements'


class HomeScreen extends Component {
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
                            <BlockTemplate title={item.key} desc={item.desc} large={false}/>
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
export default HomeScreen
