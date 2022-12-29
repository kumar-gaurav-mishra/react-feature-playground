import React, { Component } from "react";

export default class Lifecycle extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "kumar" };
    console.log("constructor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps");
    return null;
  }
  componentDidMount() {
    this.setState({ name: "Pride" }, () =>
      console.log("set state in componentDidMount")
    );
    console.log("componentDidMount");
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
    return null;
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate");
  }
  shouldComponentUpdate(prevProps, prevState) {
    console.log("shouldComponentUpdate");
    return true;
  }
  render() {
    console.log("render");
    return <div>Lifecycle</div>;
  }
}
