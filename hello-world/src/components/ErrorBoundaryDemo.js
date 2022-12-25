import React from "react";

export default function ErrorBoundaryDemo({ heroName }) {
  if (heroName !== "Joker") return <div>{heroName}</div>;
  else {
    throw new Error("Not a hero");
  }
}
