import React, { Component } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  TouchableHighlight
} from 'react-native';
import styles from './styles';
import { connect } from 'react-redux';
import { Icon, Card ,  Button, FormLabel, FormInput, FormValidationMessage} from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import { writeShipment } from 'actions/firestore/actions';

export class NewShipmentScreen extends React.Component {
  state = { name: '', desc: '', weight: '', cost: '', seller: '0123456789' };

  handleNameChange = name => this.setState({ name });
  handleDescriptionChange = desc => this.setState({ desc });
  handleWeightChange = weight => this.setState({ weight });
  handleCostChange = cost => this.setState({ cost });
  handleSellerChange = seller => this.setState({ seller });
  handleButtonPress = () => {
    const { name, desc, weight, cost, seller } = this.state;
    this.props.shipment(name, desc, weight, cost, seller);
    this.props.navigation.navigate('UPCScanner');
  };

  render() {
    const { name, desc, weight, cost, seller } = this.state;
    const { textInput, button, buttonTitle } = styles;
    return (
      <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

        <TextInput
          style={textInput}
          placeholder="Shipment Name"
          returnKeyType="next"
          autoCapitalize="none"
          onChangeText={this.handleNameChange}
          value={name}
          underlineColorAndroid={'transparent'}
        />

        <TextInput
          style={textInput}
          placeholder="Description"
          returnKeyType="next"
          onChangeText={this.handleDescriptionChange}
          value={desc}
          underlineColorAndroid={'transparent'}
        />

        <TextInput
          style={textInput}
          placeholder="Weight"
          returnKeyType="next"
          autoCapitalize="none"
          onChangeText={this.handleWeightChange}
          value={weight}
          underlineColorAndroid={'transparent'}
        />

        <TextInput
          style={textInput}
          placeholder="Cost"
          returnKeyType="done"
          onChangeText={this.handleCostChange}
          value={cost}
          underlineColorAndroid={'transparent'}
        />

        <TouchableOpacity style={button} onPress={this.handleButtonPress}>
          <Text style={buttonTitle}>Create Shipment & Start Scanning</Text>
        </TouchableOpacity>

      </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = ({ routes, firestoreReducer: { loading, error, data } }) => ({
  routes: routes,
  loading: loading,
  error: error,
  data: data
});

const mapDispatchToProps = {
  shipment: writeShipment
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewShipmentScreen);