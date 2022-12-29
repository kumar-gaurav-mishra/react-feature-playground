import React, { Component } from "react";

export default class RenderPropsCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  countHandler = () =>
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  render() {
    return <div>{this.props.render(this.state.count, this.countHandler)}</div>;
  }
}
