import React from 'react';
import { connect } from 'unistore/react';
import { Route, Redirect } from 'react-router-dom';

const AuthenticatedRoute = connect('isSignedIn')(
  ({ component: Component, isSignedIn, ...props }) => {
    if (isSignedIn) {
      return (
        <Route
          {...props}
          render={matchProps => <Component matchProps={matchProps} />}
        />
      );
    }
    return <Route {...props} render={() => <Redirect to="/login" />} />;
  }
);

export default AuthenticatedRoute;
