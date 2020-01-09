import PropTypes from 'prop-types';
import React from 'react';
import { View, StyleSheet, Platform, ViewPropTypes as RNViewPropTypes } from 'react-native';
const ViewPropTypes = RNViewPropTypes || View.propTypes;
import { Text, Button } from 'react-native-elements';

const CardItem = props => {
  const {
    containerStyle,
    wrapperStyle,
    title,
    price,
    info,
    button,
    color,
    titleFont,
    pricingFont,
    infoFont,
    buttonFont,
    onButtonPress,
    ...attributes
  } = props;
  return (
    <View
      {...attributes}
      style={[styles.container, containerStyle && containerStyle]}
    >
      <View style={[styles.wrapper, wrapperStyle && wrapperStyle]}>
        <Text
          style={[
            styles.pricingTitle,
            { color },
            titleFont && { fontFamily: titleFont },
          ]}
        >
          {title}
        </Text>
        <Text
          style={[
            styles.pricingPrice,
            pricingFont && { fontFamily: pricingFont },
          ]}
        >
          {price}
        </Text>
        {info.map((item, i) => {
          return (
            <Text
              key={i}
              style={[styles.pricingInfo, infoFont && { fontFamily: infoFont }]}
            >
              {item}
            </Text>
          );
        })}
        <Button
          icon={{ name: button.icon }}
          buttonStyle={[
            styles.button,
            button.buttonStyle,
            { backgroundColor: color },
          ]}
          fontFamily={buttonFont && buttonFont}
          title={button.title}
          onPress={onButtonPress}
        />
      </View>
    </View>
  );
};

CardItem.propTypes = {
  containerStyle: ViewPropTypes.style,
  wrapperStyle: ViewPropTypes.style,
  title: PropTypes.string,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  info: PropTypes.array,
  button: PropTypes.object,
  color: PropTypes.string,
  onButtonPress: PropTypes.any,
  titleFont: PropTypes.string,
  pricingFont: PropTypes.string,
  infoFont: PropTypes.string,
  buttonFont: PropTypes.string,
};

const styles = StyleSheet.create({
  container: {
    margin: 15,
    marginBottom: 15,
    backgroundColor: 'white',
    padding: 15,
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0,0,0, .2)',
        shadowOffset: { height: 1, width: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 0.5,
      },
      android: {
        elevation: 1,
      },
    }),
  },
  wrapper: {
    backgroundColor: 'transparent',
  },
  pricingTitle: {
    textAlign: 'center',
    fontSize: 30,
    ...Platform.select({
      ios: {
        fontWeight: '800',
      },
      android: {
      },
    }),
  },
  pricingPrice: {
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
    fontSize: 40,
    ...Platform.select({
      ios: {
        fontWeight: '700',
      },
      android: {
      },
    }),
  },
  pricingInfo: {
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 5,
    ...Platform.select({
      ios: {
        fontWeight: '600',
      },
      android: {
      },
    }),
  },
  button: {
    marginTop: 15,
    marginBottom: 10,
  },
});

export default CardItem;
