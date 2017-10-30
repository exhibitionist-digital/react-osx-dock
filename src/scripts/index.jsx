import React from "react";
import ReactDOM from "react-dom";
import Dock from "./dock";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { dockType: "osx", };
  }

  render() {
    return (
      <div className={`app ${this.state.dockType}`}>
        {this.dockTypeSelector}
        {this.dock}
      </div>
    );
  }

  get dockTypeSelector() {
    let { dockType } = this.state;

    return (
      <div className="dock-type-selector">
        <span className="header">Style:</span>
        <a href="#" className={dockType === "osx" ? "selected" : null} onClick={() => this.setState({ dockType: "osx" })}>OS X</a>
        <span className="divider" />
        <a href="#" className={dockType === "social" ? "selected" : null} onClick={() => this.setState({ dockType: "social" })}>Social</a>
        <span className="divider" />
        <a href="#" className={dockType === "pokemon" ? "selected" : null} onClick={() => this.setState({ dockType: "pokemon" })}>Pokémon</a>
      </div>
    );
  }

  get dock() {
    switch (this.state.dockType) {
      case "osx": return this.osxDock;
      case "social": return this.socialDock;
      case "pokemon": return this.pokemonDock;
      default: throw new Error("Invalid dock type.");
    }
  }

  get osxDock() {
    return (
      <Dock
        className="dock"
        width={Math.min(650, window.innerWidth * 0.6)}
        padding={3}
        magnification={1}
        debug={false}
      >
        <Dock.App image="images/osx/finder.png" onActivate={() => console.log("finder")} />
        <Dock.App image="images/osx/settings.png" onActivate={() => console.log("settings")} />
        <Dock.App image="images/osx/app-store.png" onActivate={() => console.log("app-store")} />
        <Dock.App image="images/osx/preview.png" onActivate={() => console.log("preview")} />
        <Dock.App image="images/osx/terminal.png" onActivate={() => console.log("terminal")} />
        <Dock.App image="images/osx/atom.png" onActivate={() => console.log("atom")} />
        <Dock.App image="images/osx/cyberduck.png" onActivate={() => console.log("cyberduck")} />
        <Dock.App image="images/osx/chrome.png" onActivate={() => console.log("chrome")} />
        <Dock.App image="images/osx/slack.png" onActivate={() => console.log("slack")} />
        <Dock.App image="images/osx/spotify.png" onActivate={() => console.log("spotify")} />
        <Dock.App image="images/osx/garageband.png" onActivate={() => console.log("garageband")} />
        <Dock.App image="images/osx/steam.png" onActivate={() => console.log("steam")} />
        <Dock.App image="images/osx/trash.png" onActivate={() => console.log("trash")} />
      </Dock>
    );
  }

  get socialDock() {
    return (
      <Dock
        className="dock"
        width={Math.min(600, window.innerWidth * 0.6)}
        padding={20}
        magnification={1}
        debug={false}
      >
        <Dock.App image="images/social/facebook.png" />
        <Dock.App image="images/social/twitter.png" />
        <Dock.App image="images/social/googleplus.png" />
        <Dock.App image="images/social/instagram.png" />
        <Dock.App image="images/social/tumblr.png" />
        <Dock.App image="images/social/linkedin.png" />
      </Dock>
    );
  }

  get pokemonDock() {
    return (
      <Dock
        className="dock"
        width={Math.min(600, window.innerWidth * 0.6)}
        padding={10}
        magnification={1.2}
        debug={false}
      >
        <Dock.App image="images/pokemon/pikachu.png" />
        <Dock.App image="images/pokemon/charmander.png"/>
        <Dock.App image="images/pokemon/squirtle.png" />
        <Dock.App image="images/pokemon/bulbasaur.png" />
        <Dock.App image="images/pokemon/snorlax.png" />
        <Dock.App image="images/pokemon/psyduck.png" />
        <Dock.App image="images/pokemon/eevee.png" />
        <Dock.App image="images/pokemon/meowth.png" />
      </Dock>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("react"));
