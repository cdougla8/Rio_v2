import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';

const CardBody = props => {
  const {
    ...attributes
  } = props;
  return (
    <View {...attributes} style={styles.container}>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'flex-start',
    ...Platform.select({
      ios: {
        // shadowColor: 'rgba(0,0,0, .2)',
        // shadowOffset: { height: 1, width: 0 },
        // shadowOpacity: 0.5,
        // shadowRadius: 0.5,
      },
      android: {
        // elevation: 1,
      },
    }),
  },
});


export default CardBody;
