"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_1 = require("@emotion/styled");
const prop_types_1 = require("prop-types");
const styled_system_1 = require("styled-system");
{
    styled_system_1.color ?  : prop_types_1.any;
}
;
const applyBoolStyles = ({ centerContent }) => {
    let styles = '';
    if (centerContent)
        styles = styles + 'display: flex; justify-content: center; align-items: center;';
    return styles;
};
const Container = styled_1.default('div')({
    boxSizing: 'border-box'
}, applyBoolStyles, styled_system_1.compose(styled_system_1.space, styled_system_1.layout, styled_system_1.color, styled_system_1.background, styled_system_1.border, styled_system_1.position, styled_system_1.flexbox, styled_system_1.grid, styled_system_1.variant({
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
exports.default = Container;
