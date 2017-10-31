import React from "react";
import ReactDOM from "react-dom";
import OsxExample from "./osx-example";
import SocialExample from "./social-example";
import PokemonExample from "./pokemon-example";
import DebugExample from "./debug-example";

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
          <div className="header">Example:</div>
          <ul>
            <li><a href="#" className={example === "osx" ? "selected" : null} onClick={() => this.setState({ example: "osx" })}>OS X</a></li>
            <li><a href="#" className={example === "social" ? "selected" : null} onClick={() => this.setState({ example: "social" })}>Social</a></li>
            <li><a href="#" className={example === "pokemon" ? "selected" : null} onClick={() => this.setState({ example: "pokemon" })}>Pokémon</a></li>
            <li><a href="#" className={example === "debug" ? "selected" : null} onClick={() => this.setState({ example: "debug" })}>Debug</a></li>
          </ul>
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
