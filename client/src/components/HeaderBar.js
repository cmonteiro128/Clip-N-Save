import React, { Component } from 'react';
import { css } from 'emotion';
import { Menu, Icon, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import firebase from 'firebase';
import { connect } from 'unistore/react';
import SearchBox from './SearchBox';
import authActions from '../actions/auth';

class HeaderBar extends Component {
  constructor() {
    super();
    this.state = { activeItem: window.location.pathname };
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    return (
      <Grid>
        <Grid.Column mobile={16}>
          <Menu
            color="teal"
            inverted
            borderless
            stackable
            size="small"
            className={css`
              margin: 0 auto !important;
            `}
          >
            <Menu.Item
              header
              name="Clip N Save"
              className={css`
                font-size: 20px;
              `}
            />
            <Link to="/" href="/">
              <Menu.Item
                active={activeItem === '/'}
                link
                className={css`
                  font-size: 17px;
                  height: 100%;
                `}
                name="search deals"
                position="left"
              />
            </Link>
            <Link to="/deals" href="/deals">
              <Menu.Item
                active={activeItem === '/deals'}
                link
                className={css`
                  font-size: 17px;
                  height: 100%;
                `}
                name="saved deals"
                position="left"
              />
            </Link>
            <Link to="/account" href="/account">
              <Menu.Item
                active={activeItem === '/account'}
                link
                className={css`
                  font-size: 17px;
                  height: 100%;
                `}
                name="my account"
                position="left"
              />
            </Link>
            <Link to="/login" href="/login">
              <Menu.Item
                active={activeItem === 'sign out'}
                link
                className={css`
                  font-size: 17px;
                  height: 100%;
                `}
                name="sign out"
                position="left"
                onClick={() => {
                  firebase.auth().signOut();
                  this.props.setSignedIn(false);
                }}
              >
                <Icon name="log out" />
              </Menu.Item>
            </Link>
            <Menu.Menu position="right">
              <Menu.Item name="" position="right">
                <SearchBox />
              </Menu.Item>
            </Menu.Menu>
          </Menu>
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect(
  'isSignedIn',
  authActions
)(HeaderBar);
