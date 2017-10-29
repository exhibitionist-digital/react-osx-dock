import React from "react";
import ReactDOM from "react-dom";

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = { magnifierX: null, };
  }

  render() {
    let { magnifierX } = this.state;
    let appWidths = magnifierX === null ? this.unmagnifiedDockAppWidths : this.magnifiedDockAppWidths;
    let offsetLeft = magnifierX === null ? this.unmagnifiedDockOffsetLeft : this.magnifiedDockOffsetLeft;
    let offsetRight = magnifierX === null ? this.unmagnifiedDockOffsetRight : this.magnifiedDockOffsetRight;
    let offsetColor = this.props.debug ? "red" : "transparent";

    return (
      <div onMouseMove={::this.onMouseMove} onMouseLeave={::this.onMouseLeave} style={{
        display: "grid",
        gridTemplateColumns: `${offsetLeft}px auto ${offsetRight}px`
      }} className={this.props.className} >
        {/* left offset */}
        <div style={{ background: offsetColor, height: "100%", }} />

        {/* dock */}
        <div style={{
          display: "grid",
          gridTemplateColumns: appWidths.map(colWidth => `${colWidth}px`).join(" "),
          alignItems: "end",
          position: "relative",
          // gridColumnGap: "10px",
        }} >
          {/* dock apps */}
          {React.Children.map(this.props.children, (app, index) => (
            <div key={index} style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              zIndex: 1,
            }} >
              {React.cloneElement(app, { style: { width: "100%" } })}
            </div>
          ))}

          {/* dock background */}
          <div style={{
            position: "absolute",
            left: 0,
            bottom: 0,
            width: "100%",
            height: `${this.props.appWidth}px`,
            background: "#ccc",
            opacity: 0.6,
            borderRadius: "4px 4px 0px 0px",
            boxShadow: "1px 1px 50px 4px rgba(0, 0, 0, 0.8)",
            zIndex: "0",
          }} />
        </div>

        {/* right offset */}
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
    return React.Children.map(this.props.children, (app, index) => {
      if (magnifierX === null) return this.props.appWidth;

      let appCenter = this.computeDockWidth(this.unmagnifiedDockAppWidths.slice(0, index)) + (this.props.appWidth / 2);
      let distance = Math.abs(magnifierX - appCenter);
      let distancePercent = 1 - (distance / this.magnifierRadius);
      return this.props.appWidth + (this.props.appWidth * Math.max(distancePercent, 0) * Math.max(this.props.magnification, 0));
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
    return this.props.appWidth * 3;
  }
}
