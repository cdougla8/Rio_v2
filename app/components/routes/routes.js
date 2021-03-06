import React, { Component } from 'react';
import { styles } from './styles';
import { Scene, Router } from 'react-native-router-flux';
import { connect, Provider } from 'react-redux';

import HomeContainer from 'screens/ActivityScreen';
import ShipmentContainer from 'screens/ShipmentScreen';
import ScannerContainer from 'screens/UPCScannerScreen';
import SessionContainer from 'screens/auth/LoginForm';
import SignupContainer from 'screens/auth/SignupForm';

import configureStore from 'store';

const store = configureStore();
const RouterRedux = connect()(Router);

export default class Routes extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RouterRedux navigationBarStyle={styles.navBar} tintColor="#ffffff" titleStyle={styles.barButtonTextStyle}>
          <Scene key="root">
            <Scene key="login" component={SessionContainer} title="Login" initial={true} />
            <Scene key="signup" component={SignupContainer} title="Signup" />
            <Scene key="home" component={HomeContainer} title="Home" />
            <Scene key="shipment" component={ShipmentContainer} title="Shipment" />
            <Scene key="scanner" component={ScannerContainer} title="Scanner" />
          </Scene>
        </RouterRedux>
      </Provider>
    );
  }
}
