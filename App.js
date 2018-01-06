import React, { Component } from 'react';
import { Header } from 'react-native-elements';
import { AppRegistry, Text, TextInput, View, StyleSheet, Button, Alert, Container } from 'react-native';

import AsqHeader from './src/nav.js'

export default class Login extends Component {

  _onLoginSelected() {
    Alert.alert('You\'re logged in!')
  }

  render() {
    return (

      <View style={{ flex: 1 }}>

        <Header outerContainerStyles={{ height: 100, backgroundColor: "white" }}
          centerComponent={<AsqHeader />}
        />

        <View style={styles.logincontainer}>
          <TextInput
            style={{ height: 40, fontSize: 30 }}
            placeholder="choose a username"
            onChangeText={(text) => this.setState({ text })}
          />
          <Button
            onPress={this._onLoginSelected}
            title="Login"
            color="#841584"
          />
          <Text style={styles.note}>This is a prototype with username-login only. Therefor please dont leave personal information in your account.</Text>
        </View>
      </View>
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
});
