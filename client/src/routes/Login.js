import React from 'react';
import { css } from 'emotion';
import { connect } from 'unistore/react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/app';
import 'firebase/auth';
import HeaderBar from '../components/HeaderBar';
import authActions from '../actions/auth';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uiConfig: {
        signInFlow: 'popup',
        signInSuccessUrl: '/signedIn',
        signInOptions: [
          firebase.auth.EmailAuthProvider.PROVIDER_ID,
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        ],
        credentialHelper: 'none',
        callbacks: {
          signInSuccessWithAuthResult: () => false,
        },
      },
    };
  }

  // Listen to the Firebase Auth state and set the local state.
  componentDidMount() {
    this.unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged(user => this.props.setSignedIn(!!user));
  }

  render() {
    return (
      <div
        className={css`
          margin-top: 10px;
        `}
      >
        <HeaderBar />
        <p>You are signed out</p>
        <p>Prop isSignedIn: {this.props.isSignedIn.toString()}</p>
        <StyledFirebaseAuth uiConfig={this.state.uiConfig} firebaseAuth={firebase.auth()} />
      </div>
    );
  }
}

export default connect(
  'isSignedIn',
  authActions,
)(Login);
