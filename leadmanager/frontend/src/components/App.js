import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "./layout/Header";

export default class App extends Component {

  render() {
    return(
      <Header />
    )
}
}

const appDiv = document.getElementById("app");
ReactDOM.render(<App />, appDiv);