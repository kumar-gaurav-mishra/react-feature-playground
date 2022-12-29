import React, { Component } from "react";
import { UserConsumer } from "./userContext";

export default class ComponentF extends Component {
  render() {
    return (
      <UserConsumer>
        {(username) => {
          return <h1>Hello {username}</h1>;
        }}
      </UserConsumer>
    );
  }
}
