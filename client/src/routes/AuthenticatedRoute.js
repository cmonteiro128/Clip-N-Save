import React from 'react';
import { connect } from 'unistore/react';
import { Route, Redirect } from 'react-router-dom';

const AuthenticatedRoute = connect('isSignedIn')(({ component: Component, isSignedIn, ...rest }) => {
  if (rest.isSignedIn) {
    return <Route {...rest} render={matchProps => <Component matchProps={matchProps} />} />;
  }
  return <Route {...rest} render={() => <Redirect to="/login" />} />;
});

export default AuthenticatedRoute;
