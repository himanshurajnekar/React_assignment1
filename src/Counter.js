import React, { Component } from 'react'
class Counter extends Component {

    state = {
        count: 0
    }
    increamentCounter() {
        this.setState({
            count: this.state.count + 1
        });
    }
    DecrementConter() {
        if (this.state.count > 0)
            this.setState({ count: this.state.count - 1 });

    }
    render() {
        return (
            <div>
                <h2 >Class Component</h2>
                <div>{this.state.count}</div>
                <p><button style={{ marginRight: "10px" }} onClick={()=>this.DecrementConter() }>-</button><button onClick={()=>this.increamentCounter() }>+</button></p>
            </div>
        )
    }
}
export default Counter