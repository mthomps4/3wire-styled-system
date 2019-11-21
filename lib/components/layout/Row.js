"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styled = _interopRequireDefault(require("@emotion/styled"));

var _Container = _interopRequireDefault(require("./Container"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Row = (0, _styled["default"])(_Container["default"])({
  display: 'flex',
  flexDirection: 'row'
});
Row.defaultProps = {};
var _default = Row;
exports["default"] = _default;