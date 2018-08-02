import React from 'react';
import { Input } from 'semantic-ui-react';
import { connect } from 'unistore/react';
import searchActions from '../actions/search';

const SearchBox = connect(
  'currentSearchInput',
  searchActions
)(({ updateCurrentSearchText }) => (
  <div>
    <Input
      icon="food"
      placeholder="Search..."
      aligned="left"
      size="large"
      onChange={(e, { value }) => {
        updateCurrentSearchText(value);
      }}
    />{' '}
    <br />{' '}
  </div>
));

export default SearchBox;
