//Created to put the match stuff into their own components that are full cards

import React, {Component} from 'react'
import './Match2.css'

       

class Match2 extends Component {
    constructor(){
        super()

        this.state = {
            data: []
        }
    }
    // componentDidMount() {
     
     
    //     let stats = {
    //         ppg: ppgDif,
    //         apg: apgDif,
    //         rpg: rpgDif,
    //         bpg: bpgDif,
    //         spg: spgDif
    //     }
    //     this.props.compare(stats)
    // }

    render(){
       
        let ppgDif
        let spgDif        
        let apgDif 
        let rpgDif        
        let bpgDif 
        
       //creates the ppg numbers
        let ppgEraSum = 0 
        let ppgYearCount = 0

        this.props.data.forEach( year => {
            if(year.avgPpg !== null){
                ppgEraSum += year.avgPpg
                ppgYearCount ++
            }
        })
        
        let ppgEraAvg
        let ppgPercentDif
        let ppgEra
                

        if(ppgEraSum !== 0){
           ppgEraAvg =  ppgEraSum/ppgYearCount
           ppgEra = ppgEraAvg.toFixed(1)
           ppgPercentDif = ((this.props.player.ppg - ppgEraAvg)/ppgEraAvg)*100
           ppgDif =ppgPercentDif.toFixed(1) 
        } 
        
       //creates the apg numbers
       let apgEraSum = 0 
       let apgYearCount = 0

       this.props.data.forEach( year => {
           if(year.avgApg !== null){
               apgEraSum += year.avgApg
               apgYearCount ++
           }
       })
       
       let apgEraAvg
       let apgPercentDif
       let apgEra
              

       if(apgEraSum !== 0){
          apgEraAvg =  apgEraSum/apgYearCount
          apgEra = apgEraAvg.toFixed(1)
          apgPercentDif = ((this.props.player.apg - apgEraAvg)/apgEraAvg)*100
          apgDif =apgPercentDif.toFixed(1) 
       }

//creates the rpg numbers
       let rpgEraSum = 0 
       let rpgYearCount = 0

       this.props.data.forEach( year => {
           if(year.avgRpg !== null){
               rpgEraSum += year.avgRpg
               rpgYearCount ++
           }
       })
       
       let rpgEraAvg
       let rpgPercentDif
       let rpgEra
       

       if(rpgEraSum !== 0){
          rpgEraAvg =  rpgEraSum/rpgYearCount
          rpgEra = rpgEraAvg.toFixed(1)
          rpgPercentDif = ((this.props.player.rpg - rpgEraAvg)/rpgEraAvg)*100
          rpgDif =rpgPercentDif.toFixed(1) 
       }       

       //creates the bpg numbers
       let bpgEraSum = 0 
       let bpgYearCount = 0

       this.props.data.forEach( year => {
           if(year.avgBpg !== null){
               bpgEraSum += year.avgBpg
               bpgYearCount ++
           }
       })
       
       let bpgEraAvg
       let bpgPercentDif
       let bpgEra


       if(bpgEraSum !== 0){
          bpgEraAvg =  bpgEraSum/bpgYearCount
          bpgEra = bpgEraAvg.toFixed(1)
          bpgPercentDif = ((this.props.player.bpg - bpgEraAvg)/bpgEraAvg)*100
          bpgDif =bpgPercentDif.toFixed(1) 
       }       

       //creates the spg numbers
       let spgEraSum = 0 
       let spgYearCount = 0

       this.props.data.forEach( year => {
           if(year.avgSpg !== null){
               spgEraSum += year.avgSpg
               spgYearCount ++
           }
       })
       
       let spgEraAvg
       let spgPercentDif
       let spgEra


       if(spgEraSum !== 0){
          spgEraAvg =  spgEraSum/spgYearCount
          spgEra = spgEraAvg.toFixed(1)
          spgPercentDif = ((this.props.player.spg - spgEraAvg)/spgEraAvg)*100
          spgDif =spgPercentDif.toFixed(1) 
       }

       
       
        return(
            <div className= "grid">
                <span></span>
                <span>Player</span>
                <span>Top for Era</span>
                <span>% Difference</span>
                
                <div>PPG:</div>
                <div>{this.props.player.ppg}</div>
                <div>{ppgEra}</div>
                <div>{ppgDif}%</div>

                <div>APG:</div>
                <div>{this.props.player.apg}</div>
                <div>{apgEra}</div>
                <div>{apgDif}%</div>

                
                <div>RPG:</div>
                <div>{this.props.player.rpg}</div>
                <div>{rpgEra}</div>
                <div>{rpgDif}%</div>

                <div>BPG:</div>
                <div>{this.props.player.bpg}</div>
                <div>{bpgEra}</div>
                <div>{bpgDif}%</div>                                                            

                <div>SPG:</div>
                <div>{this.props.player.spg}</div>
                <div>{spgEra}</div>
                <div>{spgDif}%</div>                                                            

            </div>
        )
    }    
}

export default Match2
