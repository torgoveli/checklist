import React, { Component } from 'react'
import { Text, View, StyleSheet, Button, Image } from 'react-native'

class NavigationBar extends Component {
    render() {
        const {container, container__inner, blockBackButton, blockBackButton__icon, blockBackButton__button, pageHeader__wrapper, pageHeader } = styles
        return (
            <View style={container}>
                <View style={container__inner}>
                    <View style={blockBackButton}>
                        <Image style={blockBackButton__icon}
                               source={require()}/>
                        <Button title={"Назад"}
                                onPress={console.log("click!")}
                                style={blockBackButton__button}/>
                    </View>
                </View>
                <View style={pageHeader__wrapper}>
                    <Text style={pageHeader}>
                        {"Main page"}
                    </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 126,
        backgroundColor: "F8F8F8",
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0.5 },
        shadowOpacity: 0.3,
        shadowRadius: 0,
    },
    container__inner: {
        flex: 1,
    },
    blockBackButton: {
        flex: 1,
    },
    blockBackButton__icon: {
    },
    blockBackButton__button: {
    },
    pageHeader__wrapper: {
        flex: 1,
    },
    pageHeader: {
        fontSize : 34
    }
})

export default NavigationBar
