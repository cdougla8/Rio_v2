import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import ShipmentHeader from 'containers/ShipmentProfile/ShipmentHeader';
import ShipmentBody from 'containers/ShipmentProfile/ShipmentBody';

export default class ShipmentScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
      <ShipmentHeader />
      <ShipmentBody />
      </View>
    );
  }

}

