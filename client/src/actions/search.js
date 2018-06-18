const searchQuery = async (query) => {
  const queryData = { productName: query };
  const response = await fetch('http://localhost:1337/api/v1/search/search-sales', {
    body: JSON.stringify(queryData), // must match 'Content-Type' header
    headers: {
      Accept: 'application/json',
    },
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, cors, *same-origin
  });
  const json = await response.json();
  console.log(json);
  return json;
};
const searchActions = store => ({
  // Actions can just return a state update:
  async updateCurrentSearchText(state, data) {
    store.setState({ currentSearchInput: data });
    const results = await searchQuery(data);
    const sortedCards = results.sort((a, b) => a._source.salePrice - b._source.salePrice);
    store.setState({ searchResults: sortedCards });
  },
});

export default searchActions;
