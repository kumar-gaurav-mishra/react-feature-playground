import React from "react";
import ItsJustMe from "./ItsJustMe";

function NameList() {
  const nameList = [
    {
      id: 1,
      name: "Gaurav",
      age: 32,
      dream: "Be Google Employee",
      status: "Failed",
    },
    {
      id: 2,
      name: "Kumar",
      age: 40,
      dream: "Be Disciplined",
      status: "In Progress",
    },
    {
      id: 3,
      name: "Pride",
      age: 44,
      dream: "Be Unstoppable",
      status: "Pending",
    },
    {
      id: 4,
      name: "Pride d. Dangerous",
      age: 75,
      dream: "Be Youngest old man alive",
      status: "Pending",
    },
  ];
  return (
    <div>
      {nameList.map((me) => (
        <ItsJustMe key={me.id} me={me} />
      ))}
    </div>
  );
}

export default NameList;
