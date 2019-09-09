import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
// core components
import Admin from "layouts/Admin.js";

import "assets/css/material-dashboard-react.css?v=1.8.0";
import redux from 'shared/redux/store'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

const { persistor, store } = redux;
const hist = createBrowserHistory();

ReactDOM.render(
<Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
        <Router history={hist}>
          <Switch>
            <Route path="/admin" component={Admin} />
            <Redirect from="/" to="/admin/dashboard" />
          </Switch>
        </Router>
  </PersistGate>
</Provider>,
  document.getElementById("root")
);
