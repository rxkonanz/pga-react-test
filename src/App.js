import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  // app constructor
  constructor(){
    super()
    this.state = {
      players: [{fName:"Michael", lName: "Scott", score: 99}, {fName:"Jim", lName: "Halpert", score: 96}, {fName:"Stanley", lName: "Hudson", score: 88}],
      newFName: "",
      newLName: "",
      newScore: ""
    }
  }

  // function that displays the players
  displayPlayers = () => {
    let playersList = this.state.players.map((player,i) => {
      return <tr key={i}>
        <td>{player.lName}, {player.fName}</td>
        <td>{player.score}</td>
        <td><button onClick={()=>{this.editPlayer(i)}}>Edit</button> <button onClick={()=>{this.deletePlayer(i)}}>Delete</button></td>
        </tr>
    })
    return playersList;
  }

  // handles text input and sets it to state newFName
  setFName = (e) => {
    this.setState({
      newFName: e.target.value  
    })
  }

  // handles text input and sets it to state newLName
  setLName = (e) => {
    this.setState({
      newLName: e.target.value  
    })
  }

  // handles text input and sets it to state newScore
  setScore = (e) => {
    this.setState({
      newScore: e.target.value  
    })
  }

  // adds new player to leaderboard
  addPlayer = (e) => {

    let newPlayersList = [...this.state.players]

    if(this.state.fName === "" || this.state.newLName === "" || this.state.newScore === "" ){
      alert("No empty fields allowed!")
      return
    }

    if(this.state.newScore > 100 || this.state.newScore < 0){
      alert("Error! Scores can only be between 0 and 100!")
      return
    }

    let newPlayer = {fName: this.state.newFName, lName: this.state.newLName, score: this.state.newScore}
    newPlayersList.push(newPlayer)
    console.log(newPlayersList)
    this.setState({
      players: newPlayersList.sort(this.comparePlayers),
      newFName: "",
      newLName: "",
      newScore: ""
    })
  }

  // sorts based on score and last name
  comparePlayers = (player1, player2) => {
    if(player1.score < player2.score){
      return 1
    }
    if(player1.score > player2.score){
      return -1
    }
    if(player1.lName.toLowerCase() < player2.lName.toLowerCase()){
      return -1
    }
    if(player1.lName.toLowerCase() > player2.lName.toLowerCase()){
      return 1
    }
    return 0
  }

  // delete player from leaderboard
  deletePlayer = (i) => {
    let shorterList = [...this.state.players]
    shorterList.splice(i, 1)
    this.setState({
      players: shorterList
    })
  }

  editPlayer = (i) => {
    console.log(this.state.players[i])
    let shorterList = [...this.state.players]
    shorterList.splice(i, 1)
    this.setState({
      newFName: this.state.players[i].fName,
      newLName: this.state.players[i].lName,
      newScore: this.state.players[i].score,
      players: shorterList
    }) 
  }

  render() {
    return (
      <div className="App">
        <h2>Add a Player</h2>
        <form className="add-player-form">
          <div className="form-row">
            <p className="form-label">First Name: </p><input type="text" className="form-text-input" value={this.state.newFName} onChange={(e)=>{this.setFName(e)}} placeholder="first name" />
          </div>
          <div className="form-row">
            <p className="form-label">Last Name: </p><input type="text" className="form-text-input" value={this.state.newLName} onChange={(e)=>{this.setLName(e)}} placeholder="last name" />
          </div>
          <div className="form-row">
            <p className="form-label">Score: </p><input type="number" id="score-text-input" value={this.state.newScore} onChange={(e)=>{this.setScore(e)}} placeholder="score" />
          </div>
          <button type="button" id="add-player-button" onClick={(e)=>{this.addPlayer(e)}}>Add</button>
        </form>
        <img src="../pga-logo.png" id="pga-logo" alt="pga-logo" />
        <h1>Leaderboard</h1>
        <table id="leaderboard">
          <tr>
            <th>Name</th>
            <th>Score</th>
            <th></th>
          </tr>
          {this.displayPlayers()}
        </table>
      </div>
    );
  }
}

export default App;
