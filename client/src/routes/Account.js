import React from 'react';
import { css } from 'emotion';
import { connect } from 'unistore/react';
import {
  Header,
  Icon,
  Item,
  Grid,
  Card,
  Image,
  Divider
} from 'semantic-ui-react';
import HeaderBar from '../components/HeaderBar';
import authActions from '../actions/auth';
import searchItemActions from '../actions/searchItem';
import combineActions from '../actions/combineActions';
import SavedSearches from '../components/account/SavedSearches';
import SaleCard from '../components/SaleCard';

class Account extends React.Component {
  componentDidMount() {
    this.props.getSavedSearchItems();
  }

  render() {
    const {
      userPhoto,
      userEmail,
      user,
      savedSearchItems,
      addSavedSearchItem,
      removeSavedSearchItem,
      recItems
    } = this.props;

    const recItemCards =
      recItems != null ? (
        recItems.map(element => (
          <SaleCard
            productName={element.productName}
            endDate={element.endDate}
            image={element.image}
            salePrice={element.salePrice}
            storeName={element.storeName}
            best={false}
            isSignedIn
          />
        ))
      ) : (
        <div />
      );

    return (
      <div
        className={css`
          margin-top: 10px;
        `}
      >
        <HeaderBar />
        <Header as="h2" align="center">
          <Header.Content>
            Account Overview
            <Header.Subheader>Manage your searches</Header.Subheader>
          </Header.Content>
        </Header>
        <Divider />
        <Grid columns={2}>
          <Grid.Column largeScreen={4} wideScreen={4} mobile={16}>
            <Header as="h3" align="left">
              <Icon name="user" />User Information
            </Header>
            <Item.Group>
              <Item>
                <Item.Image size="tiny" src={userPhoto} inline centered />
                <Item.Content>
                  <Item.Header as="h2">{user}</Item.Header>
                  <Item.Meta>Email: {userEmail}</Item.Meta>
                </Item.Content>
              </Item>
            </Item.Group>
            <SavedSearches
              savedSearchItems={savedSearchItems}
              addSavedSearchItem={data => addSavedSearchItem(data)}
              removeSavedSearchItem={data => removeSavedSearchItem(data)}
            />
          </Grid.Column>
          <Grid.Column largeScreen={10} mobile={16} widescreen={10} tablet={12}>
            <Header as="h3" align="left">
              <Icon name="star" />Recommended Items
            </Header>
            <Grid columns={3}>{recItemCards}</Grid>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

const allActions = combineActions(authActions, searchItemActions);
export default connect(
  ['user', 'userPhoto', 'userEmail', 'savedSearchItems', 'recItems'],
  allActions
)(Account);
