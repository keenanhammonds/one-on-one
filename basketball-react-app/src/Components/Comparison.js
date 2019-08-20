import React, { Component } from "react";
import Card from "./Card"
import axios from "axios"

 const player1 = {
  "_id": "5d5c3d55ceccb90004dfd3f2",
  "name": "Kareem Abdul-Jabbar",
  "ppg": 24.6,
  "apg": 3.6,
  "rpg": 7.9,
  "spg": 0.7,
  "bpg": 2,
  "startYear": 1969,
  "endYear": 1988,
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
    // let play1 = "Kobe Bryant"
    // let play2 ="Michael Jordan"
  //   let startDate1 = this.state.player1.startDate
  //   let endDate1 = this.state.player1.endDate
  //   let startDate2 = this.state.player2.startDate
  //   let endDate2 = this.state.player2.endDate
  // //   axios.get(`https://basketball-era.herokuapp.com/${play1}`)
  //     .then(res => {
  //       this.setState({player1: res.data})
  //     })
      
  //  axios.get(`https://basketball-era.herokuapp.com/${play2}`) 
  //     .then(res => {
  //       this.setState({player2: res.data})
  //     })
  
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
    return (
      <div className="cardsContainer">
        <Card />
        <Card />
      </div>
    );
  }
}

export default Comparison;
