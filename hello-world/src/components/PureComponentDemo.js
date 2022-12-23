import React, { PureComponent } from "react";

export default class PureComponentDemo extends PureComponent {
  constructor() {
    super();
    this.state = {
      name: "kumar",
    };
  }
  componentDidMount() {
    console.log("Component mounted");
    setInterval(() => {
      this.setState({ name: "Kumar" });
    }, 2000);
  }
  render() {
    console.log("render");
    return <div>{this.state.name}</div>;
  }
}
