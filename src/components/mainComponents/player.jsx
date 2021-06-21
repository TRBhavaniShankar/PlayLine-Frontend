import React, { Component } from 'react';
import aaron from '../../assets/headshots/Lebron-James-PLP59D7092A6F6CEv2.png'

class Player extends Component {
    state = { 
        playersImages: {
            'James' : '../../assets/headshots/Lebron-James-PLP59D7092A6F6CEv2.png',
            'Davis' : '../../assets/headshots/Anthony-Davis-PLP59D70938C0B3Ev2.png',
            'Gordon' : '../../assets/headshots/Aaron Gordon -PLP59D7092156491v2.png',
            'Siakam' : '../../assets/headshots/Pascal-Siakam-PLP59D70927CC6DD.png',
            'Leonard' : '../../assets/headshots/Kawhi-Leonard-PLP59D7093A107E7v2.png',
            'Lowry' : '../../assets/headshots/Kyle-Lowry-PLP59D70927DF104.png',
            'Russell' : '../../assets/headshots/Dangelo Russell PLP59D709255D994v4.png',
        }
     }
    render() { 

        return ( <div>
            <img src={aaron} alt="aaron" className="player-img"/>
            <h5>{this.props.playerName}</h5>
        </div> );
    }

    
}
 
export default Player;