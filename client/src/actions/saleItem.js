import apiCall from './apiCall';

const saleItemActions = store => ({
  getSavedSaleItems: async state => {
    const response = await apiCall(
      'GET',
      'user/saved-items',
      null,
      state.token
    );
    const savedSaleItems = await response.json();
    store.setState({ savedSaleItems });
  },
  addSavedSaleItem: async (state, data) => {
    const response = await apiCall(
      'POST',
      'user/saved-items',
      data,
      state.token
    );
    const savedSaleItems = await response.json();
    store.setState({ savedSaleItems });
  },
  removeSavedSaleItem: async (state, data) => {
    const response = await apiCall(
      'DELETE',
      'user/saved-items',
      data,
      state.token
    );
    const savedSaleItems = await response.json();
    store.setState({ savedSaleItems });
  }
});

export default saleItemActions;
