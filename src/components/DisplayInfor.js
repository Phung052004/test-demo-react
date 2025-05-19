import React from "react";
import UserInfor from "./UserInfor";


class DisplayInfor extends React.Component {
    render() {
        console.log(this.props);
        //props => is properties 
        return (
            <div>
                <div>My Name is {this.props.name}</div>
                <div>My age is {this.props.age}</div>

            </div>
        )




    }
}
export default DisplayInfor;