import React, { Component } from "react";

class Counter extends Component {
  // state = {
  //   counter: 0,
  // };

  // constructor(props){
  //   super(props)
  //   this.counter
  // }

  formatCount = () => {
    if (this.state.counter === 0) return "zero";
    return this.state.counter;
  };

  render() {
    console.log(this.props);

    return (
      <>
        <ul>
          <li className="list-unstyled">
            <div>
              <span className="badge bg-warning">{this.props.value}</span>
              <button
                type="button"
                onClick={() => this.props.onIncrement(this.props.id)}
                className="btn btn-secondary m-2"
              >
                +
              </button>
              <button
                type="button"
                onClick={() => this.props.onDecrement(this.props.id)}
                className="btn btn-secondary m-2"
              >
                -
              </button>
              <button type="button" className="btn btn-danger m-2">
                Delete
              </button>
            </div>
          </li>
        </ul>
      </>
    );
  }
}

export default Counter;
