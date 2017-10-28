import React from "react";
import ReactDOM from "react-dom";
import Dock from "./dock";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Dock className="dock" appWidth={50} magnification={1} debug={false}>
          <img src="images/finder.png" />
          <img src="images/settings.png" />
          <img src="images/app-store.png" onClick={() => console.log("!")} />
          <img src="images/preview.png" />
          <img src="images/terminal.png" />
          <img src="images/atom.png" />
          <img src="images/cyberduck.png" />
          <img src="images/chrome.png" />
          <img src="images/slack.png" />
          <img src="images/spotify.png" />
          <img src="images/garageband.png" />
          <img src="images/steam.png" />
          <img src="images/trash.png" />
        </Dock>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("react"));
