import React from 'react';
import { connect } from 'unistore/react';
import { Route, Redirect } from 'react-router-dom';

const UnauthenticatedRoute = ({ component: Component, isSignedIn, ...props }) => {
  if (this.isSignedIn) {
    return <Route {...props} render={() => <Redirect to="/account" />} />;
  }
  return <Route render={matchProps => <Component matchProps={matchProps} />} {...props} />;
};

export default connect(
  'isSignedIn',
  null,
)(UnauthenticatedRoute);
