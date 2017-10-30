import React from "react";
import Dock from "../dock";

export default function(props) {
  return (
    <Dock
      className="dock"
      backgroundClassName="dock-background"
      width={Math.min(800, window.innerWidth * 0.6)}
      magnification={0.8}
      debug={false}
    >
      <Dock.App className="dock-app" onClick={() => console.log("finder")}>
        <img src="images/osx/finder.png" /><span className="circle" />
      </Dock.App>
      <Dock.App className="dock-app">
        <img src="images/osx/settings.png" /><span className="circle" />
      </Dock.App>
      <Dock.App className="dock-app">
        <img src="images/osx/app-store.png" /><span className="circle" />
      </Dock.App>
      <Dock.App className="dock-app">
        <img src="images/osx/preview.png" /><span className="circle" />
      </Dock.App>
      <Dock.App className="dock-app">
        <img src="images/osx/terminal.png" /><span className="circle" />
      </Dock.App>
      <Dock.App className="dock-app">
        <img src="images/osx/atom.png" /><span className="circle" />
      </Dock.App>
      <Dock.App className="dock-app">
        <img src="images/osx/slack.png" /><span className="circle" />
      </Dock.App>
      <Dock.App className="dock-app">
        <img src="images/osx/chrome.png" /><span className="circle" />
      </Dock.App>
      <Dock.App className="dock-app">
        <img src="images/osx/spotify.png" /><span className="circle" />
      </Dock.App>
      <Dock.App className="dock-app">
        <img src="images/osx/guitar-pro.png" /><span className="circle" />
      </Dock.App>
      <Dock.App className="dock-app">
        <img src="images/osx/steam.png" /><span className="circle" />
      </Dock.App>
      <Dock.App className="dock-app">
        <img src="images/osx/trash.png" /><span className="circle" />
      </Dock.App>
    </Dock>
  );
}
