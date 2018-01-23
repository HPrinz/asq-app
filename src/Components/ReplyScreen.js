import React, { Component } from 'react';
import { Header } from 'react-native-elements';
import { Text, TextInput, View, StyleSheet, Button, Alert, Container, Image } from 'react-native';

import AsqHeader from './AsqHeader.js'

export default class ReplyScreen extends Component {

    static navigationOptions = {
        title: 'Answer',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('../../assets/img/asterisk.png')}
                style={[styles.icon, { tintColor: tintColor }]}
            />
        ),
        // TODO
        header: null
    };

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header
                    outerContainerStyles={{ height: 100, backgroundColor: "white" }}
                    centerComponent={<AsqHeader />}
                />
                <View style={styles.logincontainer}>
                    <Text >ANSWER!</Text>
                </View >
            </View >
        );
    }
}

const styles = StyleSheet.create({
    logincontainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },

    headercontainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },

    note: {
        padding: 10,
        fontSize: 12
    },
    icon: {
        width: 26,
        height: 26,
    },

});
