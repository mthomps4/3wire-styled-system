"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styled = _interopRequireDefault(require("@emotion/styled"));

var _styledSystem = require("styled-system");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Label = (0, _styled["default"])('label')((0, _styledSystem.compose)(_styledSystem.typography, _styledSystem.color, _styledSystem.space, _styledSystem.layout, _styledSystem.border, _styledSystem.position, _styledSystem.flexbox, _styledSystem.grid));
Label.defaultProps = {};
var _default = Label;
exports["default"] = _default;