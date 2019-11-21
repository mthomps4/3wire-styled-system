"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styled = _interopRequireDefault(require("@emotion/styled"));

var _styledSystem = require("styled-system");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var applyBoolStyles = function applyBoolStyles(_ref) {
  var centerContent = _ref.centerContent;
  var styles = '';
  if (centerContent) styles = styles + 'display: flex; justify-content: center; align-items: center;';
  return styles;
};

var Form = (0, _styled["default"])('form')(applyBoolStyles, (0, _styledSystem.compose)(_styledSystem.space, _styledSystem.layout, _styledSystem.color, _styledSystem.background, _styledSystem.border, _styledSystem.position, _styledSystem.flexbox, _styledSystem.grid));
Form.defaultProps = {};
var _default = Form;
exports["default"] = _default;