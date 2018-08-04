import createStore from 'unistore';
import devtools from 'unistore/devtools';

const initialState = {
  currentSearchInput: '',
  isSignedIn: false,
  searchResults: [],
  user: '',
  userPhoto: '',
  userEmail: '',
  savedSearchItems: [],
  recItems: []
};

const store =
  process.env.NODE_ENV === 'production'
    ? createStore(initialState)
    : devtools(createStore(initialState));

export default store;
