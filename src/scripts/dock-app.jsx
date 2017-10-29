import React from "react";

export default class extends React.Component {
  render() {
    return (
      <img className={this.props.className} src={this.props.image} onClick={this.props.onActivate} style={{
        width: "100%",
        zIndex: 1,
      }} />
    );
  }
}
