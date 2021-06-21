import React, { Component } from 'react';
import logo from '../assets/logo/logo@2x.png';

class Logo extends Component {
    state = {  }
    render() { 
        return ( <div className="logo-container">
            <img src={logo} className="App-logo" alt="logo" />
        </div> );
    }
}
 
export default Logo;