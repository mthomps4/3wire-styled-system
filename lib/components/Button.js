"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;

var _styled = _interopRequireDefault(require("@emotion/styled"));

var _styledSystem = require("styled-system");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  /**\n  * disabled styles\n  * -- streamlined here rather than variant-dependent in theme.ts\n  */\n  &:disabled {\n    background-color: ", ";\n    color: ", ";\n    &:hover {\n      cursor: not-allowed;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Button = (0, _styled["default"])('button')(_templateObject(), _styledSystem.buttonStyle, _styledSystem.borders, _styledSystem.space, _styledSystem.typography, _styledSystem.layout, _styledSystem.flexbox, _styledSystem.textStyle, _styledSystem.position, function (props) {
  return props.theme.colors.disabled;
}, function (props) {
  return props.theme.colors.gray9;
});
exports.Button = Button;
Button.defaultProps = {
  p: 3,
  fontSize: 3
};