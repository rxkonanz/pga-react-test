import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  constructor(){
    super()
    this.state = {
      players: [{fName:"Alice", lName: "Geary", score: 96}, {fName:"John", lName: "Junge", score: 96}, {fName:"Rob", lName: "Vera", score: 88}],
      newFName: "",
      newLName: "",
      newScore: ""
    }
  }

  // componentDidMount(){
  //   let sortedPlayers = [...this.state.players]
  //   sortedPlayers = sortedPlayers.sort(this.comparePlayers)
  //   this.setState({
  //     players: sortedPlayers
  //   }) 
  // }

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

  displayPlayers = () => {
    let playersList = this.state.players.map((player,i) => {
      return <tr key={i}>
        <td>{player.lName}, {player.fName}</td>
        <td>{player.score}</td>
        <td><button onClick={()=>{this.deletePlayer(i)}}>Delete</button></td>
        </tr>
    })
    return playersList;
  }

  addFName = (e) => {
    this.setState({
      newFName: e.target.value  
    })
  }

  addLName = (e) => {
    this.setState({
      newLName: e.target.value  
    })
  }

  addScore = (e) => {
    this.setState({
      newScore: e.target.value  
    })
  }

  addPlayer = (e) => {
    let newPlayersList = [...this.state.players]

    if(this.state.fName === "" || this.state.newLName === "" || this.state.newScore === "" ){
      alert("No empty fields allowed!")
      return
    }

    if(this.state.newScore > 100 || this.state.newScore < 0){
      alert("Error, scores can only be between 0 and 100!")
      return
    }

    let newPlayer = {fName: this.state.newFName, lName: this.state.newLName, score: this.state.newScore}
    newPlayersList.push(newPlayer)
    console.log(newPlayersList)
    this.setState({
      players: newPlayersList.sort(this.comparePlayers)
    })
  }

  deletePlayer = (i) => {
    let shorterList = [...this.state.players]
    shorterList.splice(i, 1);
    this.setState({
      players: shorterList
    })
  }

  render() {
    return (
      <div className="App">
        <h2>Add a Player</h2>
        <form className="add-player-form">
          <div className="form-row">
            <p className="form-label">First Name: </p><input type="text" className="form-text-input" value={this.state.newFName} onChange={(e)=>{this.addFName(e)}} placeholder="first name" />
          </div>
          <div className="form-row">
            <p className="form-label">Last Name: </p><input type="text" className="form-text-input" value={this.state.newLName} onChange={(e)=>{this.addLName(e)}} placeholder="last name" />
          </div>
          <div className="form-row">
            <p className="form-label">Score: </p><input type="number" id="score-text-input" value={this.state.newScore} onChange={(e)=>{this.addScore(e)}} placeholder="score" />
          </div>
          <button type="button" id="add-player-button" onClick={(e)=>{this.addPlayer(e)}}>Add</button>
        </form>
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
