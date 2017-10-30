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

  get socialDock() {
    return (
      <Dock
        className="dock"
        width={Math.min(700, window.innerWidth * 0.5)}
        magnification={0.7}
        debug={false}
      >
        <Dock.App className="dock-app">
          <a href="https://facebook.com"><img src="images/social/facebook.png" /></a>
        </Dock.App>
        <Dock.App className="dock-app">
          <a href="https://twitter.com"><img src="images/social/twitter.png" /></a>
        </Dock.App>
        <Dock.App className="dock-app">
          <a href="https://plus.google.com"><img src="images/social/googleplus.png" /></a>
        </Dock.App>
        <Dock.App className="dock-app">
          <a href="https://instagram.com"><img src="images/social/instagram.png" /></a>
        </Dock.App>
        <Dock.App className="dock-app">
          <a href="https://tumblr.com"><img src="images/social/tumblr.png" /></a>
        </Dock.App>
        <Dock.App className="dock-app">
         <a href="https://linkedin.com"><img src="images/social/linkedin.png" /></a>
        </Dock.App>
      </Dock>
    );
  }

  get pokemonDock() {
    return (
      <Dock
        className="dock"
        backgroundClassName="dock-background"
        width={Math.min(700, window.innerWidth * 0.5)}
        magnification={1}
        debug={false}
      >
        <Dock.App className="dock-app">
          <img src="images/pokemon/pikachu.png" />
        </Dock.App>
        <Dock.App className="dock-app">
          <img src="images/pokemon/charmander.png" />
        </Dock.App>
        <Dock.App className="dock-app">
          <img src="images/pokemon/squirtle.png" />
        </Dock.App>
        <Dock.App className="dock-app">
          <img src="images/pokemon/bulbasaur.png" />
        </Dock.App>
        <Dock.App className="dock-app">
          <img src="images/pokemon/snorlax.png" />
        </Dock.App>
        <Dock.App className="dock-app">
          <img src="images/pokemon/psyduck.png" />
        </Dock.App>
        <Dock.App className="dock-app">
          <img src="images/pokemon/eevee.png" />
        </Dock.App>
        <Dock.App className="dock-app">
          <img src="images/pokemon/meowth.png" />
        </Dock.App>
      </Dock>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("react"));
