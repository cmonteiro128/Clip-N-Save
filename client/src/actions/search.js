import apiCall from './apiCall';

const searchQuery = async query => {
  const queryData = { productName: query };
  const response = await apiCall('POST', 'search/search-sales', queryData);
  const json = await response.json();
  console.log(json);
  return json;
};

const searchActions = store => ({
  // Actions can just return a state update:
  updateCurrentSearchText: async (state, data) => {
    store.setState({ currentSearchInput: data });
    const results = await searchQuery(data);
    // const sortedCards = results.sort((a, b) => a._source.salePrice - b._source.salePrice);
    store.setState({ searchResults: results });
  }
});

export default searchActions;
