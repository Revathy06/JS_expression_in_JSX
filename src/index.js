import React from "react";
import ReactDOM from "react-dom";

const name = "Revathy";
const date = new Date();
const yr = date.getFullYear();
ReactDOM.render(
  <div>
    <p>Created by {name}</p>
    <p>Copyright {yr}</p>
  </div>,
  document.getElementById("root")
);
