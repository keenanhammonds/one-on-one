import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./Components/Search"
import Home from "./Components/Home"
import Comparison from "./Components/Comparison"
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>App</h1>
      </header>
      <Search />
      <main>
        <Route path="/" exact component={Home} />
        <Route path="/compare" component={Comparison} />
      </main>
    </div>
  );
}

export default App;
