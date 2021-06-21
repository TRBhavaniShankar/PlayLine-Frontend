import React, { Component } from 'react';

class Point extends Component {
    state = {  }
    render() { 
        return ( <div>
            <div className="points-val">{this.props.pointsVal}</div>
            <h5>PTS</h5>
        </div> );
    }
}
 
export default Point;