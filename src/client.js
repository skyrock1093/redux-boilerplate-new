/* global window, __PRODUCTION__ */
/* eslint no-console: [2, { allow: ["error"] }] */

import BabelPolyFill from 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import {syncHistoryWithStore} from 'react-router-redux';
import configureStore from './store.js';
import routes from './routes';
import {CONTAINER_ID} from './constants/application';

const store = configureStore(window.__INITIAL_STATE__);
const history = syncHistoryWithStore(browserHistory, store);

delete window.__INITIAL_STATE__;

const reactRoot = window.document.getElementById(CONTAINER_ID);

ReactDOM.render(
  <Provider store={store}>
    <Router routes={routes} history={history} />
  </Provider>,
  reactRoot
);

if (__PRODUCTION__) {
  if (!reactRoot.firstChild ||
      !reactRoot.firstChild.attributes ||
      !reactRoot.firstChild.attributes['data-react-checksum']) {
    console.error(
      'Server-side React render was discarded. Make sure that ' +
      'your initial render does not contain any client-side code.'
    );
  }
}
