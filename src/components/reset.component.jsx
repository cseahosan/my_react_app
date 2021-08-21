import React, { Component } from "react";

class Reset extends Component {
  state = {};
  render() {
    return (
      <button
        onClick={this.props.onReset}
        type="button"
        className="btn btn-primary b-4"
      >
        Reset
      </button>
    );
  }
}

export default Reset;
