import React from 'react';
import {  View, StyleSheet } from 'react-native';
import { BarCodeScanner } from 'expo';
import styles from 'screens/scanner/styles';

export default class Barcode extends React.Component {
  _handleBarCodeRead = ({ type, data }) => {
    alert(`Bar code with type ${type} and data ${data} has been scanned!`)
    {/* 1. When the barcode get scanned, we need to use GetMatchingProductForId from the ID scanned
        2. Upon successful response we get back: Product, Identifiers, AttributeSets, SalesRankings
        3. Pass that response data to the ScanForm.js
        More info: http://docs.developer.amazonservices.com/en_US/products/Products_GetMatchingProductForId.html
    */}
  };

  render() {
    return (
      <BarCodeScanner onBarCodeRead={this._handleBarCodeRead}
      style={[StyleSheet.absoluteFill, styles.container]}
      >
      <View style={styles.container}>
          <View style={styles.layerTop}/>
          <View style={styles.layerCenter}>
              <View style={styles.layerLeft}/>
              <View style={styles.focused}/>
              <View style={styles.layerRight}/>
          </View>
          <View style={styles.layerBottom}/>
      </View>
      </BarCodeScanner>
    )
  }
};
