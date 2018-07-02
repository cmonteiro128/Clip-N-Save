import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { css } from 'emotion';
import Home from './routes/Home';
import Account from './routes/Account';

const App = () => (
  <div
    className={css`
      margin-left: 5%;
      margin-right: 5%;
    `}
  >
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/account/" component={Account} />
      </div>
    </Router>
  </div>
);
export default App;
