"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Card = void 0;

var _styled = _interopRequireDefault(require("@emotion/styled"));

var _styledSystem = require("styled-system");

var _Box = require("../Box");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var applyBooleanProps = function applyBooleanProps(props) {
  var styles = '';
  if (props.linkable) styles + 'coursor: pointer';
  return styles;
};

var Card = (0, _styled["default"])(_Box.Box)({
  boxSizing: 'border-box'
}, applyBooleanProps, (0, _styledSystem.compose)(_styledSystem.border, _styledSystem.boxShadow, _styledSystem.layout, _styledSystem.space, _styledSystem.flexbox, _styledSystem.grid));
exports.Card = Card;
Card.defaultProps = {
  boxShadow: '5px 5px 15px 0px rgba(0,0,0,0.5)',
  padding: 4
};