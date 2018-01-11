import { StackNavigator, TabNavigator } from "react-navigation";

import Welcome from "../Components/WelcomeScreen";
import Logout from "../Components/LogoutScreen";
import Login from "../Components/LoginScreen";
import Feed from "../Components/Feed";
import Notification from "../Components/Notification";

const Tabs = TabNavigator({
  feed: {
    screen: Feed
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
