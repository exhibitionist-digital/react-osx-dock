import React from "react";
import DockItem from "./dock-item";
import DockBackground from "./dock-background";

export default function(props) {
  React.Children.forEach(props.children, item => {
    if (item.type !== DockItem) throw new Error("Invalid child type.");
  });

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: props.itemWidths.map(() => "auto").join(" "),
      alignItems: "end",
      position: "relative",
    }}>
      {React.Children.map(props.children, (item, index) => (
        React.cloneElement(item, { width: props.itemWidths[index], })
      ))}
      <DockBackground className={props.backgroundClassName} height={props.height} />
    </div>
  );
}
