import React, { Component } from 'react';
import progressbar from "../assets/icons/progress.svg";
import googleplay from "../assets/icons/google-play@3x.png"
import iosapp from "../assets/icons/ios-app@3x.png"
import PlayerPoints from "../components/mainComponents/playerPoints"
import NotifymeAndDeposit from "../components/mainComponents/notifyMeAndDeposit"

class Main extends Component {
    render() { 
        return ( <div className="main">
            <div className="container">
                {/* Progress bar */}
                <img src={progressbar} className="progressbar" alt="progressbar"/>

                {/* Static contents */}
                <div className="playline-text-top">YOUR PLAYLINE IS SET!</div>
                <div className="playline-text-bottom">COME BACK @7:30PM TO TRACK IT LIVE</div>

                <hr/>
                
                <div className="player-points-text">
                    Pro Tip: You can manage your PlayLine's until they go live in the Upcoming area
                </div>
                
                {/* render players and points */}
                <PlayerPoints />
                
                {/* render notifyme button and deposit button */}
                <NotifymeAndDeposit/>
                
                <hr className="horizontalline-bottom"/>
                
                <div className="downladapp-text">DOWNLOAD THE APP</div>
                <div className="download-buttons">
                    <img src={iosapp} alt="iosapp" className="download-btn"/>
                    <img src={googleplay} alt="googleplay" className="download-btn"/>
                </div>
            </div>
        </div> );
    }
}
 
export default Main;