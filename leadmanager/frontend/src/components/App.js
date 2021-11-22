import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import Header from "./layout/Header";
import Dashboard from "./leads/Dashboard";

export default class App extends Component {

  render() {
    return(
      <Fragment>
        <Header />
        <div className="container">
          <Dashboard />
        </div>
      </Fragment>
    )
}
}

const appDiv = document.getElementById("app");
ReactDOM.render(<App />, appDiv);