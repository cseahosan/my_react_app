import React, { Component } from "react";
import Counter from "./counter.component";

class Counters extends Component {
  state = { 
    counters: [
      { id: 0, value: 0 },
      { id: 0, value: 0 },
      { id: 0, value: 0 },
      { id: 0, value: 0 },
      { id: 0, value: 0 }
    ]
  };

  render() {
    return ( 
      
      this.state.counters.map( counter => {
        return <Counter/>;
      } )
    );
  }
}

export default Counters;
