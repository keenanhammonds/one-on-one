import React, { Component } from "react";
import axios from "axios";
import Search from "./Components/Search";
import Comparison from "./Components/Comparison"
import Home from "./Components/Home"
import {Route, Link} from 'react-router-dom'
import "./App.css";

class App extends Component {
  render() {
    return (
      // header navbar 
      <div className="container">
          
        <nav class="navbar sticky-top navbar-light bg-light">
        <a class="navbar-brand" href="#">
        </a>
        <li>HOME</li>
        <Link to="/compare" className="navbar-brand">ONExONE</Link>
        </nav>


{/* main  */}
        <main className="mainContainer">
          <Route path="/" exact render={routerProps => <Home />} />
          <Route path="/compare" exact render={routerProps => <Comparison />} />
        </main>

        {/* footer */}
        <footer className="footerContainer">
        <h1>footer</h1>
        </footer>
      </div>
     
    );
  }
}

export default App;