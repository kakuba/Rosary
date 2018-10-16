import "@babel/polyfill";

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import fontawesome from '@fortawesome/fontawesome';
import solid from '@fortawesome/fontawesome-free-solid';

import Main from './pages/Main';
import store from './store';

import './main.scss';

const app = document.getElementById('app');
fontawesome.library.add(solid);
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Main/>
      </Switch>
    </Router>
  </Provider>,
  app
);
