import React from "react";

const defaultProps = {
  backgroundColor: "#ccc",
  width: "500px",
};

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      index: null,
    };
  }

  render() {
    const { backgroundColor, width } = Object.assign({}, defaultProps, this.props);

    return (
      <div className="dock" style={{ backgroundColor, width, }}>
        {
          Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="dock-app"
              style={{ flex: this.state.index === index ? "1.5" : "1" }}
              onMouseEnter={this.onMouseEnter.bind(this, index)}
              onMouseLeave={this.onMouseLeave.bind(this, index)}
            >
              <svg viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="50" />
              </svg>
            </div>
          ))
        }
      </div>
    );
  }

  onMouseEnter(index, event) {
    this.setState({ index });
  }

  onMouseLeave(index, event) {
    console.log("onMouseLeave", index);
  }
}
