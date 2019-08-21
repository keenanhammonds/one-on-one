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
      <div>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content />
        <meta name="author" content />
        <link rel="icon" href="/docs/4.1/assets/img/favicons/favicon.ico" />
        <link rel="canonical" href="https://getbootstrap.com/docs/4.1/examples/cover/" />
        <link href="../../dist/css/bootstrap.min.css" rel="stylesheet" />
        <link href="cover.css" rel="stylesheet" />
       
        <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
          <header className="masthead mb-auto">
            <div className="inner">
              <nav className="nav nav-masthead">
                <a className="nav-link active" href="/">Home</a>
                <a className="nav-link" href="/compare">ONExONE</a>
            
              </nav>
            </div>
          </header>
          <main role="main" className="inner cover">
            <h1 className="cover-heading">Compare your favorite players</h1>
            
           <a href="/compare" className="btn btn-lg btn-secondary">Start</a>
          <Route path="/" exact render={routerProps => <Home />} />
          <Route path="/compare" exact render={routerProps => <Comparison />} />
            
          </main>
          <footer className="mastfoot mt-auto">
            <div className="inner">
            </div>
          </footer>
        </div>
      </div>
    );
  }
};
      

export default App;