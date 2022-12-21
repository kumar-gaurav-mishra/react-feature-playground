import React, { Component } from "react";
import Child from "./child";
export class parent extends Component {
  constructor() {
    super();
    this.state = {
      message: "Hello from Parent",
    };
  }
  callParent = (calledFrom) => {
    alert(`${this.state.message} from ${calledFrom}`);
    // this.setState(
    //   { message: `Called Parent from ${calledFrom}` },
    //   alert(this.state.message)
    // );
  };
  render() {
    return (
      <div>
        <Child clickHandler={this.callParent} />
      </div>
    );
  }
}

export default parent;
