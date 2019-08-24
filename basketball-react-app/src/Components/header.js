import React, { Component } from "react";
import logo from "./logo.png";
import "./header.css";

class Header extends Component {
  render() {
    return (
      <header className="headerContainer">
        <div className="topnav">
        <img className="logo" src={logo} alt="logo" />
          <a className="active" href="/">
            Home
          </a>
          <a href="/compare">ONExONE</a>
          <a href="/create">Add Players</a>
          <a href="/update">Update Player</a>
          <a href="/delete">Delete Player</a>
        </div>
      </header>
    );
  }
}

export default Header;
