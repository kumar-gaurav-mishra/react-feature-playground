import React, { Component } from "react";

class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome Visitor!",
    };
    this.changeMessage = this.changeMessage.bind(this);
  }
  // changeMessage = () => this.setState({ message: "Thanks for your visit." });
  changeMessage() {
    this.setState({ message: "Thanks for your visit." });
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.changeMessage}>Click to Log your Visit!</button>
      </div>
    );
  }
}

export default Message;
