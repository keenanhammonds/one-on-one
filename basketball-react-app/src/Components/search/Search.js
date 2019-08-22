import React, { Component } from "react";
import axios from "axios";
// import { userInfo } from "os";
import "./search.css";

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
    console.log(this.state);
  };

  handleClick = evt => {
    evt.preventDefault();
  };

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
      if (playerArr.length < 12) {
        return (
          <div>
            <a>
              <h3>{player.name}</h3>
            </a>
          </div>
        );
      }
    });
    return (
      <div>
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
