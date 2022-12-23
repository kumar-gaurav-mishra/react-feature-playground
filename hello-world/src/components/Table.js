import React from "react";
import TableRow from "./TableRow";
export default function Table() {
  return (
    <table>
      <thead>
        <tr>
          <td>Name</td>
          <td>Age</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <TableRow />
        </tr>
      </tbody>
    </table>
  );
}
