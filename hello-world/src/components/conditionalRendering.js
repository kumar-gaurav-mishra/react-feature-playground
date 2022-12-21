import React, { Component } from "react";

class conditionalRendering extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true,
    };
  }
  render() {
    return this.state.isLoggedIn ? (
      <h1>Welcome Kumar</h1>
    ) : (
      <h1>Welcome Guest</h1>
    );
  }
}

export default conditionalRendering;
