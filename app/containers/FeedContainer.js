import React from 'react';
import { View, FlatList } from 'react-native';
import PropTypes from 'prop-types';

const list = [
  {
    id: '1',
    title: 'Shipment Name',
    subtitle: 'In Progress'
  },
  {
    id: '2',
    name: 'Shipment 3',
    subtitle: 'Shipped'
  },
  {
    id: '3',
    name: 'Shipment 3',
    subtitle: 'Selling'
  },
  {
    id: '4',
    name: 'Shipment 4',
    subtitle: 'Selling'
  },
  {
    id: '5',
    name: 'Shipment 5',
    subtitle: 'Selling'
  }
];


const Feed = props => {
  const {
    action,
    data,
    renderItem,
    keyExtractor,
    ...attributes
  } = props;
  return (
    <View {...attributes}>
    <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};

Feed.propTypes = {
  action: PropTypes.string,
  data: PropTypes.any,
  renderItem: PropTypes.any,
  keyExtractor: PropTypes.any
};

Feed.defaultProps = {
  data: list
};

export default Feed;
