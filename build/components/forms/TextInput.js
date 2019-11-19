"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_1 = require("@emotion/styled");
const styled_system_1 = require("styled-system");
const TextInput = styled_1.default('input')({
    type: 'text'
}, styled_system_1.compose(styled_system_1.typography, styled_system_1.color, styled_system_1.space, styled_system_1.layout, styled_system_1.border, styled_system_1.position, styled_system_1.flexbox, styled_system_1.grid));
TextInput.defaultProps = {};
exports.default = TextInput;
