//Created to put the match stuff into their own components that are full cards

import React, {Component} from 'react'

class Match2 extends Component {
    componentDidMount(){
        
    }
    render(){
        let ppgEraSum = 0 
        let ppgYearCount = 0

        this.props.data.forEach( year => {
            if(year.avgPpg != null){
                ppgEraSum += year.avgPpg
                ppgYearCount ++
            }
        })
        
        let ppgEraAvg
        let ppgPercentDif
        
        if(ppgEraSum != 0){
           ppgEraAvg =  ppgEraSum/ppgYearCount
           ppgPercentDif = ((this.props.player.ppg - ppgEraAvg)/ppgEraAvg)*100
        } 
        console.log(ppgEraAvg)
        console.log(this.props.player.ppg)
        console.log(ppgPercentDif)
        
        // let era1Avg = era1Sum/this.props.era1.length
        // let percentEra1 = ((this.props.player1 - era1Avg)/era1Avg)*100


        
        return(
            <div>
                {/* <div>{this.props.type}:</div>
                <div>{this.props.player1}</div>
                <div>{era1Avg.toFixed(1)}</div>
                <div>{percentEra1.toFixed(1)}</div>
             */}

            </div>
        )
    }    
}

export default Match2
