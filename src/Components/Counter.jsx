import React, { Component } from 'react'

class Counter extends Component {
    state = {
        count: 1, //add value dynamically with state
    }
    render() { 
        return (//setting the attributes(classname)
            <div>
                <span className='badge badge-primary m-2'>{this.formatCouter()}</span> 
                <button className='btn btn-secondary btn-sm'>increament</button>
            </div>
        );

    }
    formatCouter () {
        const {count} = this.state;
        return count === 0  ? "zero" : count;
    }
}
 
export default Counter;