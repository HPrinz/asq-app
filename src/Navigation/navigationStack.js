import { StackNavigator, TabNavigator } from "react-navigation";

import Welcome from "../Components/WelcomeScreen";
import Logout from "../Components/LogoutScreen";
import Login from "../Components/LoginScreen";
import AsqScreen from "../Components/AsqScreen";
import ReplyScreen from "../Components/ReplyScreen";
import Notification from "../Components/Notification";

const Tabs = TabNavigator({
  asq: {
    screen: AsqScreen
  },
  reply: {
    screen: ReplyScreen
  },
  logout: {
    screen: Logout
  }
});

const navigator = StackNavigator({
  login: {
    screen: Login
  },
  welcome: {
    screen: Welcome
  },
  logout: {
    screen: Tabs
  }
});

export default navigator;
