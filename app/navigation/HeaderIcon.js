import React from "react";
import { Header } from "react-navigation";
import { View, Text, Platform} from "react-native";
import TabBarIcon from 'components/TabBarIcon';

export class HeaderSelector extends React.Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
      <TabBarIcon
        focused={false}
        name={this.props.ios_icon}/>
      <Text></Text>
      </View>
    );
  }
};
