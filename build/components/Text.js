"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_1 = require("@emotion/styled");
const theme_get_1 = require("@styled-system/theme-get");
const styled_system_1 = require("styled-system");
const applyBoolStyles = (props) => {
    const { success, info, warning, danger, primary, secondary, successBox, infoBox, warningBox, dangerBox } = props;
    if (success)
        return `color: ${theme_get_1.themeGet('colors.success', 'green')(props)};`;
    if (info)
        return `color: ${theme_get_1.themeGet('colors.info', 'blue')(props)};`;
    if (warning)
        return `color: ${theme_get_1.themeGet('colors.warning', 'orange')(props)};`;
    if (danger)
        return `color: ${theme_get_1.themeGet('colors.danger', 'maroon')(props)};`;
    if (primary)
        return `color: ${theme_get_1.themeGet('colors.primary', 'purple')(props)}`;
    if (secondary)
        return `color: ${theme_get_1.themeGet('colors.secondary', 'pink')(props)}`;
    if (successBox)
        return `
      color: ${theme_get_1.themeGet('colors.success', 'green')(props)};
      background-color: ${theme_get_1.themeGet('bg.success', 'lime')(props)};
      padding: 1em;
      margin-bottom: 1em;
    `;
    if (infoBox)
        return `
      color: ${theme_get_1.themeGet('colors.info', 'blue')(props)};
      background-color: ${theme_get_1.themeGet('bg.info', 'cyan')(props)};
      padding: 1em;
      margin-bottom: 1em;
    `;
    if (warningBox)
        return `
      color: ${theme_get_1.themeGet('colors.warning', 'orange')(props)};
      background-color: ${theme_get_1.themeGet('bg.warning', 'yellow')(props)};
      padding: 1em;
      margin-bottom: 1em;
    `;
    if (dangerBox)
        return `
      color: ${theme_get_1.themeGet('colors.danger', 'maroon')(props)};
      background-color: ${theme_get_1.themeGet('bg.danger', 'red')(props)};
      padding: 1em;
      margin-bottom: 1em;
    `;
    return;
};
const Text = styled_1.default('div')(applyBoolStyles, styled_system_1.compose(styled_system_1.space, styled_system_1.color, styled_system_1.typography));
Text.defaultProps = {};
exports.default = Text;
