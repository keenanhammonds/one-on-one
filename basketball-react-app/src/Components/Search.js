import React, { Component } from "react";
import "./search.css";
import {  Link } from "react-router-dom";
import "tachyons";

class Search extends Component {
  constructor() {
    super();
    // hold the state of the search input
    this.state = {
      search: ""
    };
  }

  resetSearch = e => {
    e.preventDefault();
    this.setState({
      search: ""
    });
  };

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

    // eslint-disable-next-line array-callback-return
    const showPlayers = filteredPlayers.map(player => {
      const url = player.image;

      playerArr.push(player.name);
      if (playerArr.length <= 6) {
        return (
          <Link to="/compare">
            <div className="smallCard" key={player.name}>
              <img
                className="dib br4 pa1 ma2 grow bw1 shadow-7"
                alt="player card"
                src={url}
                onClick={this.resetSearch}
                // eslint-disable-next-line react/jsx-no-duplicate-props
                onClick={evt => this.props.handleClick(player, evt)}
              />
            </div>
          </Link>
        );
      }
    });
    return (
      <div className="searchbar-container">
        <div>
          <h2 className="pick-player-text">Choose a player</h2>
          <input
            className="search-input"
            type="text"
            placeholder="player name"
            onChange={this.searchChange}
          />

          <div className="allCardsContainer">{showPlayers}</div>
        </div>
      </div>
    );
  }
}

export default Search;
