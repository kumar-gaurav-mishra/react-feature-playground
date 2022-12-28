import React from "react";

export default function HoverCounterWithRenderProps({ count, countHandler }) {
  return <button onMouseOver={countHandler}>Hoverd {count} times.</button>;
}
