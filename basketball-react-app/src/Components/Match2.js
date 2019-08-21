//Created to put the match stuff into their own components that are full cards

import React, {Component} from 'react'
import './Match2.css'
class Match2 extends Component {
    componentDidMount(){
        
    }
    render(){
       
       //creates the ppg numbers
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
        let ppgEra
        let ppgDif        

        if(ppgEraSum != 0){
           ppgEraAvg =  ppgEraSum/ppgYearCount
           ppgEra = ppgEraAvg.toFixed(1)
           ppgPercentDif = ((this.props.player.ppg - ppgEraAvg)/ppgEraAvg)*100
           ppgDif =ppgPercentDif.toFixed(1) 
        } 
        
        // let era1Avg = era1Sum/this.props.era1.length
        // let percentEra1 = ((this.props.player1 - era1Avg)/era1Avg)*100


        
        return(
            <div className= "grid">
                <span></span>
                <span>Player</span>
                <span>Era</span>
                <span>% Difference</span>
                
                <div>PPG:</div>
                <div>{this.props.player.ppg}</div>
                <div>{ppgEra}</div>
                <div>{ppgDif}%</div>
                
            </div>
        )
    }    
}

export default Match2
