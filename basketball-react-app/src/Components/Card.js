import React, { Component } from "react";
import "tachyons";

class Card extends Component {

  render() {
    return (
      <div className="card" style={{width: '18rem'}}>
      <div style={{height: '500px'}}>
        <img className='br4 pa1 ma2 bw1 shadow-7' className="card-img-top" src={this.props.image} alt="Card image cap" style={{height: '400px'}} />
      </div>
      <div className="card-body">
        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
      </div>
    </div>
    );
  }
}

export default Card;
