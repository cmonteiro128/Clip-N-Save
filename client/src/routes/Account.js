import React from 'react';
import { connect } from 'unistore/react';
import HeaderBar from '../components/HeaderBar';
import authActions from '../actions/auth';

class Account extends React.Component {
  render() {
    return (
      <div>
        <HeaderBar />
        <p>Welcome to the account page!</p>
      </div>
    );
  }
}

export default connect(
  'isSignedIn',
  authActions,
)(Account);
