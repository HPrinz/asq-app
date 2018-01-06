// thanks to  https://github.com/spencercarli/react-navigation-auth-flow/tree/finished-code

import React from "react";
import { Platform, StatusBar } from "react-native";
import { StackNavigator, TabNavigator } from "react-navigation";
import { FontAwesome } from "react-native-vector-icons";

import LoginScreen from "./LoginScreen";
import AsqScreen from "./AsqScreen";
import AnswerScreen from "./AnswerScreen";

const headerStyle = {
  marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
};

export const LoggedOut = StackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      title: "Login",
      headerStyle
    }
  }
});

export const LoggedIn = TabNavigator(
  {
    Asq: {
      screen: AsqScreen,
      navigationOptions: {
        tabBarLabel: "ASQ*",
        tabBarIcon: ({ tintColor }) =>
          <FontAwesome name="home" size={30} color={tintColor} />
      }
    },
    Amswer: {
      screen: AnswerScreen,
      navigationOptions: {
        tabBarLabel: "Answer",
        tabBarIcon: ({ tintColor }) =>
          <FontAwesome name="user" size={30} color={tintColor} />
      }
    }
  },
  {
    tabBarOptions: {
      style: {
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
      }
    }
  }
);

export const createRootNavigator = (loggedIn = false) => {
  return StackNavigator(
    {
      LoggedIn: {
        screen: LoggedIn,
        navigationOptions: {
          gesturesEnabled: false
        }
      },
      LoggedOut: {
        screen: LoggedOut,
        navigationOptions: {
          gesturesEnabled: false
        }
      }
    },
    {
      headerMode: "none",
      mode: "modal",
      initialRouteName: loggedIn ? "LoggedIn" : "LoggedOut"
    }
  );
};
