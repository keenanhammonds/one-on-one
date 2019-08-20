import React, { Component } from "react";
import Card from "./Card"

class Comparison extends Component {
  render() {
    return (
      <div className="cardsContainer">
        <Card />
        <Card />
      </div>
    );
  }
}

export default Comparison;
