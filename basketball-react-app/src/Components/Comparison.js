import React, { Component } from "react";
import "./Comparison.css";
import PlayerMatch from "./PlayerMatch";

class Comparison extends Component {
  render() {
    let playerMatch = this.props.matchup.map((player, i) => {
      return(
         <PlayerMatch key={i} player={player.player} />
         );
    });

    return (
      <div>
        <div>
          <button onClick={this.props.handleReset}>reset</button>
        </div>
        <div className="cardsContainer">{playerMatch}</div>
      </div>
    );
  }
}

export default Comparison;
