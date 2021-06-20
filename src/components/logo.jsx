import React, { Component } from 'react';
import logo from '../assets/logo/logo@1x.png';

class Logo extends Component {
    state = {  }
    render() { 
        return ( <div className="">
            <img src={logo} className="App-logo" alt="logo" />
        </div> );
    }
}
 
export default Logo;