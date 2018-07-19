import baseURL from '../environments';

const searchQuery = async query => {
  const queryData = { productName: query };
  const response = await fetch(`${baseURL}api/v1/search/search-sales`, {
    body: JSON.stringify(queryData), // must match 'Content-Type' header
    headers: {
      Accept: 'application/json'
    },
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors' // no-cors, cors, *same-origin
  });
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
