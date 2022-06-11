import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Documentation from "./Documentation";
import Fib from "./Fib";

function App() {
  const author = "Jakub Kozłowski";

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Realizacja zadania nr2 w ramach laboratorium TCh</p>
          {author ? <p>Autor: {author}</p> : null}
          <Link to="/fib">Kalkulator ciągu geometrycznego</Link>
          <Link to="/documentation">Documentation</Link>
        </header>
        <div>
          <Route path="/fib" component={Fib} />
          <Route path="/documentation" component={Documentation} />
        </div>
      </div>
    </Router>
  );
}

export default App;
