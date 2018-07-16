import React from 'react';
import { css } from 'emotion';
import { connect } from 'unistore/react';
import HeaderBar from '../components/HeaderBar';
import userActions from '../actions/user';

class Account extends React.Component {
  componentDidMount() {
    this.props.getTestInfo();
  }

  render() {
    return (
      <div
        className={css`
          margin-top: 10px;
        `}
      >
        <HeaderBar />
        <p>Welcome to the account page!</p>
      </div>
    );
  }
}

export default connect(
  'isSignedIn',
  userActions,
)(Account);
