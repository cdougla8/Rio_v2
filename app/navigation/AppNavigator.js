import React from 'react';
import { createSwitchNavigator } from 'react-navigation';

import LoginScreen from 'screens/auth/LoginForm';
import SignupScreen from 'screens/auth/SignupForm';
import MainTabNavigator from './MainTabNavigator';

export default createSwitchNavigator({
  Login: LoginScreen,
  Signup: SignupScreen,
  Main: MainTabNavigator,
});
