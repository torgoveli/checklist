import React, { Component } from 'react'
import { StyleSheet, View, Text, Button, Image, TouchableOpacity } from "react-native"
import { ForwardButton } from "./Elements"


class ItemTemplate extends Component {
    render() {
        return (
            <View style={styles.containerWrapper}>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.title}>test</Text>
                        <Text style={styles.description}>desc</Text>
                    </View>
                    <View>
                        <ForwardButton/>
                    </View>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    containerWrapper: {
        height: 80,
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        paddingTop: 10,
        paddingRight: 16,
        paddingBottom: 10,
        paddingLeft: 16,
        marginBottom: 1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.00,

        elevation: 1,
    },
    header: {
        marginLeft: 15
    },
    title: {
        fontSize: 20,
        color: '#000'
    },
    description: {
        fontSize: 13,
        color: '#8A8A8F'

    }
})

export default ItemTemplate
