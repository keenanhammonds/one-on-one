import React, {Component} from 'react'

class Match extends Component {

    render(){
        let era1Sum = 0 
        
        this.props.era1.forEach( year => {
            era1Sum += year.avg
        })
        let era1Avg = era1Sum/this.props.era1.length
        let percentEra1 = ((this.props.player1 - era1Avg)/era1Avg)*100


        let era2Sum = 0 
        
        this.props.era2.forEach( year => {
            era2Sum += year.avg
        })
        let era2Avg = era2Sum/this.props.era2.length
        let percentEra2 = ((this.props.player2 - era2Avg)/era2Avg)*100
        console.log(this.props.era1)
        return(
            <div>
                <div>{this.props.type}:</div>
                <div>{this.props.player1}</div>
                <div>{era1Avg.toFixed(1)}</div>
                <div>{percentEra1.toFixed(1)}</div>
            
                <div>{this.props.type}:</div>
                <div>{this.props.player2}</div>
                <div>{era2Avg.toFixed(1)}</div>
                <div>{percentEra2.toFixed(1)}</div>
            </div>
        )
    }    
}

export default Match
