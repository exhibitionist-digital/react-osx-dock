import React from "react";
import ReactDOM from "react-dom";
import Dock from "./dock";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Dock className="dock" width={Math.min(650, window.innerWidth * 0.6)} magnification={1} debug={false}>
          <Dock.App image="images/finder.png" onActivate={() => console.log("finder")} />
          <Dock.App image="images/settings.png" onActivate={() => console.log("settings")} />
          <Dock.App image="images/app-store.png" onActivate={() => console.log("app-store")} />
          <Dock.App image="images/preview.png" onActivate={() => console.log("preview")} />
          <Dock.App image="images/terminal.png" onActivate={() => console.log("terminal")} />
          <Dock.App image="images/atom.png" onActivate={() => console.log("atom")} />
          <Dock.App image="images/cyberduck.png" onActivate={() => console.log("cyberduck")} />
          <Dock.App image="images/chrome.png" onActivate={() => console.log("chrome")} />
          <Dock.App image="images/slack.png" onActivate={() => console.log("slack")} />
          <Dock.App image="images/spotify.png" onActivate={() => console.log("spotify")} />
          <Dock.App image="images/garageband.png" onActivate={() => console.log("garageband")} />
          <Dock.App image="images/steam.png" onActivate={() => console.log("steam")} />
          <Dock.App image="images/trash.png" onActivate={() => console.log("trash")} />
        </Dock>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("react"));
