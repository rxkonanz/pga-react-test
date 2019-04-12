import React, {Component, Fragment} from 'react';

export default class Leaderboard extends Component {
    render(){
        return(
            <Fragment>
                <img src="../pga-logo.png" id="pga-logo" alt="pga-logo" />
                <h1>Leaderboard</h1>
                <table id="leaderboard">
                <tr>
                    <th>Name</th>
                    <th>Score</th>
                    <th></th>
                </tr>
                {this.props.displayPlayers()}
                </table>
            </Fragment>
        )
    }
}