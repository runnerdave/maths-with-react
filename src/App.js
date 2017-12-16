import React, { Component } from "react";
import MathJax from "@matejmazur/react-mathjax";

import logo from "./logo.svg";
import "./App.css";

const tex = `f(x) = \\int_{-\\infty}^\\infty
\\hat f(\\xi)\\,e^{2 \\pi i \\xi x}
\\,d\\xi`;
const ascii = 'U = 1/(R_(si) + sum_(i=1)^n(s_n/lambda_n) + R_(se))';

class MathJaxExample extends Component {
  render() {
    return (
      <MathJax.Context>
        <React.Fragment>
          This is an inline math formula:{" "}
          <MathJax.Node inline>{"a = b"}</MathJax.Node>
          <br/>And a block one:&nbsp;
          <MathJax.Node>{tex}</MathJax.Node>
          <br/>ascii syntax:&nbsp;
          <MathJax.Node>{ascii}</MathJax.Node>
        </React.Fragment>
      </MathJax.Context>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <MathJaxExample />
        </div>
      </div>
    );
  }
}

export default App;
