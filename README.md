# ASQ\* App

**ASQ\*** any question and get immediate answers from people around you who match you and your question best.

This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app).

## TODOs

- [x] integrate Redux for state
- [x] login
- [x] connect to server
- [x] ask questions
- [ ] send *notifications* on new questions
- [x] list *all* questions in ASQ View
- [ ] list *only own* questions in ASQ View
- [ ] list questions to aswer in ANSWER View
- [ ] let user *answer* questions
- [ ] [DEV] extract server URL to env vars
- [ ] styling
- [ ] ask for user interests on first login
- [ ] align notifications to user interests

Maybe
- [ ] test with jest
- [ ] use typescript?

## Installation

- install NodeJS: https://nodejs.org/en/download/
- install Watchman: https://facebook.github.io/watchman/docs/install.html
- to load depenendecies, execute `npm install` in the repository root.

## Start the app

### `npm start`

Runs your app in development mode.

Open it in the [Expo app](https://expo.io) on your phone to view it. It will reload if you save edits to your files, and you will see build errors and logs in the terminal.

Sometimes you may need to reset or clear the React Native packager's cache. To do so, you can pass the `--reset-cache` flag to the start script:

```
npm start -- --reset-cache
# or
yarn start -- --reset-cache
```

#### `npm test`

Runs the [jest](https://github.com/facebook/jest) test runner on your tests.

#### `npm run ios`

Like `npm start`, but also attempts to open your app in the iOS Simulator if you're on a Mac and have it installed.

#### `npm run android`

Like `npm start`, but also attempts to open your app on a connected Android device or emulator. Requires an installation of Android build tools (see [React Native docs](https://facebook.github.io/react-native/docs/getting-started.html) for detailed setup). We also recommend installing Genymotion as your Android emulator. Once you've finished setting up the native build environment, there are two options for making the right copy of `adb` available to Create React Native App:
