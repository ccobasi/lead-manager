import React, { Component } from "react";
import ReactDOM from "react-dom";
// import HomePage from "./HomePage";

export default class App extends Component {
//   constructor(props) {
//     super(props);
//   }

  render() {
    return <h1>React App</h1>
}
}

const appDiv = document.getElementById("app");
ReactDOM.render(<App />, appDiv);