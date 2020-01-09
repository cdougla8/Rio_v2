import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Button,
  TouchableHighlight
} from 'react-native';
import  KeysButtons  from 'components/KeysButtons';
import styles from './styles';
import { Icon, Card } from 'react-native-elements';
import ActivityFeed from 'components/Activity/ActivityFeed';

export default class ActivityScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const LogoTitle = props => {
      const {
        ...attributes
      } = props;
      return (
        <Image
          source={
            __DEV__
              ? require('images/bullet.png')
              : require('images/bullet.png')
          }
          style={{ width: 30, height: 30 }}
        />
      );
    };

    return {
    // headerTitle instead of title
    headerTitle: <LogoTitle />,
    headerLeft: (
      <View style={{marginLeft: 15}}>
      <Icon name='user' type='feather'
      onPress={ () => navigation.navigate('Settings')} />
      </View>
    ),
      }
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <ActivityFeed/>
        </ScrollView>
      </View>
    );
  }
}
