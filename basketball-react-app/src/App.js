import React, { Component } from "react";
import axios from "axios";
import Search from "./Components/Search";
import Comparison from "./Components/Comparison"
import Home from "./Components/Home"
import {BrowserRouter as Route, Link} from 'react-router-dom'
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="headerContainer">
          <h1>App</h1>
        </header>
        <Search className="searchContainer" />
        <main>
          <Route path="/" exact component={Home} />
          <Route path="/compare" component={Comparison} />
        </main>
        <footer className="footerContainer" />
      </div>
    );
  }
}

export default App;
