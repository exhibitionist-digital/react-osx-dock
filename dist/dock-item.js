'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (props) {
  return _react2.default.createElement(
    'div',
    {
      className: props.className,
      onClick: props.onClick,
      onMouseOver: props.onMouseOver,
      onMouseOut: props.onMouseOut,
      style: {
        width: props.width + 'px',
        height: props.width + 'px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        boxSizing: 'border-box',
        border: props.debug ? '1px solid red' : null,
        zIndex: 1
      }
    },
    props.children
  );
};

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }