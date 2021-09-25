import React from "react";
import "./Shell.css";

function Shell(props) {
  return (
    <div
      className="shell"
      style={{
        width: 150 + 100 * props.index,
        height: 150 + 100 * props.index,
        "--starting-rotate": `${
          (props.i / props.n) * 360 + props.index * 25
        }deg`,
      }}
    >
      <div className="electron"></div>
    </div>
  );
}

export default Shell;
