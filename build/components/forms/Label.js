"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_1 = require("@emotion/styled");
const styled_system_1 = require("styled-system");
const Label = styled_1.default('label')(styled_system_1.compose(styled_system_1.typography, styled_system_1.color, styled_system_1.space, styled_system_1.layout, styled_system_1.border, styled_system_1.position, styled_system_1.flexbox, styled_system_1.grid));
Label.defaultProps = {};
exports.default = Label;
