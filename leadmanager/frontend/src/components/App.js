import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import Header from "./layout/Header";
import Dashboard from "./leads/Dashboard";

import { Provider } from 'react-redux';
import store from '../store';

export default class App extends Component {

  render() {
    return(
      <Provider store={store}>
      <Fragment>
        <Header />
        <div className="container">
          <Dashboard />
        </div>
      </Fragment>
      </Provider>
    )
}
}

const appDiv = document.getElementById("app");
ReactDOM.render(<App />, appDiv);