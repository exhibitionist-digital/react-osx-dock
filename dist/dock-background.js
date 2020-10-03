"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (props) {
  var style = Object.assign({
    position: "absolute",
    width: "100%",
    height: props.height + "px",
    boxSizing: "border-box",
    border: props.debug ? "1px solid red" : null,
    zIndex: 0
  }, function () {
    switch (props.magnifyDirection) {
      case "up":
        return { bottom: 0 };
      case "down":
        return { top: 0 };
      case "center":
        return { top: "50%", transform: "translateY(-50%)" };
    }
  }());

  return _react2.default.createElement("div", { className: props.className, style: style });
};

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }