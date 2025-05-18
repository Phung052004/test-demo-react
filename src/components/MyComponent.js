// class component
import React, { Component } from 'react';
class MyComponent extends React.Component {
    state = {
        name: 'Eric',
        age: 18,
        address: 'Hanoi',
    }
    //JSX 
    render() {
        return (
            <div> My First Component
                <br></br>
                My name is {this.state.name}
                My age is {this.state.age}
            </div>
        )
    }
}
export default MyComponent;
// functional component