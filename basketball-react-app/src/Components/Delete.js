import React, {Component} from 'react'
import tachyons from 'tachyons'

import Axios from 'axios';

class Delete extends Component{
    constructor(){
        super()

        this.state = {
            players: [],
            delete:""
        }
    }
    
    componentDidMount() {
        this.getPlayers()
    }
    handleChange = (e) => {
        this.setState({delete: e.target.value})
    }
    delete = (e) => {
        let url = this.state.delete
        Axios.delete(`https://basketball-era.herokuapp.com/${url}`)
            .then( res => {
                alert(`${url} deleted from database`)
            })
            .catch(err => {
                alert(`An error occurred, please check spelling`)
            })
            .finally( res => {
                this.getPlayers()
            })
    }
    getPlayers = () => {
        Axios.get(`https://basketball-era.herokuapp.com`)
            .then(res => {
                this.setState({players: res.data,
                                    delete:""})
            })
    }
    
    render() {
        let playerList = this.state.players.map(player => {
            
                         
              return (
                <span key={player.name} style= {{fontSize:'12px'}}> {player.name} </span>
              )})
        
        return(
            <div>
                <div style = {{display:'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr'}}>
                {playerList}
                </div>
                <div>
                <input placeholder="Player to Delete" value = {this.state.delete} onChange= {this.handleChange}></input>
                <button onClick={this.delete}>Delete</button>
                </div>

            </div>
        )
    }
}

export default Delete