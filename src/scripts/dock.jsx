import React from "react";
import ReactDOM from "react-dom";

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = { magnifierX: null, };
  }

  render() {
    let appWidths = this.state.magnifierX === null ? this.unmagnifiedDockAppWidths : this.magnifiedDockAppWidths;

    let offsetLeft = do {
      if (this.state.magnifierX === null) this.unmagnifiedDockOffset / 2;
      else if (this.state.magnifierX < this.unmagnifiedDockWidth / 2) this.magnifiedDockOffset;
      else 0;
    };

    let offsetRight = do {
      if (this.state.magnifierX === null) this.unmagnifiedDockOffset / 2;
      else if (this.state.magnifierX > this.unmagnifiedDockWidth / 2) this.magnifiedDockOffset;
      else 0;
    };

    let offsetColor = this.props.debug ? "red" : "transparent";

    return (
      <div
        className={this.props.className}
        onMouseMove={::this.onMouseMove}
        onMouseLeave={::this.onMouseLeave}
        style={{
          display: "grid",
          gridTemplateColumns: [ offsetLeft, ...appWidths, offsetRight, ].map(colWidth => `${colWidth}px`).join(" "),
          alignItems: "end",
          // gridColumnGap: "10px",
        }}
      >
        {/* offsetLeft */}
        <div style={{ background: offsetColor, height: "100%", }} />

        {this.props.apps.map((app, index) => (
          <div key={index} style={{ display: "flex", flexDirection: "column" }}>
            <svg viewBox="0 0 1 1">
              <circle cx="0.5" cy="0.5" r="0.5" />
            </svg>
          </div>
        ))}

        {/* offsetRight */}
        <div style={{ background: offsetColor, height: "100%", }} />
      </div>
    );
  }

  onMouseMove(event) {
    let element = ReactDOM.findDOMNode(this);
    let magnifierX = event.pageX - element.offsetLeft - (this.unmagnifiedDockOffset / 2);

    // If the mouse isn't over the dock, don't bother recording its coordinates.
    if (magnifierX < 0 || magnifierX > this.unmagnifiedDockWidth) {
      magnifierX = null;
    }

    this.setState({ magnifierX });
  }

  onMouseLeave(event) {
    this.setState({ magnifierX: null });
  }

  computeDockAppWidths(magnifierX = null) {
    return this.props.apps.map((app, index) => {
      if (magnifierX === null) return this.props.appWidth;

      let appCenter = this.computeDockWidth(this.unmagnifiedDockAppWidths.slice(0, index)) + (this.props.appWidth / 2);
      let distance = Math.abs(magnifierX - appCenter);
      let distancePercent = 1 - (distance / this.magnifierRadius);
      // let magnification = this.props.magnification; // TODO.
      return this.props.appWidth * (1 + Math.max(distancePercent, 0));
    });
  }

  computeDockWidth(appWidths) {
    return appWidths.reduce((sum, appWidth) => sum + appWidth, 0);
  }

  get unmagnifiedDockAppWidths() {
    return this.computeDockAppWidths();
  }

  get unmagnifiedDockWidth() {
    return this.computeDockWidth(this.unmagnifiedDockAppWidths);
  }

  get unmagnifiedDockOffset() {
    return Math.abs(this.unmagnifiedDockWidth - this.maxMagnifiedDockWidth);
  }

  get magnifiedDockAppWidths() {
    return this.computeDockAppWidths(this.state.magnifierX);
  }

  get magnifiedDockWidth() {
    return this.computeDockWidth(this.magnifiedDockAppWidths);
  }

  get magnifiedDockOffset() {
    return Math.abs(this.magnifiedDockWidth - this.maxMagnifiedDockWidth);
  }

  get maxMagnifiedDockWidth() {
    // The dock's width will be maximum when the mouse is magnifying the center of it.
    return this.computeDockWidth(this.computeDockAppWidths(this.unmagnifiedDockWidth / 2));
  }

  get magnifierRadius() {
    return this.props.appWidth * 3;
  }
}
