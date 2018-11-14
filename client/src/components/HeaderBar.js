import React, { Component } from 'react';
import { css } from 'emotion';
import { Menu, Icon, Grid, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
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
            <Menu.Item header>
              <Image
                src="data:image/png;base64,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"
                height="80em"
                centered
                inline
              />
            </Menu.Item>
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
