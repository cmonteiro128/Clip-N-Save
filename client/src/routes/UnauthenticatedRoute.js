import React from 'react';
import { connect } from 'unistore/react';
import { Route, Redirect } from 'react-router-dom';

const UnauthenticatedRoute = connect('isSignedIn')(
  ({ component: Component, isSignedIn, ...props }) => {
    if (isSignedIn) {
      return <Route {...props} render={() => <Redirect to="/account" />} />;
    }
    return (
      <Route
        render={matchProps => <Component matchProps={matchProps} />}
        {...props}
      />
    );
  }
);

export default UnauthenticatedRoute;
