import React from "react";

export default function(props) {
  return (
    <div style={{
      position: "absolute",
      left: 0,
      bottom: 0,
      width: "100%",
      height: `${props.height}px`,
      zIndex: 0,
      background: "#ccc",
      opacity: 0.6,
      borderRadius: "4px 4px 0px 0px",
      boxShadow: "1px 1px 50px 4px rgba(0, 0, 0, 0.8)",
    }} />
  );
}
