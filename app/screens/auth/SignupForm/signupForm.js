import React, { Component } from 'react';
import { View, Text, Alert, Image, Button } from 'react-native';
import { connect } from 'react-redux';
import { BasicFormComponent } from '../BasicForm/basicForm';
import { LoadingIndicator } from 'components/loadingIndicator/loadingIndicator';
import { styles } from '../BasicForm/styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Actions } from 'react-native-router-flux';
import { signupUser } from 'actions/session/actions';

const RIO_LOGO = require('icons/rio-icon.png');

class SignupFormComponent extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.registered) Actions.reset('home');
  }

  render() {
    const { signup, loading } = this.props;
    const { scrollView, imageBox, image, loginBox, textHeader, textBody } = styles;
    return (
      <KeyboardAwareScrollView style={scrollView}>
        <View style={imageBox}>
          <Text style={textHeader}>Welcome to Rio</Text>
          <Text style={textBody}>By Carbon Inc.</Text>
          <Text></Text>
          <Image style={image} source={RIO_LOGO} />
        </View>
        <View style={loginBox}>
          {loading ? (
            <LoadingIndicator color="#ffffff" size="large" />
          ) : (
            <BasicFormComponent buttonTitle={'Signup'} onButtonPress={signup} />
          )}
        </View>
        <View>{loading ? null : <Button onPress={() => this.props.navigation.navigate('Login')}//{Actions.signup} 
                                        title="Login" color="#88cc88"/>}</View>
      </KeyboardAwareScrollView>
    );
  }
}

const mapStateToProps = ({ routes, sessionReducer: { loading, error, registered } }) => ({
  routes: routes,
  loading: loading,
  error: error,
  registered: registered
});

const mapDispatchToProps = {
  signup: signupUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupFormComponent);
