import React, { Component } from "react";
import "./Comparison.css";
import PlayerMatch from "./PlayerMatch";

class Comparison extends Component {
  constructor() {
    super();

    this.state = {
      comparison: []
    };
  }
  compare = stats => {
    var joined = this.state.comparison.concat(stats);
    this.setState({ comparison: joined });
  };

  render() {
    let playerMatch = this.props.matchup.map((player, i) => {
      return (
        <PlayerMatch
          id={i + 1}
          key={i}
          player={player.player}
          compare={this.compare}
        />
      );
    });

    return (
      <div>
        <div>
          <button onClick={this.props.handleReset}>reset</button>
        </div>
        <div className="cardsContainer">{playerMatch}</div>
        {/* insert win logic component here, bring results from the lower components to state here */}
      </div>
    );
  }
}

export default Comparison;
