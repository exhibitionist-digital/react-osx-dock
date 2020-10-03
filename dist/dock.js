"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (props) {
  _react2.default.Children.forEach(props.children, function (item) {
    if (item.type !== _dockItem2.default) throw new Error("Invalid child type.");
  });

  var style = Object.assign({
    display: "grid",
    gridTemplateColumns: props.itemWidths.map(function () {
      return "auto";
    }).join(" "),
    position: "relative"
  }, function () {
    switch (props.magnifyDirection) {
      case "up":
        return { alignItems: "end" };
      case "down":
        return { alignItems: "start" };
      case "center":
        return { alignItems: "center" };
    }
  }());

  return _react2.default.createElement(
    "div",
    { style: style },
    _react2.default.Children.map(props.children, function (item, index) {
      return _react2.default.cloneElement(item, { width: props.itemWidths[index], debug: props.debug });
    }),
    _react2.default.createElement(_dockBackground2.default, {
      className: props.backgroundClassName,
      height: props.height,
      magnifyDirection: props.magnifyDirection,
      debug: props.debug
    })
  );
};

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _dockItem = require("./dock-item");

var _dockItem2 = _interopRequireDefault(_dockItem);

var _dockBackground = require("./dock-background");

var _dockBackground2 = _interopRequireDefault(_dockBackground);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }