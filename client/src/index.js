import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'unistore/react';
import store from './store';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  /* eslint-disable no-undef */
  document.getElementById('root')
);
registerServiceWorker();
