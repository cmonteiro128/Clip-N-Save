import apiCall from './apiCall';

const searchItemActions = store => ({
  getSavedSearchItems: async state => {
    const response = await apiCall(
      'GET',
      'user/saved-searches',
      null,
      state.token
    );
    const savedSearchItems = await response.json();
    store.setState({
      savedSearchItems: savedSearchItems.searchTerms,
      recItems: savedSearchItems.recItems
    });
  },
  addSavedSearchItem: async (state, data) => {
    const response = await apiCall(
      'POST',
      'user/saved-searches',
      data,
      state.token
    );
    const savedSearchItems = await response.json();
    store.setState({
      savedSearchItems: savedSearchItems.searchTerms,
      recItems: savedSearchItems.recItems
    });
  },
  removeSavedSearchItem: async (state, data) => {
    const response = await apiCall(
      'DELETE',
      'user/saved-searches',
      data,
      state.token
    );
    const savedSearchItems = await response.json();
    store.setState({
      savedSearchItems: savedSearchItems.searchTerms,
      recItems: savedSearchItems.recItems
    });
  }
});

export default searchItemActions;
