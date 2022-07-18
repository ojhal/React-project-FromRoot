import React, { Component } from 'react'

class Counter extends Component {
    state = {
        count: 0, //add value dynamically with state
        tags: ["tag1","tag2","tag3"] // rendering lists
    }
    render() { 
        // let classes = this.getBadgeClasses(); //Refactoring
        return (//setting the attributes(classname)
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCouter()}</span> 
                <button className='btn btn-secondary btn-sm'>increament</button>
                <ul>
                    {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
                </ul>
            </div>
        );

    }
    getBadgeClasses() {//rendering classes dynamically
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCouter () {
        const {count} = this.state;
        return count === 0  ? "zero" : count;
    }
}
 
export default Counter;