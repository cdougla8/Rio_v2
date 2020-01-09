import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import LoginScreen from 'screens/auth/LoginForm';
import SignupScreen from 'screens/auth/SignupForm';
import ShipmentScreen from 'screens/shipment';
import NewShipmentScreen from 'screens/shipment/create_shipment'
import UPCScannerScreen from 'screens/scanner';
import ShipmentFeedScreen from 'screens/newsfeed';
import ActivityScreen from 'screens/activity';
import AnalyticsScreen from 'screens/analytics';
import SettingsScreen from 'screens/settings';
import SearchScreen from 'screens/search';
import { Icon } from 'react-native-elements';

const ShipmentsStack = createStackNavigator(
  {
    ShipmentFeed: ShipmentFeedScreen,
    Activity: ActivityScreen,
    Search: SearchScreen,
    UPCScanner: UPCScannerScreen,
    Analytics: AnalyticsScreen
  },
);

ShipmentsStack.navigationOptions = {
  tabBarLabel: 'Shipments',
  tabBarOptions: {
    showLabel: false,
    activeTintColor: '#e91e63',
    style: {
    },
  },
  tabBarIcon: ({ focused }) => (
    <Icon name='shopping-bag' type='feather' />
  ),
};

const NewShipmentStack = createStackNavigator(
  {
    NewShipment: NewShipmentScreen,
    UPCScanner: UPCScannerScreen,
  },
);

NewShipmentStack.navigationOptions = {
  tabBarLabel: 'New Shipment',
  tabBarOptions: {
    showLabel: false,
    activeTintColor: '#e91e63',
    style: {
    },
  },
  tabBarIcon: ({ focused }) => (
    <Icon name='add-to-list' type='entypo'/>
  ),
};

const ActivityStack = createStackNavigator({
  Activity: ActivityScreen,
});

ActivityStack.navigationOptions = {
  tabBarLabel: 'Activity',
  tabBarOptions: {
    showLabel: false,
    activeTintColor: '#e91e63',
    labelStyle: {
      fontSize: 14,
    },
    style: {
    },
  },
  tabBarIcon: ({ focused }) => (
    <Icon name='bell' type='feather' />
  ),
};

const AnalyticsStack = createStackNavigator({
  Settings: SettingsScreen,
});

AnalyticsStack.navigationOptions = {
  tabBarLabel: 'Analytics',
  tabBarOptions: {
    showLabel: false,
    activeTintColor: '#e91e63',
    labelStyle: {
      fontSize: 14,
    },
    style: {
    },
  },
  tabBarIcon: ({ focused }) => (
    <Icon name='bar-chart-2' type='feather' />
  ),
};

const SearchStack = createStackNavigator({
  Search: SearchScreen,
});

SearchStack.navigationOptions = {
  tabBarLabel: 'Analytics',
  tabBarOptions: {
    showLabel: false,
    activeTintColor: '#e91e63',
    labelStyle: {
      fontSize: 14,
    },
    style: {
    },
  },
  tabBarIcon: ({ focused }) => (
    <Icon name='search' type='feather' />
  ),
};

export default createBottomTabNavigator({
  ShipmentsStack,
  ActivityStack,
  SearchStack,
  NewShipmentStack,
  AnalyticsStack,
});
