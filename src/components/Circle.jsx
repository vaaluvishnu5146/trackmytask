import React from "react";


class Circle extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0
        };
    }

    componentDidMount() {
        console.log('After Component mounting')
    }

    // UNSAFE_componentWillMount() {
    //     console.log('Before component mounting')
    // }

    // static getDerivedStateFromProps(props, state) {
    //     console.log('static getDerivedStateFromProps')
    //     return state;
    // }

    shouldComponentUpdate() {
        console.log('Should component update running')
        return true
    }

    componentWillUpdate() {
        console.log("Will Update")
    }

    componentDidUpdate() {
        console.log("Did update")
    }

    componentWillUnmount() {
        alert("Component will be removed")
    }

    handleCountChange = (e) => {
        e.preventDefault();
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return <div>
            <h1>{this.state.count}</h1>
            <button onClick={this.handleCountChange}>+</button>
        </div>
    }
}

export default Circle;