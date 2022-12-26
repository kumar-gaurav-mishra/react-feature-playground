import React, { Component } from "react";

export default class ClickCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicks: 0,
    };
  }
  ClickCounter = () =>
    this.setState((prevState) => ({
      clicks: prevState.clicks + 1,
    }));
  render() {
    return (
      <button onClick={this.ClickCounter}>
        Clicked {this.state.clicks} times.
      </button>
    );
  }
}
