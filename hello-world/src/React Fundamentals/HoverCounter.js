import React from "react";
import WithCounter from "./withCounter";

function HoverCounter({ count, countHandler }) {
  return <h1 onMouseOver={countHandler}>Hovered {count} times.</h1>;
}

export default WithCounter(HoverCounter);
