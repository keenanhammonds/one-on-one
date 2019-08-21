import React, { Component } from "react";
import Card from "./Card";

class Comparison extends Component {
  render() {
    //save the list of player objects to variable
    const playerData = this.props.players;
    return (
      <div className="cardsContainer">
        <Card />
        <Card />
      </div>
    );
  }
}

export default Comparison;
