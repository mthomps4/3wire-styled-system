"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_1 = require("@emotion/styled");
const styled_system_1 = require("styled-system");
const applyBoolStyles = ({ centerContent }) => {
    let styles = '';
    if (centerContent)
        styles = styles + 'display: flex; justify-content: center; align-items: center;';
    return styles;
};
const Form = styled_1.default('form')(applyBoolStyles, styled_system_1.compose(styled_system_1.space, styled_system_1.layout, styled_system_1.color, styled_system_1.background, styled_system_1.border, styled_system_1.position, styled_system_1.flexbox, styled_system_1.grid));
Form.defaultProps = {};
exports.default = Form;
