import firebase from 'firebase/app';
import 'firebase/auth';
import apiCall from './apiCall';

const authActions = store => ({
  setSignedIn: async (state, data) => {
    if (firebase.auth().currentUser) {
      const idToken = await firebase
        .auth()
        .currentUser.getIdToken(/* forceRefresh */ true);
      const response = await apiCall('GET', 'user/user-info', null, idToken);
      const json = await response.json();
      console.log(json);
      store.setState({
        user: json.user.displayName,
        userPhoto: json.user.photoURL,
        userEmail: json.user.email,
        token: idToken,
        isSignedIn: data
      });

      // DB check of data
      const dbCheckResponse = await apiCall(
        'POST',
        'user/check-user',
        null,
        idToken
      );
      const userJSON = await dbCheckResponse.json();
      console.log(userJSON);
    }
  },
  getSavedSearchItems: async state => {
    const response = await apiCall(
      'GET',
      'user/saved-searches',
      null,
      state.token
    );
    const savedSearchItems = await response.json();
    store.setState({ savedSearchItems });
  },
  addSavedSearchItem: async (state, data) => {
    const response = await apiCall(
      'POST',
      'user/saved-searches',
      data,
      state.token
    );
    const savedSearchItems = await response.json();
    store.setState({ savedSearchItems });
  },
  removeSavedSearchItem: async (state, data) => {
    const response = await apiCall(
      'DELETE',
      'user/saved-searches',
      data,
      state.token
    );
    const savedSearchItems = await response.json();
    store.setState({ savedSearchItems });
  }
});

export default authActions;
