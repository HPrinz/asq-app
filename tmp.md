# temporary content to remember and add

## Writing and Running Tests

TODO 

This project is set up to use [jest](https://facebook.github.io/jest/) for tests. You can configure whatever testing strategy you like, but jest works out of the box. Create test files in directories called `__tests__` or with the `.test` extension to have the files loaded by jest. See the [the template project](https://github.com/react-community/create-react-native-app/blob/master/react-native-scripts/template/App.test.js) for an example test. The [jest documentation](https://facebook.github.io/jest/docs/en/getting-started.html) is also a wonderful resource, as is the [React Native testing tutorial](https://facebook.github.io/jest/docs/en/tutorial-react-native.html).

## Sharing and Deployment

TODO 

Create React Native App does a lot of work to make app setup and development simple and straightforward, but it's very difficult to do the same for deploying to Apple's App Store or Google's Play Store without relying on a hosted service.

### Publishing to Expo's React Native Community

Expo provides free hosting for the JS-only apps created by CRNA, allowing you to share your app through the Expo client app. This requires registration for an Expo account.

Install the `exp` command-line tool, and run the publish command:

```
$ npm i -g exp
$ exp publish
```

### Building an Expo "standalone" app

You can also use a service like [Expo's standalone builds](https://docs.expo.io/versions/latest/guides/building-standalone-apps.html) if you want to get an IPA/APK for distribution without having to build the native code yourself.

#### Should I Use ExpoKit?

If you have made use of Expo APIs while working on your project, then those API calls will stop working if you eject to a regular React Native project. If you want to continue using those APIs, you can eject to "React Native + ExpoKit" which will still allow you to build your own native code and continue using the Expo APIs. See the [ejecting guide](https://github.com/react-community/create-react-native-app/blob/master/EJECTING.md) for more details about this option.

## Resources

https://medium.com/differential/react-native-push-notifications-with-onesignal-9db6a7d75e1e
https://codingislove.com/top-15-react-native-libraries/
https://github.com/infinitered/ignite
https://github.com/bartonhammond/snowflake
https://facebook.github.io/immutable-js/
https://redux.js.org/
https://github.com/hsavit1/Awesome-React-Native-Education#great-sites
https://code.tutsplus.com/series/common-react-native-app-layouts--cms-1113
https://www.youtube.com/watch?time_continue=20&v=pugPxYH96TU
https://egghead.io/courses/react-native-fundamentals
https://egghead.io/courses/the-beginner-s-guide-to-reactjs
