import firebase from 'firebase/app';
import 'firebase/auth';
import baseURL from '../environments';

const getUserDataRequest = async () => {
  if (firebase.auth().currentUser) {
    firebase
      .auth()
      .currentUser.getIdToken(/* forceRefresh */ true)
      .then(async (idToken) => {
        const response = await fetch(`${baseURL}api/v1/user/user-info`, {
          headers: {
            Accept: 'application/json',
            token: idToken,
          },
          method: 'GET', // *GET, POST, PUT, DELETE, etc.
          mode: 'cors', // no-cors, cors, *same-origin
        });
        const json = await response.json();
        console.log(json);
        return json;
      });
  }
};

const userActions = store => ({
  getTestInfo: () => {
    getUserDataRequest();
  },
});

export default userActions;
