import React from 'react';
import {  View,  FlatList } from 'react-native';
import Feed from 'containers/FeedContainer';
import ShipmentCard from './ShipmentCard';

export default class ShipmentFeed extends React.Component {
  renderShipmentCard ({ item }) {
    return (
      <ShipmentCard
        title={item.name}
        id={item.id}
        subtitle={item.subtitle}
      />
    )
  }

  render() {
    return (
      <View>
      {/* This is where we want to request the feed data.
        Look inside containers/FeedContainer.js for what's required.
        */}
      <Feed
       renderItem = {this.renderShipmentCard}
       keyExtractor = {item => item.id}
       />
      </View>
    )
  }
};
