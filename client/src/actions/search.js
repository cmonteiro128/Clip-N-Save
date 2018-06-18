const searchQuery = async (query) => {
  const queryData = `{ "productName": "${query}" }`;
  console.log(queryData);
  const response = await fetch('http://localhost:1337/api/v1/search/search-sales', {
    body: queryData, // must match 'Content-Type' header
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, same-origin, *omit
    headers: {
      'user-agent': 'Mozilla/4.0 MDN Example',
      'content-type': 'application/json',
    },
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, cors, *same-origin
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer', // *client, no-referrer
  });
  console.log(`Response${response}`);
  return response;
};
const searchActions = store => ({
  // Actions can just return a state update:
  updateCurrentSearchText(state, data) {
    console.log(state);
    store.setState({ currentSearchInput: data });
    console.log(searchQuery(data));
  },
});

export default searchActions;
