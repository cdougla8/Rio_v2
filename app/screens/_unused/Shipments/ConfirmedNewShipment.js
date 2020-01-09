import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  TouchableHighlight
} from 'react-native';
import styles from 'styles/styles';
import { Overlay} from 'react-native-elements';

export default class NewShipmentConfirmation extends React.Component {
  render() {
    // UPCScanners = this.props.navigation.navigate('UPCScanner');
    return (
      <View style={styles.container}>
      <Overlay isVisible={this.state.isVisible}>
        <Text>Hello from Overlay!</Text>
      </Overlay>;

      {
        this.state.visible && (
          <Overlay isVisible>
            <Text>Hello from Overlay!</Text>
          </Overlay>
        );
      }

      <Overlay
        isVisible={this.state.isVisible}
        windowBackgroundColor="rgba(255, 255, 255, .5)"
        overlayBackgroundColor="red"
        width="auto"
        height="auto"
      >
        <Text>Hello from Overlay!</Text>
      </Overlay>;

      <Overlay
        isVisible={this.state.isVisible}
        onBackdropPress={() => this.setState({isVisible: false})}
      >
        <Text>Hello from Overlay!</Text>
      </Overlay>;
            </View>
    );
  }
}
