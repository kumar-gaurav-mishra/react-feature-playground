import React from "react";

export default function ClickCounterWithRenderProps({ count, countHandler }) {
  return <button onClick={countHandler}>Clicked {count} times.</button>;
}
