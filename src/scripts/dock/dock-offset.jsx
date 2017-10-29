import React from "react";

export default function(props) {
  return (
    <div style={{
      width: `${props.width}px`,
      height: "100%",
      background: "red",
      opacity: props.debug ? 0.5 : 0,
    }} />
  );
}
