import React from "react";

function Table(props) {
  return (
    <div>
      <p>A simple table</p>
      <table>
        <tr>
          <th>Name</th>
          <th>Age</th>
        </tr>
        <tr>
          <td>{props.data.name}</td>
          <td>{props.data.age}</td>
        </tr>
      </table>
    </div>
  );
}

export default Table;
