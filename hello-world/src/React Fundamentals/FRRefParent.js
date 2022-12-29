import React, { Component } from "react";
import { createRef } from "react";
import FRRefChild from "./FRRefChild";
export default class FRRefParent extends Component {
  constructor(props) {
    super(props);
    this.InputRef = createRef();
  }
  focusOnInput = () => {
    this.InputRef.current.focus();
  };
  render() {
    return (
      <div>
        <FRRefChild ref={this.InputRef} />
        <button onClick={this.focusOnInput}>Focus Input</button>
      </div>
    );
  }
}
