import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { css } from 'emotion';
import firebase from 'firebase/app';
import AuthenticatedRoute from './routes/AuthenticatedRoute';
import UnauthenticatedRoute from './routes/UnauthenticatedRoute';
import Home from './routes/Home';
import Login from './routes/Login';
import Account from './routes/Account';
import SavedDeals from './routes/SavedDeals';

export default class App extends React.Component {
  constructor() {
    super();
    const config = {
      apiKey: 'AIzaSyB9kIA0S8tQYy6jSOd5mT5kqYd17aJIdSo',
      authDomain: 'qsave-e2132.firebaseapp.com'
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <div
        className={css`
          margin-left: 5%;
          margin-right: 5%;
        `}
      >
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <UnauthenticatedRoute path="/login/" component={Login} />
            <AuthenticatedRoute path="/account/" component={Account} />
            <AuthenticatedRoute path="/deals/" component={SavedDeals} />
          </Switch>
        </Router>
      </div>
    );
  }
}
