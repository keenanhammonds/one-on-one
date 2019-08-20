import React, { Component } from "react";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      search: ""
    };
  }

  handleChange = evt => {
    this.setState({
      search: [evt.target.value]
    });
  };

  handleClick = evt => {
    evt.preventDefault();
    this.searchPlayer();
  };

  searchPlayer = () => {
    console.log("searching");
  };

  render() {
    return (
      <div>
        <h3>Find A Player</h3>
        <input
            className="search"
          type="text"
          placeholder="player name"
          onChange={this.handleChange}
        />
          <button className='lined-thin' onClick={this.handleClick}>Search</button>

        <ul>
        </ul>
      </div>
    );
  }
}

export default Search;
