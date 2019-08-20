import React, { Component } from "react";
import axios from "axios";
import Search from "./Components/Search";
import Comparison from "./Components/Comparison"
import Home from "./Components/Home"
import {Route, Link} from 'react-router-dom'
import Card from "./Components/Card"
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logoNBA.png";

class App extends Component {
  render() {
    return (
      
      <div className="App">
        
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
       <a class="navbar-brand"></a>
       <img src={logo} width="100" height="80"/>
       <div class="search">
     <span class="fa fa-search"></span>
     <input placeholder="Search for a player"/>
     </div>
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
