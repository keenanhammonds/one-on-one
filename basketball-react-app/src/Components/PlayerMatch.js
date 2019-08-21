import React, {Component} from 'react'
import Card from './Card'
import Match2 from './Match2'

class PlayerMatch extends Component {

    render(){
        return(
            <div>
                <Card/>
                <Match2 player = {this.props.player} data = {this.props.data}/>
            </div>
        )
    }

}

export default PlayerMatch