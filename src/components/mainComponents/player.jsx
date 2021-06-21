import React, { Component } from 'react';
import james from '../../assets/headshots/Lebron-James-PLP59D7092A6F6CEv2.png';
import davis from '../../assets/headshots/Anthony-Davis-PLP59D70938C0B3Ev2.png';
import gordon from '../../assets/headshots/Aaron Gordon -PLP59D7092156491v2.png';
import siakam from '../../assets/headshots/Pascal-Siakam-PLP59D70927CC6DD.png';
import leonard from '../../assets/headshots/Kawhi-Leonard-PLP59D7093A107E7v2.png';
import lowry from '../../assets/headshots/Kyle-Lowry-PLP59D70927DF104.png';
import russell from '../../assets/headshots/Dangelo Russell PLP59D709255D994v4.png';

class Player extends Component {
    state = { 
        playersImages: {
            'James' : james,
            'Davis' : davis,
            'Gordon' : gordon,
            'Siakam' : siakam,
            'Leonard' : leonard,
            'Lowry' : lowry,
            'Russell' : russell
        }
     }
    render() { 
        return ( <div>
            <img src={this.state.playersImages[this.props.playerName]} alt="player" className="player-img"/>
            <h5 className="player-name-text">{this.props.playerName}</h5>
        </div> );
    }

    
}
 
export default Player;