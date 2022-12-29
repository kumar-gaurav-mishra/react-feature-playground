import React, { Component } from "react";
import MemoDemo from "./MemoDemo";

export default class ParentMemo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Kumar",
    };
  }
  componentDidMount() {
    console.log("Component Mounted");
    setInterval(() => this.setState({ name: "Kumar" }), 2000);
  }
  render() {
    return <MemoDemo name={this.state.name} />;
  }
}
