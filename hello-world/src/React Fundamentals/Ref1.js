import React, { Component, createRef } from "react";

export default class Ref1 extends Component {
  constructor(props) {
    super(props);
    this.inputRef = createRef();
    this.inputRefOld = null;
    this.setInputRefOld = (e) => {
      this.inputRefOld = e;
    };
    this.state = {
      name: "",
    };
  }
  componentDidMount() {
    console.log(this.inputRef);
    // if (this.inputRefOld) this.inputRefOld.focus();
    this.inputRef.current.focus();
  }
  changeHandler = (e) => {
    this.setState({ name: e.target.value });
  };
  render() {
    return (
      <div>
        <input
          type="text"
          // ref={this.setInputRefOld}
          ref={this.inputRef}
          value={this.state.name}
          onChange={this.changeHandler}
        />
      </div>
    );
  }
}
