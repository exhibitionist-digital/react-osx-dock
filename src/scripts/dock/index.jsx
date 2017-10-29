import React from "react";
import ReactDOM from "react-dom";
import Dock from "./dock";
import DockApp from "./dock-app";
import DockOffset from "./dock-offset";

export default class extends React.Component {
  static App = DockApp;

  constructor(props) {
    super(props);

    this.state = { magnifierX: null, };
  }

  render() {
    let offsetLeft = this.state.magnifierX === null ? this.unmagnifiedDockOffsetLeft : this.magnifiedDockOffsetLeft;
    let offsetRight = this.state.magnifierX === null ? this.unmagnifiedDockOffsetRight : this.magnifiedDockOffsetRight;
    let appWidths = this.state.magnifierX === null ? this.unmagnifiedDockAppWidths : this.magnifiedDockAppWidths;

    return (
      <div className={this.props.className} onMouseMove={::this.onMagnify} onMouseLeave={::this.onUnmagnify} style={{
        display: "grid",
        gridTemplateColumns: "auto auto auto",
      }}>
        <DockOffset width={offsetLeft} debug={this.props.debug} />
        <Dock appWidths={appWidths} height={this.unmagnifiedDockAppWidth}>
          {this.props.children}
        </Dock>
        <DockOffset width={offsetRight} debug={this.props.debug} />
      </div>
    );
  }

  onMagnify(event) {
    let element = ReactDOM.findDOMNode(this);
    let magnifierX = event.pageX - element.offsetLeft - this.unmagnifiedDockOffsetLeft;

    if (magnifierX >= 0 && magnifierX < this.unmagnifiedDockWidth) {
      this.setState({ magnifierX });
    } else {
      this.onUnmagnify(); // The mouse isn't over the dock; don't bother recording its coordinates.
    }
  }

  onUnmagnify() {
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

  computeDockWidth(appWidths = []) {
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
