import React, { Component } from "react";
import ComponentF from "./ComponentF";
import UserContext from "./userContext";

class ComponentE extends Component {
  // This static contextType only works with class based components
  static contextType = UserContext;
  render() {
    return (
      <>
        Component E context {this.context}
        <ComponentF />
      </>
    );
  }
}

// ComponentE.contextType = UserContext;

export default ComponentE;
