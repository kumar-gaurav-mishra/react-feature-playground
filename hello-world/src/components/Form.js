import React, { Component } from "react";

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      comments: "",
      topic: "react",
    };
  }

  usernameChangeHandler = ({ target: { value } }) => {
    this.setState({ username: value });
  };
  commentsChangeHandler = ({ target: { value } }) => {
    this.setState({ comments: value });
  };
  topicChangeHandler = ({ target: { value } }) => {
    this.setState({ topic: value });
  };
  submitHandler = (event) => {
    event.preventDefault();
    alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`);
  };
  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.usernameChangeHandler}
        />
        <br />
        <br />
        <br />
        <label htmlFor="comments">Comments: </label>
        <textarea
          name="comments"
          value={this.state.comments}
          onChange={this.commentsChangeHandler}
        ></textarea>
        <br />
        <br />
        <label htmlFor="topic">Topic: </label>
        <select
          name="topic"
          value={this.state.topic}
          onChange={this.topicChangeHandler}
        >
          <option value="react">React</option>
          <option value="angular">Angular</option>
          <option value="view">View</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    );
  }
}
