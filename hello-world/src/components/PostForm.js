import React, { Component } from "react";

export default class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "",
      body: "",
      title: "",
    };
  }
  onChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  onSubmitHandler = async (e) => {
    e.preventDefault();
    await this.props.UpdatePosts(this.state);
    this.setState({
      userId: "",
      body: "",
      title: "",
    });
  };
  render() {
    return (
      <form onSubmit={this.onSubmitHandler}>
        <label htmlFor="userId">UserId</label>
        <br></br>
        <input
          type="text"
          name="userId"
          id="userId"
          value={this.state.userId}
          onChange={this.onChangeHandler}
        />
        <br />
        <label htmlFor="body">body</label>
        <br></br>
        <input
          type="text"
          name="body"
          id="body"
          value={this.state.body}
          onChange={this.onChangeHandler}
        />
        <br />
        <label htmlFor="title">title</label>
        <br></br>
        <input
          type="text"
          name="title"
          id="title"
          value={this.state.title}
          onChange={this.onChangeHandler}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
