import React, { Component } from 'react';
import { css } from 'emotion';
import { Menu, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import SearchBox from './SearchBox';

export default class HeaderBar extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    return (
      <Menu
        color="teal"
        inverted
        borderless
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
            active={activeItem === 'search deals'}
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
            active={activeItem === 'saved deals'}
            link
            className={css`
              font-size: 17px;
              height: 100%;
            `}
            name="saved deals"
            position="left"
          />
        </Link>
        <Menu.Menu position="right">
          <Menu.Item name="" position="right">
            <SearchBox />
          </Menu.Item>
          <Link to="/account" href="/account">
            <Menu.Item
              active={activeItem === 'my account'}
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
            >
              <Icon name="log out" />
            </Menu.Item>
          </Link>
        </Menu.Menu>
      </Menu>
    );
  }
}
