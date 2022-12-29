import React from "react";
import { createPortal } from "react-dom";

export default function PortalsDemo() {
  return createPortal(
    <div>
      <h1>PortalsDemo</h1>
    </div>,
    document.getElementById("portals-root")
  );
  // return (
  //   <div>
  //     <h1>PortalsDemo</h1>
  //   </div>
  // );
}
