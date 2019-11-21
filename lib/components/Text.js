"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styled = _interopRequireDefault(require("@emotion/styled"));

var _themeGet = require("@styled-system/theme-get");

var _styledSystem = require("styled-system");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var applyBoolStyles = function applyBoolStyles(props) {
  var success = props.success,
      info = props.info,
      warning = props.warning,
      danger = props.danger,
      primary = props.primary,
      secondary = props.secondary,
      successBox = props.successBox,
      infoBox = props.infoBox,
      warningBox = props.warningBox,
      dangerBox = props.dangerBox;
  if (success) return "color: ".concat((0, _themeGet.themeGet)('colors.success', 'green')(props), ";");
  if (info) return "color: ".concat((0, _themeGet.themeGet)('colors.info', 'blue')(props), ";");
  if (warning) return "color: ".concat((0, _themeGet.themeGet)('colors.warning', 'orange')(props), ";");
  if (danger) return "color: ".concat((0, _themeGet.themeGet)('colors.danger', 'maroon')(props), ";");
  if (primary) return "color: ".concat((0, _themeGet.themeGet)('colors.primary', 'purple')(props));
  if (secondary) return "color: ".concat((0, _themeGet.themeGet)('colors.secondary', 'pink')(props));
  if (successBox) return "\n      color: ".concat((0, _themeGet.themeGet)('colors.success', 'green')(props), ";\n      background-color: ").concat((0, _themeGet.themeGet)('bg.success', 'lime')(props), ";\n      padding: 1em;\n      margin-bottom: 1em;\n    ");
  if (infoBox) return "\n      color: ".concat((0, _themeGet.themeGet)('colors.info', 'blue')(props), ";\n      background-color: ").concat((0, _themeGet.themeGet)('bg.info', 'cyan')(props), ";\n      padding: 1em;\n      margin-bottom: 1em;\n    ");
  if (warningBox) return "\n      color: ".concat((0, _themeGet.themeGet)('colors.warning', 'orange')(props), ";\n      background-color: ").concat((0, _themeGet.themeGet)('bg.warning', 'yellow')(props), ";\n      padding: 1em;\n      margin-bottom: 1em;\n    ");
  if (dangerBox) return "\n      color: ".concat((0, _themeGet.themeGet)('colors.danger', 'maroon')(props), ";\n      background-color: ").concat((0, _themeGet.themeGet)('bg.danger', 'red')(props), ";\n      padding: 1em;\n      margin-bottom: 1em;\n    ");
  return;
};

var Text = (0, _styled["default"])('div')(applyBoolStyles, (0, _styledSystem.compose)(_styledSystem.space, _styledSystem.color, _styledSystem.typography));
Text.defaultProps = {};
var _default = Text;
exports["default"] = _default;