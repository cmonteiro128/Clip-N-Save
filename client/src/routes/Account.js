import React from 'react';
import { css } from 'emotion';
import { connect } from 'unistore/react';
import HeaderBar from '../components/HeaderBar';

const Account = connect('searchResults')(({ searchResults }) => (
  <div
    className={css`
      margin-top: 10px;
    `}
  >
    <HeaderBar />
    <p>Account page here</p>
  </div>
));
export default Account;
