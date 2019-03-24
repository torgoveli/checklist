import React, { Component } from 'react'
import { StyleSheet, View, Text, Button, Image, TouchableOpacity } from "react-native"
import { ForwardButton } from "./Elements"


class BlockTemplate extends Component {

    render() {
        const {
            containerWrapper,
            container,
            containerWrapperLarge,
            img,
            imgLarge,
            header,
            headerLarge,
            title,
            titleLarge,
            description,
            descriptionLarge
        } = styles

        return (
            <View style={[containerWrapper, this.props.large && containerWrapperLarge]}>
                <View style={container}>
                    <View>
                        <Image style={[img, this.props.large && imgLarge]}
                               source={require('./../img/example_avatar_checklist.jpg')}/>
                    </View>
                    <View style={[header, this.props.large && headerLarge]}>
                        <Text style={[title, this.props.large && titleLarge]}>{this.props.title}</Text>
                        <Text style={[description, this.props.large && descriptionLarge]}>{this.props.desc}</Text>

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
    },
    titleLarge: {
        fontSize: 24,
    },
    descriptionLarge: {
        fontSize: 18,

    }
})

export default BlockTemplate
