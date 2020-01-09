import React from 'react';
import {  View,  Image, Text, StyleSheet } from 'react-native';
import {  FormLabel,  FormInput, Button} from 'react-native-elements';
import styles from 'screens/scanner/styles';

export default class ScanForm extends React.Component {
  addInventoryAndKeepScanning = () => {
    {/* 1. Update the Shipment Inventory List
        2. Action to update parent props to start scanning again
      */}
    }
  addInventoryAndFinish = () => {
    {/* 1. Update the Shipment Inventory List
        2. Go to Individual Shipment Screen
      */}
    }

  cancelItem = () => {
      {/* Go back to scanning screen
      */}
      }


  render() {
    return (
      <View style={styles.container}>
          <View style={styles.layerTop}/>
          <View style={styles.layerCenter}>
          <View style={styles.layerLeft}/>
          <Image
            style={{width: 75, height: 51}}
            source={{uri: 'http://ecx.images-amazon.com/images/I/51MU5VilKpL._SL75_.jpg'}}
          />
          <FormLabel>Item Name</FormLabel>
          <FormInput
            value = "Testing"
            editable={false}
            />
          <FormLabel>Item Name</FormLabel>
          <FormInput
            value = "Scholastic Paperbacks"
            editable={false}
          />
          <FormLabel>UPC Number</FormLabel>
          <FormInput
            value = {this.props.data}
            />
            <FormLabel>Quantity</FormLabel>
            <FormInput
            value = {this.props.quantity}
            />
            <Button
            raised
            icon={{name: 'cached'}}
            title='BUTTON WITH ICON' />
          <Button
          raised
          icon={{name: 'add'}}
          title='Add to Inventory and Keep Scanning'
          backgroundColor= '#21C293'
          color= 'white'
          onPress={this.addInventoryAndKeepScanning}/>
          <View style={styles.layerRight}/>
          </View>
          <View style={styles.layerBottom}/>
      </View>
    )
  }
};
