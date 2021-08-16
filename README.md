# testapp-bloom-RN

A simple react-native app showing how to implement pin login with react native.

## How to run

### 1. Install dependencies

`$ npm install` - if you use npm
`$ yarn` - if you use yarn

### 2. Running the app

On ios:
`$ npx react-native run-ios`
This will attempt to open your app in the iOS Simulator if you're on a Mac and have it installed

On android:
`$ npx react-native run-android`
This will attempt to open your app on a connected Android device or emulator.
Requires an installation of Android build tools (see React Native docs for detailed setup).

### 3. Run the tests

This command will run the jest test runner on your tests

`$ npm test` - if you use npm
`$ yarn test` - if you use yarn

### 4. Server calls

The app connects to a server to retrieve the logn token and to logout.
Th server is hosted on heroku at [https://login-server-rn.herokuapp.com](https://login-server-rn.herokuapp.com)
