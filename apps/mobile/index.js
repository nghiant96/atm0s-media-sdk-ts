/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { setPlatform } from '@atm0s-media-sdk/core';
setPlatform("mobile");
AppRegistry.registerComponent(appName, () => App);
