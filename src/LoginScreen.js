import React, { Component } from 'react';
import { Header } from 'react-native-elements';
import { Text, TextInput, View, StyleSheet, Button, Alert, Container } from 'react-native';
import { Font } from 'expo';

import AsqHeader from './AsqHeader.js'
import { onLogin } from "./Auth";

export default ({ navigation }) => (
    <View style={{ flex: 1 }}>
        <Header outerContainerStyles={{ height: 100, backgroundColor: "white" }}
            centerComponent={<AsqHeader />}
        />

        < View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            padding: 20
        }} >
            <TextInput
                style={{ height: 40, fontSize: 30 }}
                placeholder="choose a username"
                autoCapitalize="none"
            //onChangeText={(username) => this.setState({ username })}
            />
            <Button
                onPress={() => {
                    onLogin().then(() => navigation.navigate("LoggedIn"));
                }}
                title="Login"
                color="#841584"
            />

            <Text style={{
                padding: 10,
                fontSize: 12
            }}>This is a prototype with username-login only. Therefor please dont leave personal information in your account.</Text>
        </View >
    </View >
)

