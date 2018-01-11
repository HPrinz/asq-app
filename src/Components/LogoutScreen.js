import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { logout } from "../Actions/actionCreator";

class LogoutScreen extends Component {

  static navigationOptions = {
    title: "Logout"
  };

  render() {
    return (
      <View style={styles.viewStyle}>
        <Text>{this.props.navigation.state.params.name}</Text>
        <TouchableOpacity
          onPress={this.props.logout}
          style={styles.touchableStyles}
        >
          <Text style={{ color: "white", fontSize: 22 }}>Logout</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapDispatchToProps = {
  logout
};

const Logout = connect(null, mapDispatchToProps)(LogoutScreen);

export default Logout;

const styles = StyleSheet.create({
  touchableStyles: {
    marginTop: 15,
    backgroundColor: "black",
    paddingHorizontal: 50,
    paddingVertical: 10,
    borderRadius: 5
  },

  viewStyle: {
    flex: 1,
    backgroundColor: "powderblue",
    justifyContent: "center",
    alignItems: "center"
  }
});