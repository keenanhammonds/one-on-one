import React, { Component } from "react";
import Card from "./Card";
import Match from "./Match";
import axios from "axios";
import Tilt from "react-tilt";
import "tachyons";

class PlayerMatch extends Component {
  constructor() {
    super();

    this.state = {
      data: []
    };
  }
  componentDidMount() {
    axios
      .get(
        `https://basketball-era.herokuapp.com/yearavg/yearavg/${
          this.props.player.startYear
        }/${this.props.player.endYear}`
      )
      .then(res => {
        this.setState({ data: res.data });
      });
  }
  render() {
    return (
      <div>
        <Tilt
          className="Tilt"
          options={{ max: 25 }}
        >
          <Card
            className="dib br4 pa1 ma2 grow bw1 shadow-7"
            image={this.props.player.image}
          />
        </Tilt>
        <div>
        <Match
          className="match"
          player={this.props.player}
          data={this.state.data}
        />
        </div>
      </div>
    );
  }
}

export default PlayerMatch;
