import React, { Component } from "react";

export class counter extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }
  increment() {
    this.setState((previousState) => ({
      count: previousState.count + 1,
    }));
  }
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={() => this.increment()}>Counter</button>
      </div>
    );
  }
}

export default counter;
