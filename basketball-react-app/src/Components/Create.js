import React, {Component} from 'react'
import Axios from 'axios';

class Create extends Component {
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
    handleSubmit =(e) => {
        e.preventDefault()
        let body = this.state
        Axios.post(`https://basketball-era.herokuapp.com/`,body)
            .then(res => {
                alert(`${this.state.name} added to the database`)
            })
            .catch(err => {
                alert("There was an error, please try again later")
            })
            .finally(this.setState({
                name: "",
                ppg: "",
                apg : "",
                rpg : "",
                spg : "",
                bpg : "",
                startYear:"",
                endYear: "",
                image : ""
            }))
    }

    render(){
        return(
        <div>
            <h1>Add Player</h1>
            <form>
                <div>
                    <span>Player Name: </span><input name='name' placeholder="Player Name" value ={this.state.name} onChange = {this.handleName}></input>
                </div>
                <div>
                    <span>Career Points Per Game: </span><input name='ppg' 
                    placeholder="Points Per Game" value ={this.state.ppg} onChange = {this.handlePpg}></input>
                </div>
                <div>
                    <span>Career Assists Per Game: </span><input name='apg' placeholder="Assists Per Game" value ={this.state.apg} onChange = {this.handleApg}></input>
                </div>
                <div>
                    <span>Career Rebounds Per Game: </span><input name='rpg' placeholder="Rebounds Per Game" value ={this.state.rpg} onChange = {this.handleRpg}></input>
                </div>
                <div>
                    <span>Career Steals Per Game: </span><input name='spg' placeholder="Steals Per Game" value ={this.state.spg} onChange = {this.handleSpg}></input>
                </div>
                <div>                
                    <span>Career Blocks Per Game: </span><input name='bpg' placeholder="Blocks Per Game" value ={this.state.bpg} onChange = {this.handleBpg}></input>
                </div>
                <div>
                    <span>Rookie Season: </span><input name='startYear' placeholder="Start Year" value ={this.state.startYear} onChange = {this.handleStartYear}></input>
                </div>
                <div>
                    <span>Final Season: </span><input name='endYear' placeholder="Last Year in League" value ={this.state.endYear} onChange = {this.handleEndYear}></input>
                </div>
                <div>
                    <span>Player Image Url: </span><input name='image' placeholder="Image URL" value ={this.state.image} onChange = {this.handleImage}></input>
                </div> 
                <button onClick= {this.handleSubmit}>Submit</button>
            </form>

        </div>
        
        )
    }
}

export default Create