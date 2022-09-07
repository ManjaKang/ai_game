/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
// import Gamestart from './android/app/src/pages/gamestart/index.tsx';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
// AppRegistry.registerComponent(appName, () => Gamestart);
