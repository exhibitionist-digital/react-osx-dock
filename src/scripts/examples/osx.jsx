import React from "react";
import Dock from "../dock";

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = { activatedApps: this.apps.filter(() => Math.random() > 0.5) };
  }

  render() {
    return (
      <Dock
        className="dock"
        backgroundClassName="dock-background"
        width={Math.min(800, window.innerWidth * 0.6)}
        magnification={0.8}
        debug={false}
      >
        {this.apps.map((app, index) => (
          <Dock.Item key={index} className="dock-item" onClick={() => this.toggleAppActivation(app)}>
            <img src={`images/osx/${app}.png`} />
            <span className="active-indicator" style={{ opacity: this.state.activatedApps.includes(app) ? 1 : 0 }} />
          </Dock.Item>
        ))}
      </Dock>
    );
  }

  toggleAppActivation(app) {
    let activatedApps = Array.from(this.state.activatedApps);

    if (activatedApps.includes(app)) {
      activatedApps.splice(activatedApps.indexOf(app), 1);
    } else {
      activatedApps.push(app);
    }

    this.setState({ activatedApps });
  }

  get apps() {
    return [
      "finder",
      "settings",
      "app-store",
      "preview",
      "terminal",
      "atom",
      "slack",
      "chrome",
      "spotify",
      "guitar-pro",
      "steam",
      "trash",
    ];
  }
}
