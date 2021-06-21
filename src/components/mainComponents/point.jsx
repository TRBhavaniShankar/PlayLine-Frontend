import React, { Component } from 'react';

class Point extends Component {
    state = {  }
    render() { 
        return ( <div className="point">
            <div className="point-val">{this.props.pointsVal}</div>
            <h5 className="points-text">PTS</h5>
        </div> );
    }
}
 
export default Point;