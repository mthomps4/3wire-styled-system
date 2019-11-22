"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styled = _interopRequireDefault(require("@emotion/styled"));

var _themeGet = require("@styled-system/theme-get");

var _styledSystem = require("styled-system");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var applyBooleanProps = function applyBooleanProps(props) {
  var styles = '';
  if (props.blue) styles + 'background-color: "blue"';

  if (props.disabled) {
    return "\n      &:disabled {\n        background-color: ".concat((0, _themeGet.themeGet)('colors.disabled', '#ccc')(props), ";\n        color:").concat((0, _themeGet.themeGet)('colors.disabledText', '#ccc')(props), ";\n        &:hover {\n          cursor: not-allowed;\n        }\n      }\n    ");
  }

  return styles;
};

var Button = (0, _styled["default"])('button')({}, applyBooleanProps, (0, _styledSystem.compose)(_styledSystem.color, _styledSystem.buttonStyle, _styledSystem.typography, _styledSystem.layout, _styledSystem.space, _styledSystem.border, _styledSystem.flexbox, _styledSystem.grid, _styledSystem.position));
Button.defaultProps = {
  px: 3,
  py: 1,
  fontSize: 2
};
var _default = Button; // '&:disabled': {
//       backgroundColor: themeGet('colors.disabled', '#ccc')(props),
//       color: themeGet('colors.disabledText', '#ccc')(props),
//       '&:hover': {
//         cursor: 'not-allowed'
//       }
//     }

exports["default"] = _default;