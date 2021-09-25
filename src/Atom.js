import React from "react";
import "./Atom.css";
import Shell from "./Shell";

function generateShells(shells) {
  const shellList = [];
  shells.forEach((n, index) => {
    for (let i = 0; i < n; i++) {
      shellList.push(<Shell i={i} n={n} index={index} key={(i, n)} />);
    }
  });
  return shellList;
}

function Atom(props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="atom"
        style={{
          width: 150 + (props.config.length - 1) * 100 + 30,
          height: 150 + (props.config.length - 1) * 100 + 30,
        }}
      >
        <div className="nucleus"></div>
        {generateShells(props.config)}
      </div>
    </div>
  );
}

export default Atom;
