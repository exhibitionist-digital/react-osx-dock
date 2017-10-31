import React from "react";
import ReactDOM from "react-dom";
import OsxExample from "./examples/osx";
import SocialExample from "./examples/social";
import PokemonExample from "./examples/pokemon";
import DebugExample from "./examples/debug";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { example: "osx", };
  }

  render() {
    let { example } = this.state;

    return (
      <div className={`app ${example}-example`}>
        <div className="example-selector">
          <span className="header">Example:</span>
          <a href="#" className={example === "osx" ? "selected" : null} onClick={() => this.setState({ example: "osx" })}>OS X</a>
          <a href="#" className={example === "social" ? "selected" : null} onClick={() => this.setState({ example: "social" })}>Social</a>
          <a href="#" className={example === "pokemon" ? "selected" : null} onClick={() => this.setState({ example: "pokemon" })}>Pokémon</a>
          <a href="#" className={example === "debug" ? "selected" : null} onClick={() => this.setState({ example: "debug" })}>Debug</a>
        </div>

        {do {
          if (example === "osx") <OsxExample />;
          else if (example === "social") <SocialExample />;
          else if (example === "pokemon") <PokemonExample />;
          else if (example === "debug") <DebugExample />;
        }}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("react"));
