import React, { Component } from "react";
import WithCounter from "./withCounter";
class ClickCounter extends Component {
  render() {
    const { count, countHandler } = this.props;
    return <button onClick={countHandler}>Clicked {count} times.</button>;
  }
}

export default WithCounter(ClickCounter, 10);
