import React from 'react';
import {  View, StyleSheet, Image } from 'react-native';
import { Text } from 'react-native-elements';

const ShipmentBody = props => {
  const {
    ...attributes
  } = props;
  return (
    <View {...attributes} style={styles.header}>
    <Image style={styles.avatar} source={
      __DEV__
        ? require('images/robot-dev.png')
        : require('images/robot-prod.png')
    }/>
  </View>
  );
};

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#00BFFF",
    height:200,
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:110,
    flex: 1
  },
});


export default ShipmentBody;
