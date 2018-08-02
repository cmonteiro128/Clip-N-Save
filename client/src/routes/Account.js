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
        <Grid columns={2}>
          <Grid.Column largeScreen={4} mobile={16}>
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
          <Grid.Column largeScreen={12} mobile={16} widescreen={12} tablet={12}>
            <Header as="h3" align="left">
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
          </Grid.Column>
        </Grid>
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
