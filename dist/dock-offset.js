"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (props) {
  var style = Object.assign({
    width: props.width + "px",
    height: props.height + "px",
    background: "red",
    opacity: props.debug ? 0.5 : 0
  }, function () {
    switch (props.magnifyDirection) {
      case "up":
        return { alignSelf: "end" };
      case "down":
        return { alignSelf: "start" };
      case "center":
        return { alignSelf: "center" };
    }
  }());

  return _react2.default.createElement("div", { style: style });
};

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }