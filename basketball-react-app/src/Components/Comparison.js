import React, { Component } from "react";
import Card from "./Card"

class Comparison extends Component {
  render() {
    //save the player data to variable
    const playerData = this.props.players;
    console.log(playerData)
    return (
      <div className="cardsContainer">
        <Card />
        <Card />
      </div>
    );
  }
}

export default Comparison;
