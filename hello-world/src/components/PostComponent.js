import React, { Component } from "react";
import axios from "axios";
import PostList from "./PostList";
import PostForm from "./PostForm";
export default class PostComponent extends Component {
  postListUrl = "https://jsonplaceholder.typicode.com/posts";
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      error: "Error while reatriving Posts...",
    };
  }
  UpdatePosts = (post) => {
    console.log(post);
    axios
      .post(this.postListUrl, post)
      .then((res) => {
        console.log(res.data);
        this.setState({
          posts: [res.data, ...this.state.posts],
        });
      })
      .catch((err) => console.log(err));
  };
  componentDidMount() {
    axios
      .get(this.postListUrl)
      .then((response) => this.setState({ posts: response.data }))
      .catch((error) => alert(error));
  }
  render() {
    return (
      <div>
        <PostForm UpdatePosts={this.UpdatePosts} id={this.state.posts.length} />
        <PostList posts={this.state.posts} error={this.state.error} />
      </div>
    );
  }
}
