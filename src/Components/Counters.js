import React, { Component } from 'react';
import Counter from "./Counter"

class Counters extends Component {//composing components
    state = { 
       counters: [
           {id: 1, value: 4},
           {id: 2, value: 0},
           {id: 3, value: 0}
       ]
     } 
    render() { 
        return (
            <div>
                {this.state.counters.map(counter => 
                <Counter key={counter.id} value={counter.value} selected={true}>
                    <h4>Counter #{counter.id}</h4>
                </Counter>
                
                )}
            </div>
        );
    }
}
 
export default Counters;