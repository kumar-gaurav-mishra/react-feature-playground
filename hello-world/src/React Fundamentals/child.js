import React from "react";

export default function child(props) {
  return (
    <div>
      <h1>This is child component</h1>
      <button onClick={() => props.clickHandler("Child")}>Call Parent</button>
    </div>
  );
}
