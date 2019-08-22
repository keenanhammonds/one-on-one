import React, {Component} from 'react'
import Axios from 'axios'

class Update extends Component {
    constructor(){
        super()

        this.state = {
            name: "",
	        ppg: "",
	        apg : "",
	        rpg : "",
	        spg : "",
	        bpg : "",
	        startYear:"",
	        endYear: "",
	        image : ""
	    }

    }
    handleName= (e) => {
        this.setState({name:`${e.target.value}`})
    }
    handlePpg= (e) => {
        this.setState({ppg:`${e.target.value}`})
    }
    handleApg= (e) => {
        this.setState({apg:`${e.target.value}`})
    }
    handleRpg= (e) => {
        this.setState({rpg:`${e.target.value}`})
    }
    handleSpg= (e) => {
        this.setState({spg:`${e.target.value}`})
    }
    handleBpg= (e) => {
        this.setState({bpg:`${e.target.value}`})
    }
    handleStartYear= (e) => {
        this.setState({startYear:`${e.target.value}`})
    }
    handleEndYear= (e) => {
        this.setState({endYear:`${e.target.value}`})
    }
    handleImage= (e) => {
        this.setState({image:`${e.target.value}`})
    }
    submitPpg =(e) => {
        e.preventDefault()
        if(this.state.name === ""){
            alert("please enter player name")
        }
        let body = {ppg:`${this.state.ppg}`}
        Axios.patch(`https://basketball-era.herokuapp.com/${this.state.name}`,body)
            .then(res => {
                alert(`${this.state.name} has been updated`)
            })
            .catch(err => {
                alert("There was an error, please try again later")
            
            })
        }
    submitApg =(e) => {
            e.preventDefault()
            if(this.state.name === ""){
                alert("please enter player name")
            }
            let body = {apg:`${this.state.apg}`}
            Axios.patch(`https://basketball-era.herokuapp.com/${this.state.name}`,body)
                .then(res => {
                    alert(`${this.state.name} has been updated`)
                })
                .catch(err => {
                    alert("There was an error, please try again later")
                
                })
            }    
    submitRpg =(e) => {
                e.preventDefault()
                if(this.state.name === ""){
                    alert("please enter player name")
                }
                let body = {rpg:`${this.state.rpg}`}
                Axios.patch(`https://basketball-era.herokuapp.com/${this.state.name}`,body)
                    .then(res => {
                        alert(`${this.state.name} has been updated`)
                    })
                    .catch(err => {
                        alert("There was an error, please try again later")
                    
                    })
                }
    submitBpg =(e) => {
                    e.preventDefault()
                    if(this.state.name === ""){
                        alert("please enter player name")
                    }
                    let body = {bpg:`${this.state.bpg}`}
                    Axios.patch(`https://basketball-era.herokuapp.com/${this.state.name}`,body)
                        .then(res => {
                            alert(`${this.state.name} has been updated`)
                        })
                        .catch(err => {
                            alert("There was an error, please try again later")
                        
                        })
                    }        
                    submitSpg =(e) => {
                        e.preventDefault()
                        if(this.state.name === ""){
                            alert("please enter player name")
                        }
                        let body = {spg:`${this.state.spg}`}
                        Axios.patch(`https://basketball-era.herokuapp.com/${this.state.name}`,body)
                            .then(res => {
                                alert(`${this.state.name} has been updated`)
                            })
                            .catch(err => {
                                alert("There was an error, please try again later")
                            
                            })
                        }
                        submitStartYear =(e) => {
                            e.preventDefault()
                            if(this.state.name === ""){
                                alert("please enter player name")
                            }
                            let body = {startYear:`${this.state.startYear}`}
                            Axios.patch(`https://basketball-era.herokuapp.com/${this.state.name}`,body)
                                .then(res => {
                                    alert(`${this.state.name} has been updated`)
                                })
                                .catch(err => {
                                    alert("There was an error, please try again later")
                                
                                })
                            }
                            
                            submitEndYear =(e) => {
                                e.preventDefault()
                                if(this.state.name === ""){
                                    alert("please enter player name")
                                }
                                let body = {endYear:`${this.state.endYear}`}
                                Axios.patch(`https://basketball-era.herokuapp.com/${this.state.name}`,body)
                                    .then(res => {
                                        alert(`${this.state.name} has been updated`)
                                    })
                                    .catch(err => {
                                        alert("There was an error, please try again later")
                                    
                                    })
                                }
                                
                                submitImage =(e) => {
                                    e.preventDefault()
                                    if(this.state.name === ""){
                                        alert("please enter player name")
                                    }
                                    let body = {image:`${this.state.image}`}
                                    Axios.patch(`https://basketball-era.herokuapp.com/${this.state.name}`,body)
                                        .then(res => {
                                            alert(`${this.state.name} has been updated`)
                                        })
                                        .catch(err => {
                                            alert("There was an error, please try again later")
                                        
                                        })
                                    }                            
    render(){
        return(
        <div>
            <h1>Update Player</h1>
            <form>
                <div>
                    <span>Player Name: </span><input name='name' placeholder="Player Name" value ={this.state.name} onChange = {this.handleName}></input>
                </div>
                <div>
                    <span>Career Points Per Game: </span><input name='ppg' 
                    placeholder="Points Per Game" value ={this.state.ppg} onChange = {this.handlePpg}></input>
                    <button onClick = {this.submitPpg}>Update</button>
                </div>
                <div>
                    <span>Career Assists Per Game: </span><input name='apg' placeholder="Assists Per Game" value ={this.state.apg} onChange = {this.handleApg}></input>
                    <button onClick = {this.submitApg}>Update</button>
                </div>
                <div>
                    <span>Career Rebounds Per Game: </span><input name='rpg' placeholder="Rebounds Per Game" value ={this.state.rpg} onChange = {this.handleRpg}></input>
                    <button onClick = {this.submitRpg}>Update</button>
                </div>
                <div>
                    <span>Career Steals Per Game: </span><input name='spg' placeholder="Steals Per Game" value ={this.state.spg} onChange = {this.handleSpg}></input>
                    <button onClick = {this.submitSpg}>Update</button>
                </div>
                <div>                
                    <span>Career Blocks Per Game: </span><input name='bpg' placeholder="Blocks Per Game" value ={this.state.bpg} onChange = {this.handleBpg}></input>
                    <button onClick = {this.submitBpg}>Update</button>
                </div>
                <div>
                    <span>Rookie Season: </span><input name='startYear' placeholder="Start Year" value ={this.state.startYear} onChange = {this.handleStartYear}></input>
                    <button onClick = {this.submitStartYear}>Update</button>
                </div>
                <div>
                    <span>Final Season: </span><input name='endYear' placeholder="Last Year in League" value ={this.state.endYear} onChange = {this.handleEndYear}></input>
                    <button onClick = {this.submitEndYear}>Update</button>
                </div>
                <div>
                    <span>Player Image Url: </span><input name='image' placeholder="Image URL" value ={this.state.image} onChange = {this.handleImage}></input>
                    <button onClick = {this.submitImage}>Update</button>
                </div> 
                
            </form>

        </div>
        
        )
    }
}

export default Update