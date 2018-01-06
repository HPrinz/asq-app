// thanks to  https://github.com/spencercarli/react-navigation-auth-flow/tree/finished-code

import { AsyncStorage } from "react-native";

export const USER_KEY = "auth-key";

export const onLogin = () => AsyncStorage.setItem(USER_KEY, "true");

export const onLogut = () => AsyncStorage.removeItem(USER_KEY);

export const isLoggedIn = () => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(USER_KEY)
      .then(res => {
        resolve(res !== null);
      }).catch(err => reject(err));
  });
};
