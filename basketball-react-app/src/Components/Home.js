import React, { Component } from "react";
import {Route, Link} from "react-router-dom"


class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <Link to="/compare"><h1>example link to functional component</h1></Link>
      </div>
    );
  }
}

export default Home;
