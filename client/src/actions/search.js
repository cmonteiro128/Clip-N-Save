import apiCall from './apiCall';

const { AbortController } = window;
let controller = new AbortController();
let { signal } = controller;

const searchQuery = async query => {
  const queryData = { productName: query };

  controller = new AbortController();
  ({ signal } = controller);

  let response;
  try {
    response = await apiCall(
      'POST',
      'search/search-sales',
      queryData,
      null,
      signal
    );
  } catch (e) {
    return [];
  }
  const json = await response.json();
  // console.log(json);
  return json;
};

const searchActions = store => ({
  // Actions can just return a state update:
  updateCurrentSearchText: async (state, data) => {
    store.setState({ currentSearchInput: data });
    controller.abort();
    const results = await searchQuery(data);
    // const sortedCards = results.sort((a, b) => a._source.salePrice - b._source.salePrice);
    store.setState({ searchResults: results });
  }
});

export default searchActions;
