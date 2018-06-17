import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { css } from 'emotion';
import Home from './routes/Home';

const App = () => (
  <div
    className={css`
      margin-left: 5%;
      margin-right: 5%;
    `}
  >
    <Router>
      <Route exact path="/" component={Home} />
    </Router>
  </div>
);
export default App;
