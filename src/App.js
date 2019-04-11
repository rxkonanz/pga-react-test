import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  state = {
    players: [{fName:"Alice", lName: "Geary", score: 96}, {fName:"John", lName: "Junge", score: 96}, {fName:"Rob", lName: "Vera", score: 88}],
    newFName: "",
    newLName: "",
    newScore: 0
  }

  displayPlayers = () => {
    let playersList = this.state.players.map((player,i) => {
      return <tr key={i}>
        <td>{player.fName}, {player.lName}</td>
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
    let newPlayer = {fName: this.state.newFName, lName: this.state.newLName, score: this.state.newScore}
    newPlayersList.push(newPlayer)
    console.log(newPlayersList)
    this.setState({
      players: newPlayersList
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Leaderboard</h1>
        <form>
          <input type="text" value={this.state.newFName} onChange={(e)=>{this.addFName(e)}}></input>
          <input type="text" value={this.state.newLName} onChange={(e)=>{this.addLName(e)}}></input>
          <input type="text" value={this.state.newScore} onChange={(e)=>{this.addScore(e)}}></input>
          <button type="button" onClick={(e)=>{this.addPlayer(e)}}>Add Player</button>
        </form>
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
