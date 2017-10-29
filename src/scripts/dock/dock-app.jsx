import React from "react";

export default function(props) {
  return (
    <img className={props.className} src={props.image} onClick={props.onActivate} style={{
      width: "100%",
      zIndex: 1,
    }} />
  );
}
