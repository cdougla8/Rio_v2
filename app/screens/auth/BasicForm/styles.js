import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center'
  },
  textHeader: {
    color: '#88cc88',
    fontSize: 32,
    marginTop: 60
  },
  textBody: {
    color: '#D3D3D3',
    fontSize: 16
  },
  textInput: {
    backgroundColor: '#ffffff',
    padding: 10,
    height: 40,
    margin: 10,
    borderRadius: 5
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    margin: 10,
    borderRadius: 5,
    padding: 3,
    backgroundColor: '#88cc88'
  },
  buttonTitle: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  loginBox: {
    margin: 10
  },
  imageBox: {
    alignItems: 'center',
    marginTop: 20
  },
  image: {
    resizeMode: 'contain',
    width: 120,
    height: 120
  },
  scrollView: {
    backgroundColor: '#000'
  }
});
