import React, { Component } from "react";

class Counter extends Component {
  state = {
    counter: 0,
  };

  formatCount = () => {
    if (this.state.counter === 0) return "zero";
    return this.state.counter;
  };

  handleIncrement = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  handleDecrement = () => {
    if (this.state.counter > 0)  this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <>
        {/* 
        <button type="button" className="btn btn-primary m-4">
          Reset
        </button> */}

        <ul>
          <li className="list-unstyled">
            <div>
              <span className="badge bg-warning">{this.formatCount()}</span>
              <button
                type="button"
                onClick={this.handleIncrement}
                className="btn btn-secondary m-2"
              >
                +
              </button>
              <button
                type="button"
                onClick={this.handleDecrement}
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