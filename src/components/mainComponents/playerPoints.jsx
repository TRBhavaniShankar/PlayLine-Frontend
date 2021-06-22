import React, { Component } from 'react';
import Player from './player';
import Point from './point';

class PlayerPoints extends Component {
    state = { 
        players: [],
     }

    componentDidMount(){

        // get the players list and set the state with players 
        fetch('http://localhost:4433/getPlayersList')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({players : responseJson.players})
            })
            .catch((error) => {
                console.error(error);
            });
        
    }

    render() { 
        return ( <div className="player-points">
            <div className="players">
            {
                
                this.state.players.map( plr =>
                    <Player 
                        playerName={plr.last_name}
                    />
                )
            }
            </div>
            
            <div className="points">
            {
                this.state.players.map( plr =>
                    <Point pointsVal = {plr.points}/>
                )
            }
            </div>
        </div> );
    }
}
 
export default PlayerPoints;