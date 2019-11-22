"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styled = _interopRequireDefault(require("@emotion/styled"));

var _styledSystem = require("styled-system");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Spacer = (0, _styled["default"])('div')({
  boxSizing: 'border-box'
}, (0, _styledSystem.compose)(_styledSystem.space, _styledSystem.layout, _styledSystem.flexbox, _styledSystem.grid));
Spacer.defaultProps = {
  m: 3
};
var _default = Spacer;
exports["default"] = _default;