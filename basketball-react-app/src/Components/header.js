import React, { Component } from "react";
import {Route, Link} from "react-router-dom";
import "./header.css"


class Header extends Component {
  render() {
     return (
        <header className="headerContainer">
          <h1>This is my header</h1>
        <Link to="/">
        </Link>
      </header>

   
      );
    }
  }

export default Header;
