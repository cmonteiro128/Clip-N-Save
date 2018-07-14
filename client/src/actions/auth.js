const authActions = store => ({
  setSignedIn: (state, data) => {
    store.setState({ isSignedIn: data });
  },
});

export default authActions;
