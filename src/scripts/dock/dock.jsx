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
      gridTemplateColumns: props.appWidths.map(() => "auto").join(" "),
      alignItems: "end",
      position: "relative",
    }}>
      {React.Children.map(props.children, (app, index) => (
        React.cloneElement(app, { width: props.appWidths[index], })
      ))}
      <DockBackground className={props.backgroundClassName} height={props.height} />
    </div>
  );
}
