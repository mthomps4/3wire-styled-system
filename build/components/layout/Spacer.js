"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_1 = require("@emotion/styled");
const styled_system_1 = require("styled-system");
const Spacer = styled_1.default('div')({
    boxSizing: 'border-box'
}, styled_system_1.compose(styled_system_1.space, styled_system_1.layout, styled_system_1.flexbox, styled_system_1.grid));
Spacer.defaultProps = {
    m: 3
};
exports.default = Spacer;
