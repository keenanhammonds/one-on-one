import React, { Component } from "react";
import axios from "axios";
import Search from "./Components/Search";
import Comparison from "./Components/Comparison"
import Home from "./Components/Home"
import {Route, Link} from 'react-router-dom'
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logoNBA.png";

class App extends Component {
  render() {
    return (
      // header 
      <div className="App">
        
  <nav class="navbar navbar-light bg-light justify-content-between">
    <a class="navbar-brand"></a>
    <img src={logo} width="100" height="80"/>
    <form class="form-inline">
    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
</form>
</nav>


        {/* main middle container */}
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
