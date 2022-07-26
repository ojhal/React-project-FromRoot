import React, { Component } from 'react'

class Counter extends Component {
    state = {
        value: this.props.value, //add value dynamically with state and passing data to components
        tags: ["tag1","tag2","tag3"] // rendering lists
    }

    handleIncrament = product => {//event handling and binding
        console.log(product)
        this.setState({value : this.state.count + 1})
    }
    // randerTags = () => {
    //     if(this.state.tags.length === 0) return <p>There are no tags!</p>
    //     return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    // }
    render() { //conditional rendering
        // console.log(this.props)
        // console.log("props",this.props)
        // let classes = this.getBadgeClasses(); //Refactoring
        return (//setting the attributes(classname)
        <div>
                {this.props.children}
                <span className={this.getBadgeClasses()}>{this.formatCouter()}</span> 
                <button  onClick={ () => {this.handleIncrament({id:1})}} className='btn btn-secondary btn-sm'>increament</button>
                {/* {this.randerTags()} */}
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