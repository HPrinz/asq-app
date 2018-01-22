import React, { Component } from "react";
import { connect } from "react-redux";
import { Header } from 'react-native-elements';
import { Text, View, TouchableOpacity, StyleSheet, TextInput, Button } from "react-native";
import { login } from "../Actions/actionCreator";
import AsqHeader from './AsqHeader'

class LoginScreen extends Component {

  static navigationOptions = {
    title: "Login"
  };

  render() {
    return (
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
            onChangeText={(username) => this.setState({ username })}
          />
          <TouchableOpacity>
            <Button
              onPress={(event) => this.props.login({ username: this.state.username })}
              title="Login"
              color="#841584"
            />
          </TouchableOpacity>

          <Text style={{
            padding: 10,
            fontSize: 12
          }}>This is a prototype with username-login only. Therefor please dont leave personal information in your account.</Text>
        </View >
      </View >
    );
  }
}

const mapDispatchToProps = {
  login
};

const Login = connect(null, mapDispatchToProps)(LoginScreen);

export default Login;
