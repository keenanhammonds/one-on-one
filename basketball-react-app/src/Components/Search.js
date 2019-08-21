import React, { Component } from "react";
import axios from "axios";
import { Route, Link } from "react-router-dom";
import "./search.css";
// import { userInfo } from "os";

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
    const { search } = this.state;
    const { players } = this.props;
    const filteredPlayers = players.filter(player => {
      return player.name
        .toLowerCase()
        .includes(this.state.search.toLowerCase());
    });
    const playerArr = [];
    const showPlayers = filteredPlayers.map(player => {
      playerArr.push(player.name);
      if (playerArr.length < 13) {
        return (
          <div key={player.name}>
            <Link>
              <h3 onClick={evt => this.props.handleClick(player, evt)}>
                {player.name}
              </h3>
            </Link>
          </div>
        );
      }
    });
    return (
      <div>
        <h3>Find A Player</h3>
        <input
          className="search"
          type="text"
          placeholder="player name"
          onChange={this.searchChange}
        />
        <button className="lined-thin" onClick={this.handleClick}>
          Search
        </button>
        <div>{showPlayers}</div>
      </div>
    );
  }
}

export default Search;
