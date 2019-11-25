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
const Container = styled_1.default('div')({
    boxSizing: 'border-box'
}, applyBoolStyles, styled_system_1.compose(
// textColor,
styled_system_1.space, styled_system_1.layout, styled_system_1.color, styled_system_1.background, styled_system_1.border, styled_system_1.position, styled_system_1.flexbox, styled_system_1.grid, 
// Just for testing -- Made actual Row and Column
styled_system_1.variant({
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
