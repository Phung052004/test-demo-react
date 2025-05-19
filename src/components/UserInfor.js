import React from "react";


class UserInfor extends React.Component {
    state = {
        name: 'Eric',
        age: 18,
        address: 'Hanoi',
    };
    handleClick(event) {
        console.log('Click me');

        this.setState({
            name: 'Phung',
            age: Math.floor((Math.random() * 100) + 1)
        });
        console.log(this.state.name);
    }
    handleOnMouseOver(event) {
        console.log(event.pageX);
    }
    handleOnChange = (event) => {
        this.setState({
            name: event.target.value,
        })
    }
    handleOnChange2 = (event) => {
        this.setState({
            age: event.target.value
        })
    }
    handleOnSubmit = (event) => {
        event.preventDefault()
        console.log(this.state);
    }
    render() {
        return (
            <div>  My name is {this.state.name}
                <div></div>
                My age is {this.state.age}
                <button onMouseOver={this.handleOnMouseOver}>Hover me </button>
                <button onClick={(event) => {
                    this.handleClick(event)
                }}>Click me </button>


                <form onSubmit={(event) => this.handleOnSubmit(event)} >
                    <label >Your Name </label>
                    <input type="text"
                        value={this.state.name}
                        onChange={(event) => this.handleOnChange(event)} />

                    <button>  Submit  </button>
                </form>

                <form onSubmit={(event) => this.handleOnSubmit(event)} >
                    <label >Your Age </label>
                    <input type="text"
                        value={this.state.age}
                        onChange={(event) => this.handleOnChange2(event)} />

                    <button>  Submit  </button>
                </form>
            </div>
        )
    }
} export default UserInfor;