const searchQuery = async (query) => {
  const queryData = { productName: query };
  console.log(queryData);
  const response = await fetch('http://localhost:1337/api/v1/search/search-sales', {
    body: JSON.stringify(queryData), // must match 'Content-Type' header
    headers: {
      Accept: 'application/json',
    },
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, cors, *same-origin
  });
  const json = await response.json();
  return json;
};
const searchActions = store => ({
  // Actions can just return a state update:
  updateCurrentSearchText(state, data) {
    console.log(state);
    store.setState({ currentSearchInput: data });
    const searchResponse = searchQuery(data);
    store.setState({ currentSearchInput: searchResponse });
  },
});

export default searchActions;
