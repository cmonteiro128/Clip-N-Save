import React from 'react';
import { css } from 'emotion';
import { connect } from 'unistore/react';
import {
  Header,
  Icon,
  List,
  Grid,
  Card,
  Image,
  Divider
} from 'semantic-ui-react';
import HeaderBar from '../components/HeaderBar';
import authActions from '../actions/auth';
import SavedSearches from '../components/account/SavedSearches';

class Account extends React.Component {
  componentDidMount() {
    this.props.getSavedSearchItems();
  }

  render() {
    const { removeSavedSearchItem } = this.props;

    return (
      <div
        className={css`
          margin-top: 10px;
        `}
      >
        <HeaderBar />
      </div>
    );
  }
}

export default connect(
  ['user', 'userPhoto', 'userEmail', 'savedSearchItems'],
  authActions
)(Account);
