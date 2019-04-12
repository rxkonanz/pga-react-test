import React, {Component, Fragment} from 'react';

export default class AddPlayerForm extends Component {
    render(){
        return(
            <Fragment>
                <h2>Add a Player</h2>
                <form className="add-player-form">
                    <div className="form-row">
                    <p className="form-label">First Name: </p><input type="text" className="form-text-input" value={this.props.state.newFName} onChange={(e)=>{this.props.setFName(e)}} placeholder="first name" />
                    </div>
                    <div className="form-row">
                    <p className="form-label">Last Name: </p><input type="text" className="form-text-input" value={this.props.state.newLName} onChange={(e)=>{this.props.setLName(e)}} placeholder="last name" />
                    </div>
                    <div className="form-row">
                    <p className="form-label">Score: </p><input type="number" id="score-text-input" value={this.props.state.newScore} onChange={(e)=>{this.props.setScore(e)}} placeholder="score" />
                    </div>
                    <button type="button" id="add-player-button" onClick={(e)=>{this.props.addPlayer(e)}}>Add/Edit</button>
                </form>
            </Fragment>
        )
    }
}