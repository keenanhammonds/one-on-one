import React, {Component} from 'react'
import { Bar, Line } from 'react-chartjs-2';

class Chart extends Component {

    // type: 'bar',
   
    render(){
        
            
           const ChartData = {
              labels: ["PPG", "APG", "RPG", "BPG", "STG"],
              datasets: [{
                  label: "Player",
                  type: "bar",
                  borderColor: "rgba(255,0,0,0.2)",
                  backgroundColor: "rgba(255,0,0,0.2)",
                  data: this.props.playerData,
                  fill: false
                }, 
                {
                  label: "Era",
                  type: "bar",
                  backgroundColor: "rgba(0,255,0,0.2)",
                  data: this.props.eraData,
                }, {
                  label: "% Difference",
                  type: "line",
                  backgroundColor: "rgba(0,0,255, 0.2)",
                  backgroundColorHover: "rgba(255,255,255,.2)",
                  data: this.props.difference
                }
              ]
            }
            // options: {
            //   title: {
            //     display: true,
            //     text: 'Population growth (millions): Europe & Africa'
            //   },
            //   legend: { display: false }
            // }
    

        return(
            <div>
            <Bar data={ChartData}/>
            </div>
        )
    }
}

export default Chart