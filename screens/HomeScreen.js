import React from 'react'
import Router from 'react-native-easy-router'
import { StyleSheet, View } from "react-native"

const Home = (children) => {
    return (
        <View
            style={styles.container}
        >
            {children}
        </View>)
}


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: "blue",
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around'
    }
})

export default Home
