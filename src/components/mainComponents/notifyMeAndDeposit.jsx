import React, { Component } from 'react';

class NotifymeAndDeposit extends Component {
    state = {  }
    render() { 
        return ( <div className="activity-btns">
            <a href="http://localhost:3000/" className="btn"> <i className="icon notifyme-btn-icon"></i> Notify Me</a>
            <a href="http://localhost:3000/" className="btn"> <i className="icon deposit-btn-icon"></i> Deposit</a>
        </div> );
    }
}
 
export default NotifymeAndDeposit;