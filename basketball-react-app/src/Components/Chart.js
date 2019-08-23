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
                  backgroundColor: "rgba(255,0,0,0.5)",
                  data: this.props.playerData,
                  fill: false
                }, 
                {
                  label: "Era",
                  type: "bar",
                  backgroundColor: "rgba(0,255,0,0.5)",
                  data: this.props.eraData,
                }, {
                  label: "% Difference",
                  type: "line",
                  backgroundColor: "rgba(0,0,255, 0.5)",
                  backgroundColorHover: "rgba(255,255,255,.2)",
                  data: this.props.difference
                }
              ]
            }
            const chartOptions = {
              responsive: true,
              legend: {
                  position: 'bottom',
              },
              hover: {
                  mode: 'label'
              },
              scales: {
                  xAxes: [{
                          display: true,
                         
                      }],
                  yAxes: [{
                          display: true,
                          scaleLabel: {
                            display: true,
                            labelString: '% Dif from Era Top 10'
                        },
                          ticks: {
                              beginAtZero: true,
                              steps: 10,
                              stepValue: 5,
                              max: 100,
                              min: -100
                          }
                      }]
              },
             
          }
    

        return(
            <div>
            <Bar data={ChartData} options={chartOptions}/>
            </div>
        )
    }
}

export default Chart