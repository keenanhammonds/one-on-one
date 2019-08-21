import React, {Component} from 'react'
import Card from './Card'
import Match from './Match'

class PlayerMatch extends Component {

    render(){
        return(
            <div>
                <Card/>
                <Match player = {this.props.player} data = {this.props.data}/>
            </div>
        )
    }

}

export default PlayerMatch