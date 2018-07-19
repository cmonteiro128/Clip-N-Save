import React from 'react';
import { css } from 'emotion';
import { connect } from 'unistore/react';
import { Header, Icon, Item, List, Grid, Card, Image } from 'semantic-ui-react';
import HeaderBar from '../components/HeaderBar';
import userActions from '../actions/user';
import authActions from '../actions/auth';

// class Account extends React.Component {
//   componentDidMount() {
//     this.props.getTestInfo();
//   }

//   render() {
//     return (
//       <div
//         className={css`
//           margin-top: 10px;
//         `}
//       >
//         <HeaderBar />
//         <p>Welcome to the account page!</p>
//         <p>Logged in as: {state.userInfo}</p>
//       </div>
//     );
//   }
// }

const Account = connect(
  ['user', 'userPhoto', 'userEmail'],
  authActions
)(({ user, userPhoto, userEmail }) => (
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
    <Header as="h3">
      <Icon name="user" /> Account Information
    </Header>
    <Item.Group>
      <Item>
        <Item.Image size="tiny" src={userPhoto} />
        <Item.Content>
          <Item.Header as="a">{user}</Item.Header>
          <Item.Meta>Description</Item.Meta>
          <Item.Description>
            <List>
              <List.Item>Full Name: {user}</List.Item>
              <List.Item>Email: {userEmail}</List.Item>
              <List.Item>...</List.Item>
            </List>
          </Item.Description>
          <Item.Extra>Additional Details</Item.Extra>
        </Item.Content>
      </Item>
    </Item.Group>
    <Header as="h3">
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
          <a>
            <Icon name="tags" />
            View Deal
          </a>
        </Card.Content>
      </Card>
    </Grid.Column>
    <Header as="h3">
      <Icon name="tags" />Saved Items
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
          <a>
            <Icon name="tags" />
            View Deal
          </a>
        </Card.Content>
      </Card>
    </Grid.Column>
    <Header as="h3">
      <Icon name="search" /> Most Searched Items
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
          <a>
            <Icon name="tags" />
            View Deal
          </a>
        </Card.Content>
      </Card>
    </Grid.Column>
    <br />
  </div>
));

export default connect(
  'isSignedIn',
  userActions
)(Account);
