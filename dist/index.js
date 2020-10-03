"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _dock = require("./dock");

var _dock2 = _interopRequireDefault(_dock);

var _dockItem = require("./dock-item");

var _dockItem2 = _interopRequireDefault(_dockItem);

var _dockOffset = require("./dock-offset");

var _dockOffset2 = _interopRequireDefault(_dockOffset);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_React$Component) {
  _inherits(_class, _React$Component);

  function _class() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, _class);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this), _this.state = { magnifierX: null }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(_class, [{
    key: "render",
    value: function render() {
      var offsetLeft = this.state.magnifierX === null ? this.unmagnifiedDockOffsetLeft : this.magnifiedDockOffsetLeft;
      var offsetRight = this.state.magnifierX === null ? this.unmagnifiedDockOffsetRight : this.magnifiedDockOffsetRight;
      var itemWidths = this.state.magnifierX === null ? this.unmagnifiedDockItemWidths : this.magnifiedDockItemWidths;

      return _react2.default.createElement(
        "div",
        { className: this.props.className, onMouseMove: this.onMagnify.bind(this), onMouseLeave: this.onUnmagnify.bind(this), style: {
            display: "grid",
            gridTemplateColumns: "auto auto auto"
          } },
        _react2.default.createElement(_dockOffset2.default, {
          width: offsetLeft,
          height: this.unmagnifiedDockItemWidth,
          magnifyDirection: this.magnifyDirection,
          debug: this.props.debug
        }),
        _react2.default.createElement(
          _dock2.default,
          {
            backgroundClassName: this.props.backgroundClassName,
            itemWidths: itemWidths,
            height: this.unmagnifiedDockItemWidth,
            magnifyDirection: this.magnifyDirection,
            debug: this.props.debug
          },
          this.props.children
        ),
        _react2.default.createElement(_dockOffset2.default, {
          width: offsetRight,
          height: this.unmagnifiedDockItemWidth,
          magnifyDirection: this.magnifyDirection,
          debug: this.props.debug
        })
      );
    }
  }, {
    key: "onMagnify",
    value: function onMagnify(event) {
      var element = _reactDom2.default.findDOMNode(this);
      var magnifierX = event.pageX - element.offsetLeft - this.unmagnifiedDockOffsetLeft;

      if (magnifierX >= 0 && magnifierX < this.unmagnifiedDockWidth) {
        this.setState({ magnifierX: magnifierX });
      } else {
        this.onUnmagnify(); // The mouse isn't over the dock; don't bother recording its coordinates.
      }
    }
  }, {
    key: "onUnmagnify",
    value: function onUnmagnify() {
      this.setState({ magnifierX: null });
    }
  }, {
    key: "computeDockItemWidths",
    value: function computeDockItemWidths() {
      var _this2 = this;

      var magnifierX = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      return _react2.default.Children.map(this.props.children, function (item, index) {
        if (magnifierX === null) return _this2.unmagnifiedDockItemWidth;

        var itemCenter = _this2.computeDockWidth(_this2.unmagnifiedDockItemWidths.slice(0, index)) + _this2.unmagnifiedDockItemWidth / 2;
        var distance = Math.abs(magnifierX - itemCenter);
        var distancePercent = Math.max(1 - distance / _this2.magnifierRadius, 0);
        return _this2.unmagnifiedDockItemWidth + _this2.unmagnifiedDockItemWidth * distancePercent * _this2.magnification;
      });
    }
  }, {
    key: "computeDockWidth",
    value: function computeDockWidth() {
      var itemWidths = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      return itemWidths.reduce(function (sum, itemWidth) {
        return sum + itemWidth;
      }, 0);
    }
  }, {
    key: "unmagnifiedDockItemWidth",
    get: function get() {
      return this.props.width / _react2.default.Children.count(this.props.children);
    }
  }, {
    key: "unmagnifiedDockItemWidths",
    get: function get() {
      return this.computeDockItemWidths();
    }
  }, {
    key: "unmagnifiedDockWidth",
    get: function get() {
      return this.computeDockWidth(this.unmagnifiedDockItemWidths);
    }
  }, {
    key: "unmagnifiedDockOffset",
    get: function get() {
      return Math.abs(this.unmagnifiedDockWidth - this.maxMagnifiedDockWidth);
    }
  }, {
    key: "unmagnifiedDockOffsetLeft",
    get: function get() {
      return this.unmagnifiedDockOffset / 2;
    }
  }, {
    key: "unmagnifiedDockOffsetRight",
    get: function get() {
      return this.unmagnifiedDockOffsetLeft;
    }
  }, {
    key: "magnifiedDockItemWidths",
    get: function get() {
      return this.computeDockItemWidths(this.state.magnifierX);
    }
  }, {
    key: "magnifiedDockWidth",
    get: function get() {
      return this.computeDockWidth(this.magnifiedDockItemWidths);
    }
  }, {
    key: "magnifiedDockOffset",
    get: function get() {
      return Math.abs(this.magnifiedDockWidth - this.maxMagnifiedDockWidth);
    }
  }, {
    key: "magnifiedDockOffsetLeft",
    get: function get() {
      return this.state.magnifierX < this.unmagnifiedDockWidth / 2 ? this.magnifiedDockOffset : 0;
    }
  }, {
    key: "magnifiedDockOffsetRight",
    get: function get() {
      return this.state.magnifierX >= this.unmagnifiedDockWidth / 2 ? this.magnifiedDockOffset : 0;
    }
  }, {
    key: "maxMagnifiedDockWidth",
    get: function get() {
      // The dock's width will be maximum when the mouse is magnifying the center of it.
      return this.computeDockWidth(this.computeDockItemWidths(this.unmagnifiedDockWidth / 2));
    }
  }, {
    key: "magnifierRadius",
    get: function get() {
      return this.unmagnifiedDockItemWidth * 3;
    }
  }, {
    key: "magnification",
    get: function get() {
      var magnification = this.props.magnification;


      if (magnification == undefined || isNaN(magnification) || magnification < 0) {
        throw new Error("Invalid magnification.");
      }

      return magnification;
    }
  }, {
    key: "magnifyDirection",
    get: function get() {
      var magnifyDirection = this.props.magnifyDirection;


      if (!["up", "down", "center"].includes(magnifyDirection)) {
        throw new Error("Invalid magnify direction.");
      }

      return magnifyDirection;
    }
  }]);

  return _class;
}(_react2.default.Component);

_class.Item = _dockItem2.default;
exports.default = _class;