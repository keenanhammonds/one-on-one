import React, { Component } from "react";
import axios from "axios";

class Search extends Component {
  constructor() {
    super();
    // hold the state of the search input 
    this.state = {
      search: "",
      players: []
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

  getData = () => {
    axios.get("https://basketball-era.herokuapp.com")
    .then(res => {
      this.setState({
        players: [res.data]
      })
      console.log(res.data)
    })
  }

  componentDidMount(){
    this.getData()

  }

  // searchPlayer = () => {
  // };

  render() {
    console.log(this.state)
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
