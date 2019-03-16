import React from 'react'
import Router from 'react-native-easy-router'
import { Text, View, StyleSheet } from 'react-native'

import Screen from "./screens"
import config from "./screens/config"

const tabs = config

export default class Application extends React.Component {
    state = { tab: tabs.Home }

    openTab = async tab => {
        if (this.state.tab === tab) return

        const animationType = tab.index > this.state.tab.index ? 'right' : 'left'
        this.setState({ tab }, () => this.router.reset[tab.systemName]({}, { type: animationType }))
    }

    render = () => (
        <View style={styles.container}>
            <View style={styles.tabBar_wrapper}>
                <View style={styles.tabBar}>
                    {Object.keys(tabs).map(tab =>
                            <Text key={tabs[tab].systemName}
                                  onPress={() => this.openTab(tabs[tab])}
                                  style={this.state.tab.systemName === tabs[tab].systemName ? styles.tabBar_item__active : styles.tabBar_item}
                            >
                                {tabs[tab].humanName}
                            </Text>
                        )}
                </View>
            </View>
            <Router routes={Screen}
                    initialRoute={tabs.Home.systemName}
                    router={ref => (this.router = ref)}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    tabBar_wrapper: {
        height: 126,
        justifyContent: 'flex-end'
    },
    tabBar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    tabBar_item: {
        fontWeight: 'normal',
        paddingBottom: 20,
        fontSize: 20,
        textAlign: "center"
    },
    tabBar_item__active: {
        fontWeight: 'bold',
        paddingBottom: 20,
        fontSize: 20,
        textAlign: "center"
    }
})

