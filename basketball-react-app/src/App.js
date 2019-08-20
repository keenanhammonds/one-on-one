import React, { Component } from "react";
import axios from "axios";
import Search from "./Components/Search";
import Comparison from "./Components/Comparison"
import Home from "./Components/Home"
import {Route, Link} from 'react-router-dom'
import "./App.css"; 

class App extends Component {
  constructor(){
    super();
    this.state = {
      players: []
    }
  }
  render() {
    return (
      <div className="App">
        <header className="headerContainer">
          <Link to="/">
          <h1>Header</h1>
          </Link>
        </header>
        <Search className="searchContainer" />
        <main className="mainContainer">
          <Route path="/" exact render={routerProps => <Home />} />
          <Route path="/compare" exact render={routerProps => <Comparison />} />
        </main>
        <footer className="footerContainer">
        <h1>footer</h1>
        </footer>
      </div>
    );
  }
}

export default App;
