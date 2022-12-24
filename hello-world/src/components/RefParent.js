import React, { Component } from "react";
import { createRef } from "react";
import Ref2 from "./Ref2.js";
export default class RefParent extends Component {
  constructor(props) {
    super(props);
    this.componentRef = createRef();
  }
  clickHandler = () => {
    console.log(this.componentRef);
    this.componentRef.current.focusInputTest();
  };
  render() {
    return (
      <div>
        <Ref2 ref={this.componentRef} />
        <button onClick={this.clickHandler}>Focus</button>
      </div>
    );
  }
}
