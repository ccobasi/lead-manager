import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class App extends Component {

  render() {
    return <h1>React App</h1>
}
}

const appDiv = document.getElementById("app");
ReactDOM.render(<App />, appDiv);