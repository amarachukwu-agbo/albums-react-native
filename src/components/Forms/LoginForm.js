import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import {
  Card, CardSection, Button, Input, Spinner,
} from '../Common';

const styles = {
  errorStyle: {
    color: 'red',
    fontSize: 20,
    alignSelf: 'center',
  },
};
class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    isLoading: false,
  };

  onPress = () => {
    const { email, password } = this.state;
    this.setState({ error: '', isLoading: true }); // clear error state

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess()) // sign up user
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess())
          .catch(this.onLoginFailure());
      });
  }

  onLoginSuccess = () => {
    this.setState({
      error: '',
      isLoading: false,
      password: '',
      email: '',
    });
  }

  onLoginFailure = () => {
    this.setState({
      error: 'Authentication failed.',
      isLoading: false,
    });
  }

  renderButton = () => {
    const { isLoading } = this.state;
    if (isLoading) {
      return <Spinner size="small" />;
    }
    return (
      <Button onPress={this.onPress}>
        Log In
      </Button>
    );
  }

  render() {
    const { email, password, error } = this.state;
    const { errorStyle } = styles;
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="user@gmail.com"
            value={email}
            onChangeText={text => this.setState({ email: text })}
            label="Email"
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            placeholder="PAssw0rd"
            value={password}
            onChangeText={text => this.setState({ password: text })}
            label="Password"
          />
        </CardSection>
        <Text style={errorStyle}>
          {error}
        </Text>
        <CardSection>
          { this.renderButton() }
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
