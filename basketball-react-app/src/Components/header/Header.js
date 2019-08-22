import React, { Component } from "react";
import {Route, Link} from "react-router-dom";
import "./header.css"

class Header extends Component {
    render() {
       return (
        <div>
        <nav id="navbar" className>
          <div className="nav-wrapper">
            <div className="logo">            
              <a href="/"><i className="fas fa-chess-knight" /></a>
            </div>
            <ul id="menu">
              <li><a href="/">HOME</a></li>
          <li><a href="/compare">ONExONE</a></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
};
export default Header;