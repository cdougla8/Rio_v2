import React from 'react';
import { Icon, Card, Text, Divider, Button } from 'react-native-elements';
import { View, Dimensions, StyleSheet, Platform } from 'react-native';
import PropTypes from 'prop-types';

const CardHeader = props => {
  const {
    title,
    subtitle,
    ...attributes
  } = props;
  return (
    <View style={styles.container}{...attributes}>
        <View style={styles.leftHeaderContainer}>
            <Text style= {styles.title}>{title}</Text>
            <Text style= {styles.subtitle}>{subtitle}</Text>
        </View>
        <View style={{marginRight: 15}}>
        <Icon name='more-vertical' type='feather'/>
        </View>
        {/* To Do -- Add navigation to Shipment Profile */}

    </View>
  );
};

CardHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

CardHeader.defaultProps = {
  title: "L'Oreal",
  subtitle: 'In Progress',
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'flex-start',
    marginHorizontal: 15,
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
  leftHeaderContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignContent: 'flex-end',
  },
  title: {color:'black', fontWeight: 'bold', fontSize: 24, paddingLeft: 15},
  subtitle: {color:'black', fontSize: 14, paddingLeft: 15, fontStyle: 'italic'}
});


export default CardHeader;
