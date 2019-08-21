import React, { Component } from "react";
import axios from "axios";
import Search from "./Components/Search";
import Comparison from "./Components/Comparison";
import Home from "./Components/home/Home";
import { Route, Link } from "react-router-dom";
import "./App.css";
// import { chmod } from "fs";

class App extends Component {
  constructor() {
    super();
    this.state = {
      players: []
    };
  }

  getData = () => {
    axios.get("https://basketball-era.herokuapp.com").then(res => {
      this.setState({
        players: res.data
      });
    });
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div className="App">
        <header className="headerContainer">
          <Link to="/">
            <h1>Header</h1>
          </Link>
        </header>
        <Search players={this.state.players}className="searchContainer" />
        <main className="mainContainer">
          <Route path="/" exact render={routerProps => <Home />} />
          <Route path="/compare" exact render={routerProps => <Comparison players={this.state.players} />} />
        </main>
        <footer className="footerContainer">
          <h1>footer</h1>
        </footer>
      </div>
    );
  }
};
      

export default App;