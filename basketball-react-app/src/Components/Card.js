import React, { Component } from "react";

class Card extends Component {

  render() {
    return (
      <div className="card" style={{width: '18rem'}}>
      <img className="card-img-top" src="..." alt="Card image cap" />
      <div className="card-body">
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
    );
  }
}

export default Card;
