"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styled = _interopRequireDefault(require("@emotion/styled"));

var _Container = _interopRequireDefault(require("./Container"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Column = (0, _styled["default"])(_Container["default"])({
  display: 'flex',
  flexDirection: 'column'
});
Column.defaultProps = {};
var _default = Column;
exports["default"] = _default;