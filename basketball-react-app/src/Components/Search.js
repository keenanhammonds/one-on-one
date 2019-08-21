import React, { Component } from "react";
import axios from "axios";
import "./search.css";
import "tachyons"

class Search extends Component {
  constructor() {
    super();
    // hold the state of the search input
    this.state = {
      search: ""
    };
  }

  searchChange = evt => {
    this.setState({
      search: evt.target.value
    });
  };

  s;

  render() {
    const { players } = this.props;
    const filteredPlayers = players.filter(player => {
      return player.name
        .toLowerCase()
        .includes(this.state.search.toLowerCase());
    });

    const playerArr = [];

    const showPlayers = filteredPlayers.map(player => {
      const url = player.image;

      playerArr.push(player.name);
      if (playerArr.length <= 6) {
        return (
          <div className="smallCard" key={player.name}>
            <img
              className='dib br4 pa1 ma2 grow bw1 shadow-7'
              src={url}
              onClick={evt => this.props.handleClick(player, evt)}
            />
          </div>
        );
      }
    });
    return (
      <div>
        <div>
          <h3>Find A Player</h3>
          <input
            className="search"
            className='br2 bw2 shadow-5 '
            type="text"
            placeholder="player name"
            onChange={this.searchChange}
          />
          <div className="searchContainer">{showPlayers}</div>
        </div>
      </div>
    );
  }
}

export default Search;
