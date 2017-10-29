import React from "react";
import ReactDOM from "react-dom";

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = { magnifierX: null, };
  }

  render() {
    return (
      <div onMouseMove={::this.onMouseMove} onMouseLeave={::this.onMouseLeave} style={{
        display: "grid",
        gridTemplateColumns: "auto auto auto"
      }} className={this.props.className} >
        {this.renderDockOffsetLeft()}
        {this.renderDock()}
        {this.renderDockOffsetRight()}
      </div>
    );
  }

  renderDockOffsetLeft() {
    let width = this.state.magnifierX === null ? this.unmagnifiedDockOffsetLeft : this.magnifiedDockOffsetLeft;

    return (
      <div style={{
        background: this.props.debug ? "red" : "transparent",
        width: `${width}px`,
        height: "100%",
      }} />
    );
  }

  renderDockOffsetRight() {
    let width = this.state.magnifierX === null ? this.unmagnifiedDockOffsetRight : this.magnifiedDockOffsetRight;

    return (
      <div style={{
        background: this.props.debug ? "red" : "transparent",
        width: `${width}px`,
        height: "100%",
      }} />
    );
  }

  renderDock() {
    let appWidths = this.state.magnifierX === null ? this.unmagnifiedDockAppWidths : this.magnifiedDockAppWidths;

    return (
      <div style={{
        display: "grid",
        gridTemplateColumns: appWidths.map(colWidth => `${colWidth}px`).join(" "),
        alignItems: "end",
        position: "relative",
        // gridColumnGap: "10px",
      }} >
        {this.renderDockApps()}
        {this.renderDockBackground()}
      </div>
    );
  }

  renderDockApps() {
    return React.Children.map(this.props.children, (app, index) => (
      <div key={index} style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        zIndex: 1,
      }} >
        {React.cloneElement(app, { style: { width: "100%" } })}
      </div>
    ));
  }

  renderDockBackground() {
    return (
      <div style={{
        position: "absolute",
        left: 0,
        bottom: 0,
        width: "100%",
        height: `${this.unmagnifiedDockAppWidth}px`,
        background: "#ccc",
        opacity: 0.6,
        borderRadius: "4px 4px 0px 0px",
        boxShadow: "1px 1px 50px 4px rgba(0, 0, 0, 0.8)",
        zIndex: 0,
      }} />
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
    return React.Children.map(this.props.children, (app, index) => {
      if (magnifierX === null) return this.unmagnifiedDockAppWidth;

      let appCenter = this.computeDockWidth(this.unmagnifiedDockAppWidths.slice(0, index)) + (this.unmagnifiedDockAppWidth / 2);
      let distance = Math.abs(magnifierX - appCenter);
      let distancePercent = Math.max(1 - (distance / this.magnifierRadius), 0);
      return this.unmagnifiedDockAppWidth + (this.unmagnifiedDockAppWidth * distancePercent * this.magnification);
    });
  }

  computeDockWidth(appWidths) {
    return appWidths.reduce((sum, appWidth) => sum + appWidth, 0);
  }

  get unmagnifiedDockAppWidth() {
    return this.props.width / React.Children.count(this.props.children);
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

  get unmagnifiedDockOffsetLeft() {
    return this.unmagnifiedDockOffset / 2;
  }

  get unmagnifiedDockOffsetRight() {
    return this.unmagnifiedDockOffsetLeft;
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

  get magnifiedDockOffsetLeft() {
    return this.state.magnifierX < this.unmagnifiedDockWidth / 2 ? this.magnifiedDockOffset : 0;
  }

  get magnifiedDockOffsetRight() {
    return this.state.magnifierX >= this.unmagnifiedDockWidth / 2 ? this.magnifiedDockOffset : 0;
  }

  get maxMagnifiedDockWidth() {
    // The dock's width will be maximum when the mouse is magnifying the center of it.
    return this.computeDockWidth(this.computeDockAppWidths(this.unmagnifiedDockWidth / 2));
  }

  get magnifierRadius() {
    return this.unmagnifiedDockAppWidth * 3;
  }

  get magnification() {
    return Math.max(this.props.magnification, 0);
  }
}
