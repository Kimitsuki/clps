/**
 * @format
 */

import {AppRegistry, LogBox} from 'react-native';
import {name as appName} from './app.json';
import Login from './src/component/Login';
import TestSpeedNetwork from './src/component/TestSpeedNetwork';
import ListCellTested from './src/component/ListCellTested';
import { Router } from './src/Router';

LogBox.ignoreAllLogs(true);

AppRegistry.registerComponent(appName, () => Router);
