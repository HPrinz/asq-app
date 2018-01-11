import React, { Component } from "react";
import { Text, View, TouchableOpacity, Button } from "react-native";
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
      routeName: "logout",
      params: { name: "Shubhnik" }
    });
    this.props.navigation.dispatch(navigateToQuestion);
  };

  render() {
    const {
      username
    } = this.props;
    // onPress={() => decrementAction()}
    return (
      <View>
        <Text>Welcome {username} to ASQ*</Text>
        <Button
          onPress={this.navigate}
          title="Continue"
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

//const mapDispatchToProps = {
//  incrementAction,
//  decrementAction
//};

const Welcome = connect(mapStateToProps)(WelcomeScreen);

export default Welcome;
