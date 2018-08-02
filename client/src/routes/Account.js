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
import searchItemActions from '../actions/searchItem';
import combineActions from '../actions/combineActions';
import SavedSearches from '../components/account/SavedSearches';

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
      removeSavedSearchItem
    } = this.props;

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
        <Header as="h3" align="center">
          <Icon name="user" /> Account Information
        </Header>
        <Card.Group centered itemsPerRow={4}>
          <Card>
            <Image src={userPhoto} centered inline />
            <Card.Content>
              <Card.Header>{user}</Card.Header>
              <Card.Meta>
                <span className="date">Description</span>
              </Card.Meta>
              <Card.Description>
                <List>
                  <List.Item>Full Name: {user}</List.Item>
                  <List.Item>Email: {userEmail}</List.Item>
                </List>
              </Card.Description>
            </Card.Content>
            <Card.Content extra />
          </Card>
          <SavedSearches
            savedSearchItems={savedSearchItems}
            addSavedSearchItem={data => addSavedSearchItem(data)}
            removeSavedSearchItem={data => removeSavedSearchItem(data)}
          />
        </Card.Group>
        <br />
        <Divider />
        <Header as="h3" align="center">
          <Icon name="star" />Recommended Items
        </Header>
        <Grid.Column>
          <Card raised>
            <Image src="" height="200em" />
            <Card.Content>
              <Card.Header>
                <span className="date">
                  <Image src="" height="25em" />
                </span>
                <br />
              </Card.Header>
              <Card.Meta />
              <Card.Description>
                <Header as="h3" color="green" />
                <Header as="h4" color="red">
                  Sale Ends:
                </Header>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a href="/#">
                <Icon name="tags" />
                View Deal
              </a>
            </Card.Content>
          </Card>
        </Grid.Column>
        <br />
        <br />
      </div>
    );
  }
}

const allActions = combineActions(authActions, searchItemActions);
export default connect(
  ['user', 'userPhoto', 'userEmail', 'savedSearchItems'],
  allActions
)(Account);
