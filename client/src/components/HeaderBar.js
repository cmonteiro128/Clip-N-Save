import React, { Component } from 'react';
import { css } from 'emotion';
import { Menu, Search } from 'semantic-ui-react';

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
          name="QSave"
          className={css`
            font-size: 20px;
          `}
        />
        <Menu.Menu position="right">
          <Menu.Item name="" position="right">
            <Search aligned="left" />
          </Menu.Item>
          <Menu.Item
            active={activeItem === 'my account'}
            name="my account"
            onClick={this.handleItemClick}
            position="left"
            className={css`
              font-size: 17px;
            `}
          />
        </Menu.Menu>
      </Menu>
    );
  }
}
