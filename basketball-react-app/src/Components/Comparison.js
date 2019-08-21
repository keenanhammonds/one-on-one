import React, { Component } from "react";
import Card from "./Card"
import axios from "axios"
import Match from './Match'

 const player1 = {
  "_id": "5d5c59b595824f00049e5ef2",
  "name": "Wilt Chamberlain",
  "ppg": 30.1,
  "apg": 4.4,
  "rpg": 0,
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
    super()

    this.state= {
      
      ppg1: [],
      ppg2: [],
      apg1: [],
      apg2: [],
      rpg1: [],
      rpg2: [],
      bpg1: [],
      bpg2: [],
      spg1: [],
      spg2: []
          

    }
  }
  componentDidMount(){
    
  // get ppg
  axios.get(`https://basketball-era.herokuapp.com/ppg/ppg/${player1.startYear}/${player1.endYear}`)   
    .then( res => {
      this.setState({ppg1: res.data})
    })
   axios.get(`https://basketball-era.herokuapp.com/ppg/ppg/${player2.startYear}/${player2.endYear}`)   
    .then( res => {
      this.setState({ppg2: res.data})
    })  

    // get apg
  axios.get(`https://basketball-era.herokuapp.com/apg/apg/${player1.startYear}/${player1.endYear}`)   
    .then( res => {
      this.setState({apg1: res.data})
    })
  axios.get(`https://basketball-era.herokuapp.com/apg/apg/${player2.startYear}/${player2.endYear}`)   
    .then( res => {
      this.setState({apg2: res.data})
    })

    // get rpg
    axios.get(`https://basketball-era.herokuapp.com/rpg/rpg/${player1.startYear}/${player1.endYear}`)   
    .then( res => {
      this.setState({rpg1: res.data})
    })
  axios.get(`https://basketball-era.herokuapp.com/rpg/rpg/${player2.startYear}/${player2.endYear}`)   
    .then( res => {
      this.setState({rpg2: res.data})
    })

    // get bpg 
    axios.get(`https://basketball-era.herokuapp.com/bpg/bpg/${player1.startYear}/${player1.endYear}`)   
    .then( res => {
      this.setState({bpg1: res.data})
    })
  axios.get(`https://basketball-era.herokuapp.com/bpg/bpg/${player2.startYear}/${player2.endYear}`)   
    .then( res => {
      this.setState({bpg2: res.data})
    })

    // get spg 
    axios.get(`https://basketball-era.herokuapp.com/spg/spg/${player1.startYear}/${player1.endYear}`)   
    .then( res => {
      this.setState({spg1: res.data})
    })
  axios.get(`https://basketball-era.herokuapp.com/spg/spg/${player2.startYear}/${player2.endYear}`)   
    .then( res => {
      this.setState({spg2: res.data})
    })
  }
  render() {
    //save the list of player objects to variable
    const playerData = this.props.players;
    return (
      <div className="cardsContainer">
        <Card />
        <Card />
        <div>
        <Match  type="ppg" player1 = {player1.ppg} player2 = {player2.ppg} era1={this.state.ppg1} era2 = {this.state.ppg2}/>
        <Match  type="apg" player1 = {player1.apg} player2 = {player2.apg} era1={this.state.apg1} era2 = {this.state.apg2}/>
        <Match  type="rpg" player1 = {player1.rpg} player2 = {player2.rpg} era1={this.state.rpg1} era2 = {this.state.rpg2}/>
        <Match  type="spg" player1 = {player1.spg} player2 = {player2.spg} era1={this.state.spg1} era2 = {this.state.spg2}/>
        <Match  type="bpg" player1 = {player1.bpg} player2 = {player2.bpg} era1={this.state.bpg1} era2 = {this.state.bpg2}/>
        </div>
      </div>
    );
  }
}

export default Comparison;
