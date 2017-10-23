import React from "react";
import ReactDOM from "react-dom";
import Dock from "./dock";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Dock />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("react"));
