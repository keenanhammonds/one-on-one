import React, { Component } from "react";
import {Route, Link} from "react-router-dom";

import video from "./NBAmix2.mp4";

class Home extends Component {
  render() {
     return (
      <video className='videoTag' autoPlay loop muted>
      <source src={video} type='video/mp4' />
      </video>
        
      );
    }
  }

export default Home;
