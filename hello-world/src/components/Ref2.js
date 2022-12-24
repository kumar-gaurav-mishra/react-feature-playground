import React, { Component, createRef } from "react";

class Ref2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
    };

    this.inputRef = createRef();
  }
  focusInputTest = () => {
    this.inputRef.current.focus();
  };
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
      </div>
    );
  }
}

export default Ref2;
