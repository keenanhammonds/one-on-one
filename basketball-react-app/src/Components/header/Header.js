import React, { Component } from "react";
import {Route, Link} from "react-router-dom";
import "./header.css"

class Header extends Component {
    render() {
       return (
        <header className="headerContainer">
          <Link to="/">
            <h1>Header</h1>
          </Link>
        </header>
        );
      }
    }


export default Header;