import React, { Component } from "react";
import Card from "./Card"
import axios from "axios"
import './Comparison.css'
import PlayerMatch from './PlayerMatch'

 const player1 = {
  "_id": "5d5c59b595824f00049e5ef2",
  "name": "Wilt Chamberlain",
  "ppg": 30.1,
  "apg": 4.4,
  "rpg": 22.9,
  "spg": null,
  "bpg": null,
  "startYear": 1959,
  "endYear": 1972,
  "__v": 0
}
 const player2 = {
  "_id": "5d5c3d55ceccb90004dfd3f5",
  "name": "LeBron James",
  "ppg": 27.2,
  "apg": 7.2,
  "rpg": 7.4,
  "spg": 1.6,
  "bpg": 0.8,
  "startYear": 2003,
  "endYear": 2018,
  "__v": 0
}

class Comparison extends Component {
  constructor() {
    super();

    this.state= {
      
      player1:[],
      player2:[]
    }
  }
  componentDidMount(){
    
  // get yearavgs
  axios.get(`https://basketball-era.herokuapp.com/yearavg/yearavg/${player1.startYear}/${player1.endYear}`)   
    .then( res => {
      this.setState({player1: res.data})
    })
   axios.get(`https://basketball-era.herokuapp.com/yearavg/yearavg/${player2.startYear}/${player2.endYear}`)   
    .then( res => {
      this.setState({player2:  res.data})
    })  

 
  }
  render() {
    return (
      <div>
      <div className="cardsContainer">
        <PlayerMatch player = {player1} data ={this.state.player1}/>
        <PlayerMatch player = {player2} data ={this.state.player2}/>
        </div>
        
      </div>
    );
  }
}

export default Comparison;
