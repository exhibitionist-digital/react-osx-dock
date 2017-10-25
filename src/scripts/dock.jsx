import React from "react";
import ReactDOM from "react-dom";

const defaultProps = {
  backgroundColor: "#ccc",
  width: "700px",
};

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      index: null,
      x: null,
    };
  }

  render() {
    const { backgroundColor, width, apps } = Object.assign({}, defaultProps, this.props);

    return (
      <div
        className="dock"
        style={{ backgroundColor, width, }}
        onMouseEnter={::this.onMouseEnter}
        onMouseMove={::this.onMouseMove}
        onMouseLeave={::this.onMouseLeave}
      >
        {apps.map((app, index) => this.renderDockApp(index))}
      </div>
    );
  }

  renderDockApp(index) {
    let appWidth = 1 / this.props.apps.length;
    let hotZoneWidth = appWidth * 3;
    let maxExtraFlex = 1;
    let appX = (index * appWidth) + (appWidth / 2);
    let distance = Math.abs(this.state.x - appX);
    let magnification = 1 - (distance / hotZoneWidth);
    let flex = `${1 + (this.state.x !== null && distance <= hotZoneWidth ? magnification * maxExtraFlex : 0)}`;

    return (
      <div
        key={index}
        className="dock-app"
        style={{ flex }}
      >
        <svg viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="50" />
        </svg>
      </div>
    );
  }

  onMouseEnter(event) {
    // let x = event.pageX - element.offsetLeft;
    // this.setState({ index });
  }

  onMouseMove(event) {
    let element = ReactDOM.findDOMNode(this);
    let x = (event.pageX - element.offsetLeft) / element.clientWidth;
    this.setState({ x });
  }

  onMouseLeave(event) {
    let x = null;
    this.setState({ x });
  }
}
