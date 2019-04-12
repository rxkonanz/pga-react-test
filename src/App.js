import React, { Component } from 'react';
import './App.css';
import AddPlayerForm from './components/AddPlayerForm';
import Leaderboard from './components/Leaderboard';

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
        <AddPlayerForm state={this.state} addPlayer={this.addPlayer} setFName={this.setFName} setLName={this.setLName} setScore={this.setScore}/>
        <Leaderboard displayPlayers={this.displayPlayers} />
      </div>
    );
  }
}

export default App;
