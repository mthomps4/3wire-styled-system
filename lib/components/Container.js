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
  if (centerContent) styles = styles + 'display: flex; justify-content: center; align-items: center; align-content: center;';
  return styles;
};

var Container = (0, _styled["default"])('div')({
  boxSizing: 'border-box'
}, applyBoolStyles, (0, _styledSystem.compose)( // textColor,
_styledSystem.space, _styledSystem.layout, _styledSystem.color, _styledSystem.background, _styledSystem.border, _styledSystem.position, _styledSystem.flexbox, _styledSystem.grid, (0, _styledSystem.variant)({
  variants: {
    row: {
      display: 'flex',
      flexDirection: 'row'
    },
    column: {
      display: 'flex',
      flexDirection: 'column'
    }
  }
})));
Container.defaultProps = {};
var _default = Container;
exports["default"] = _default;