import React from "react";
import DockApp from "./dock-app";
import DockBackground from "./dock-background";

export default function(props) {
  React.Children.forEach(props.children, app => {
    if (app.type !== DockApp) throw new Error("Invalid child type.");
  });

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: props.appWidths.map(colWidth => `${colWidth}px`).join(" "),
      // gridColumnGap: "10px",
      alignItems: "end",
      position: "relative",
    }} >
      {props.children}
      <DockBackground height={props.height} />
    </div>
  );
}
