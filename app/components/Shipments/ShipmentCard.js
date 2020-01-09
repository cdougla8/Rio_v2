import React from 'react';
import { Icon, Card, Divider} from 'react-native-elements';
import {  View,  FlatList,  Dimensions,  StyleSheet,  Platform, Text } from 'react-native';
const SCREEN_WIDTH = Dimensions.get('window').width;
import CardItem from 'containers/CardItemContainer'
import CardHeader from 'containers/CardHeaderContainer'
import CardBody from 'containers/CardBodyContainer'
import Slider from 'containers/SliderContainer';
import Swiper from 'react-native-swiper';

const list = [
  {id: '1', title: 'Revenue'},
  {id: '2', title: 'Cost'},
  {id: '3', title: 'Sales'},
  {id: '4', title: 'Sales'},
  {id: '5'},
  {id: '6'}
];


export default class ShipmentCard extends React.Component {
  renderShipmentCard () {
    return list.map(function(news, i){
    return(
      <View key={i}>
      <CardItem
        color='#4f9deb'
        title='Revenue'
        price='$0'
        info={['1 User', 'Basic Support', 'All Core Features']}
        button={{ title: 'More Info', icon: 'rowing' }}
      />
      </View>
    );
  });
}

  render() {
    return (
      <View style={styles.container}>
      {/* This is where we want to request the feed data.
        Look inside containers/FeedContainer.js for what's required.
        */}
      <CardHeader
        title={this.props.title}
        subtitle={this.props.subtitle}
      />
      <CardBody>
      <Swiper height={400} loadMinimal loadMinimalSize={1} loop={false} style={styles.wrapper}
      showsPagination={false}>
        {this.renderShipmentCard()}
      </Swiper>
        </CardBody>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'stretch',
    backgroundColor: '#FFFF',
    justifyContent: 'space-between',
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
