import React from "react";

function ItsJustMe({ me }) {
  return (
    <section key={me.id}>
      <h1>{me.name}</h1>
      <h2>{me.age}</h2>
      <h3>{me.dream}</h3>
      <h4>"{me.status}"</h4>
    </section>
  );
}

export default ItsJustMe;
