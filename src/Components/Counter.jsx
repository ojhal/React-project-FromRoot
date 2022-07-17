import React, { Component } from 'react'

class Counter extends Component {
    state = {
        count: 0 //add value dynamically with state
    }
    render() { 
        return (
            <div>
                <span>{this.state.count}</span> 
                <button>increament</button>
            </div>
        );

    }
}
 
export default Counter;