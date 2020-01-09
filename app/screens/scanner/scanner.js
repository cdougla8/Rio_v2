import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Permissions } from 'expo';
import { Button, FormLabel, FormInput, Icon } from 'react-native-elements';
import ScanForm from 'components/Scanning/ScanForm';
import Barcode from 'components/Scanning/Barcode';
import styles from './styles';
const list = [
	{upc: '"12340398345"'},
	{Asin: 'B002KT3XRQ',
	Url: 'http://ecx.images-amazon.com/images/I/41ty3Sn%2BU8L._SL75_.jpg',
	Title: "Pearl iZUMi Men's Quest Cycling Short"},
	];



export default class UPCScanner extends React.Component {
	constructor(props) {
		super(props);
		this.handler = this.handler.bind(this);
		this.state = {
            messageShown: false,
						hasCameraPermission: null,
				    read: null,
				    data: null
        };

	};
	handler() {
        this.setState({
            messageShown: true
        });
  };

	static navigationOptions = ({ navigation }) => {
				return {
						tabBarVisible: false,
						title: 'Shipments',
						headerStyle: {
							height:80,
						},
						headerTitleStyle: {
							flex: 1,
							textAlign: 'center'
						},
						headerRight: (
							<Icon
							name='settings'
							type='Feather'
							color='#fff'
							onPress={ () => navigation.navigate('Settings')} />
						),
						headerLeft: (
							<Icon
							name='add'
							type='Feather'
							color='#fff'
							onPress={ () => navigation.navigate('NewShipment')} />
						),
				}
};

  componentDidMount() {
    this._requestCameraPermission();
  }

  _requestCameraPermission = async () => {
    const {status} = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermission: status === 'granted'
    });
  };


    render () {
			const { hasCameraPermission } = this.state;
			if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }
        return (
					<View style={styles.container}>
						{
              this.state.data === null
                ? <Barcode />
								: <ScanForm action={this.handler}/>
						}
          </View>

      );
      }
  }
