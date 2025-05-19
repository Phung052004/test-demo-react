// class component
import React, { Component } from 'react';
import UserInfor from './UserInfor';
import DisplayInfor from './DisplayInfor';
class MyComponent extends React.Component {


    //JSX 
    render() {

        const myAge = 20;
        return (
            <div> My First Component
                <UserInfor></UserInfor>
                <br></br>
                <DisplayInfor name="Giang" age="20" ></DisplayInfor>
                <hr></hr>
                <DisplayInfor name="huy" age={30} ></DisplayInfor>
            </div>
        )
    }
}
export default MyComponent;
// functional component