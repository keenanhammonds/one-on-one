import React, { Component } from "react";
import axios from "axios";
import Search from "./Components/Search";
import Comparison from "./Components/Comparison"
import Home from "./Components/Home"
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logoNBA.png";

class App extends Component {
  render() {
    return (
      <Router>
      <div className="container">

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="https://google.com">
        <img src={logo} width="100" height="50"/>
        </a>
        <Link to="/" className="navbar-brand">App</Link>
      
      <div className="collapse nav-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <Link to="/compare" className="nav-link">OnexOne</Link>
          </li>
        </ul>

      </div>
      </nav>
      </div>
      </Router>
    );
  }
}

export default App;
