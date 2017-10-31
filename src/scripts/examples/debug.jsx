import React from "react";
import Dock from "../dock";

export default function(props) {
  return (
    <Dock
      className="dock"
      backgroundClassName="dock-background"
      width={Math.min(800, window.innerWidth * 0.6)}
      magnification={0.8}
      magnifyDirection="up"
      debug={true}
    >
      {["A", "B", "C", "D", "E", "F", "G", "H", "I"].map((letter, index) => (
        <Dock.Item key={index} className="dock-item" onClick={() => console.log(letter)}>
          <span className="letter">{letter}</span>
        </Dock.Item>
      ))}
    </Dock>
  );
}
