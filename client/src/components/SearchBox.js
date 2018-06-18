import React from 'react';
import { Input } from 'semantic-ui-react';
import { connect } from 'unistore/react';
import searchActions from '../actions/search';

const SearchBox = connect(
  'currentSearchInput',
  searchActions,
)(({ updateCurrentSearchText }) => (
  <Input
    icon="food"
    placeholder="Search..."
    aligned="left"
    onChange={(e, { value }) => {
      updateCurrentSearchText(value);
    }}
  />
));

export default SearchBox;
