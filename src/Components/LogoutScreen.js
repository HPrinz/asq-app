import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { logout } from "../Actions/actionCreator";

class LogoutScreen extends Component {

  static navigationOptions = {
    title: "Logout",
    // TODO
    header: null
  };

  render() {
    return (
      <View style={styles.viewStyle}>
        <TouchableOpacity
          onPress={this.props.logout}
          style={styles.touchableStyles}
        >
          <Text style={{ color: "black", fontSize: 22 }}>Logout</Text>
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
    backgroundColor: "white",
    paddingHorizontal: 50,
    paddingVertical: 10,
    borderRadius: 5
  },

  viewStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
