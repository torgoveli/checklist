import React, { Component } from 'react'
import { StyleSheet, View, Text, Button, Image, TouchableOpacity } from "react-native"
import { ForwardButton } from "./ForwardButton"



export default class BlockTemplateLarge extends Component {

    render() {
        const {
            container,
            containerWrapperLarge,
            imgLarge,
            headerLarge,
            titleLarge,
            descriptionLarge
        } = styles

        return (
            <View style={containerWrapperLarge}>
                <View style={container}>
                    <View>
                        <Image style={imgLarge}
                               source={require('./../img/example_avatar_checklist.jpg')}/>
                    </View>
                    <View style={headerLarge}>
                        <Text style={titleLarge}>{this.props.title}</Text>
                        <Text style={descriptionLarge}>{this.props.desc}</Text>

                    </View>
                    <View>
                        {this.props.children}
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
    img: {
        height: 60,
        width: 60,
        borderRadius: 30
    },
    header: {
        marginLeft: 15,
        flexGrow: 2
    },
    title: {
        fontSize: 20,
        color: '#000'
    },
    description: {
        fontSize: 18,
        color: '#8A8A8F'

    },
    containerWrapperLarge: {
        height: 120,
    },
    imgLarge: {
        height: 90,
        width: 90,
        borderRadius: 45
    },
    headerLarge: {
        marginLeft: 22.5,
        flexGrow: 2
    },
    titleLarge: {
        fontSize: 24,
        color: '#000'
    },
    descriptionLarge: {
        fontSize: 18,
        color: '#8A8A8F'

    }
})


