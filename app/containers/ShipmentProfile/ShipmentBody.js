import React from 'react';
import {  View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';

const ShipmentBody = props => {
  const {
    ...attributes
  } = props;
  return (
    <View {...attributes} style={styles.body}>
        <Text style={styles.name}>Shipment Name</Text>
        <Text style={styles.info}>Shipment Description</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body:{
    alignItems: 'center',
    height: 5000,
    padding: 70
  },
  name:{
    fontSize:28,
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    marginTop:10
  },
});


export default ShipmentBody;
