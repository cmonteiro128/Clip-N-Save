import React from 'react';
import { css } from 'emotion';
import { connect } from 'unistore/react';
// import { Grid, Message } from 'semantic-ui-react';
import HeaderBar from '../components/HeaderBar';

class SavedDeals extends React.Component {
  componentDidMount() {
    this.props.getSavedSearchItems();
  }

  render() {
    // const { removeSavedSearchItem } = this.props;

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

export default connect(['user', 'userPhoto', 'userEmail', 'savedSearchItems'])(
  SavedDeals
);
