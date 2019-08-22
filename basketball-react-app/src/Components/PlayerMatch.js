import React, {Component} from 'react'
import Card from './Card'
import Match from './Match'
import axios from 'axios'

class PlayerMatch extends Component {
    constructor(){
        super()

        this.state= {
            data: []
        }
    }
    componentDidMount(){
        axios.get(`https://basketball-era.herokuapp.com/yearavg/yearavg/${this.props.player.startYear}/${this.props.player.endYear}`)   
        .then( res => {
           
          this.setState({data: res.data})
        })
         
    }
    render(){
        return(
            <div>
                <Card className="card" image = {this.props.player.image}/>
                <Match className="match" player = {this.props.player} data = {this.state.data}/>
            </div>
        )
    }

}

export default PlayerMatch