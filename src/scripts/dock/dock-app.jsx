import React from "react";

export default function(props) {
  return (
    <img className={props.className} src={props.image} onClick={props.onActivate} style={{
      width: `calc(${props.width - (props.padding * 2)}px)`,
      padding: `${props.padding}px`,
      zIndex: 1,
    }} />
  );
}
