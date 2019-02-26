import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from '../components/Common';
import LoginForm from '../components/Forms/LoginForm';

const styles = {
  containerStyle: {
    marginTop: 10,
    height: 40,
  },
};
export default class Login extends Component {
  state = {
    isLoggedIn: null,
  }

  componentDidMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCD-MWekgcpsAqRuhD2GrOovVZLq4m93KI',
      authDomain: 'albums-authentication.firebaseapp.com',
      databaseURL: 'https://albums-authentication.firebaseio.com',
      projectId: 'albums-authentication',
      storageBucket: 'albums-authentication.appspot.com',
      messagingSenderId: '255093769675',
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          isLoggedIn: true,
        });
      } else {
        this.setState({
          isLoggedIn: false,
        });
      }
    });
  }

  renderContent = () => {
    const { isLoggedIn } = this.state;
    switch (isLoggedIn) {
      case true:
        return (
          <Button
            onPress={() => firebase.auth().signOut()}
          >
            Log out
          </Button>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        <Header title="Authentication" />
        <View style={styles.containerStyle}>
          { this.renderContent() }
        </View>
      </View>
    );
  }
}
