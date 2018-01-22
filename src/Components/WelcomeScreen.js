import React, { Component } from "react";
import { Text, View, TouchableOpacity, Button, StyleSheet } from "react-native";
import { NavigationActions } from "react-navigation";
import { connect } from "react-redux";
import { incrementAction, decrementAction } from "../Actions/actionCreator";

class WelcomeScreen extends Component {

  static navigationOptions = {
    title: "Welcome!",
    gesturesEnabled: false,
    headerLeft: null
  };

  navigate = () => {
    const navigateToQuestion = NavigationActions.navigate({
      routeName: "asq"
    });
    this.props.navigation.dispatch(navigateToQuestion);
  };

  render() {
    const {
      username
    } = this.props;

    return (
      <View>
        <Text style={styles.welcomeText}>Welcome {username}!</Text>
        <Button
          onPress={this.navigate}
          title="Start ASQ*ing now"
        />
      </View>
    );
  }
}

//const mapStateToProps = state => ({
//  counterCount: state.QuestionsReducer.counter,
//  counterString: state.QuestionsReducer.counterString
//});

const mapStateToProps = state => ({
  username: state.LoginReducer.username
});

const Welcome = connect(mapStateToProps)(WelcomeScreen);

export default Welcome;

const styles = StyleSheet.create({
  welcomeText: {
    fontSize: 25,
    padding: 20,
    textAlign: 'center'
  },


});