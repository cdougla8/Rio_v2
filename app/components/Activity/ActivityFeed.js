import React from 'react';
import {  View,  FlatList } from 'react-native';
import ListItem from 'containers/FeedItemContainer';
import Feed from 'containers/FeedContainer';

export default class ShipmentFeed extends React.Component {
  renderShipmentCard ({ item }) {
    return (
      <ListItem
        title={item.name}
        subtitle={item.subtitle}
        leftAvatar={{ source: { uri: item.avatar_url } }} />
    )
  }
  render() {
    return (
      <View>
      {/*
        This is where we want to request the feed data.
        Look inside containers/FeedContainer.js for what's required.
        */}
      <Feed
        data={list}
       renderItem = {this.renderShipmentCard}
       keyExtractor = {item => item.id}
       />
      </View>
    )
  }
};

const list = [
  {
    id: '1',
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Added a New Shipment'
  },
  {
    id: '2',
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
  {
    id: '3',
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Added a New Shipment'
  },
  {
    id: '4',
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
  {
    id: '5',
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Added a New Shipment'
  },
  {
    id: '6',
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
];
