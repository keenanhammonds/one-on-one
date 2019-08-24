import React, { Component } from "react";
import "./card.css"
import "tachyons";

class Card extends Component {
  render() {
    return (
      <div className="whole-card" style={{ width: "18rem" }}>
        <div style={{ height: "auto" }}>
          <img
            className="card-img-top"
            src={this.props.image}
            alt="Card cap"
            style={{ height: "400px" }}
          />
        </div>
        <div className="card-body" style={{ textAlign: "center" }}>
          <h1>{this.props.name}</h1>
          <h3>Seasons Played:</h3>
          <h2>
            {this.props.startYear} - {this.props.endYear}
          </h2>
        </div>
      </div>
    );
  }
}

export default Card;
