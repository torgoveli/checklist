import React from 'react'
import Router from 'react-native-easy-router'
import { StyleSheet, View } from "react-native"

const Star = (children) => {
    return (
        <View
            style={styles.container}
        >
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: "yellow",
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around'
    }
})

export default Star
