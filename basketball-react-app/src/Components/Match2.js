// //Created to put the match stuff into their own components that are full cards

// import React, {Component} from 'react'

// class Match extends Component {

//     render(){
//         let era1Sum = 0 
        
//         this.props.era1.forEach( year => {
//             era1Sum += year.avg
//         })
//         let era1Avg = era1Sum/this.props.era1.length
//         let percentEra1 = ((this.props.player1 - era1Avg)/era1Avg)*100


        
//         return(
//             <div>
//                 <div>{this.props.type}:</div>
//                 <div>{this.props.player1}</div>
//                 <div>{era1Avg.toFixed(1)}</div>
//                 <div>{percentEra1.toFixed(1)}</div>
            

//             </div>
//         )
//     }    
// }

// export default Match
