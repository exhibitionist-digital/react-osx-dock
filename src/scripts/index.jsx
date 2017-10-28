import React from "react";
import ReactDOM from "react-dom";
import Dock from "./dock";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Dock apps={Array.from({ length: 16 })} appWidth={40} debug={true} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("react"));
