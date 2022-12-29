import React from "react";

export default function PostList({ posts, error }) {
  return (
    <div>
      <h1>List of posts: </h1>
      {posts && posts.length ? (
        posts.map((post) => {
          return (
            <div key={post.id}>
              <h2>{post.title.toUpperCase()}</h2>
              <p>{post.body}</p>
            </div>
          );
        })
      ) : (
        <h1>{error}</h1>
      )}
    </div>
  );
}
