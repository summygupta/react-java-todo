import React, { Component } from "react";
import "./Counter.css";
import PropTypes from "prop-types";

class Counter extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0
        };
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }
    render() {
        return (
            <div className="counter">
                <CounterButtons value={1} incrementMethod={this.increment} decrementMethod={this.decrement} />
                <CounterButtons value={5} incrementMethod={this.increment} decrementMethod={this.decrement} />
                <CounterButtons value={10} incrementMethod={this.increment} decrementMethod={this.decrement} />
                <span className="count">{this.state.counter}</span>
                <div><button className="reset" onClick={this.reset}>Reset</button></div>
            </div>
        );
    }
    increment(
        value //update the state here
    ) {
        console.log(`increment by ${value} from child`)
        this.setState(
            (prevState) => { return { counter: prevState.counter + value } }
        )
    }
    decrement(
        value //update the state here
    ) {
        console.log(`increment by ${value} from child`)
        this.setState(
            (prevState) => { return { counter: prevState.counter - value } }
        )
    }

    reset() {
        this.setState({
            counter: 0
        })
    }
}

//child class CounterButtons

class CounterButtons extends Component {
    //initial state defined in constructor


    // render=()=>
    render() {
        return (
            <div className="Counter">
                <button onClick={() => this.props.incrementMethod(this.props.value)}>+{this.props.value}</button>
                <button onClick={() => this.props.decrementMethod(this.props.value)}>-{this.props.value}</button>

            </div>
        );
    }

}

Counter.propType = {
    value: PropTypes.number,
};
export default Counter;
