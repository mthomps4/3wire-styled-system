"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_1 = require("@emotion/styled");
const theme_get_1 = require("@styled-system/theme-get");
const styled_system_1 = require("styled-system");
const applyBoolStyles = (props) => {
    const { success, info, warning, danger, primary, secondary, theme, successBox, infoBox, warningBox, dangerBox } = props;
    if (success && theme)
        return `color: ${theme_get_1.themeGet('colors.success', 'green')(props)};`;
    if (info && theme)
        return `color: ${theme_get_1.themeGet('colors.info', 'blue')(props)};`;
    if (warning && theme)
        return `color: ${theme_get_1.themeGet('colors.warning', 'orange')(props)};`;
    if (danger && theme)
        return `color: ${theme_get_1.themeGet('colors.danger', 'maroon')(props)};`;
    if (primary && theme)
        return `color: ${theme_get_1.themeGet('colors.primary', 'purple')(props)}`;
    if (secondary && theme)
        return `color: ${theme_get_1.themeGet('colors.secondary', 'pink')(props)}`;
    if (successBox && theme)
        return `
      color: ${theme_get_1.themeGet('colors.success', 'green')(props)};
      background-color: ${theme_get_1.themeGet('bg.success', 'lime')(props)};
      padding: 1em;
      margin-bottom: 1em;
    `;
    if (infoBox && theme)
        return `
      color: ${theme_get_1.themeGet('colors.info', 'blue')(props)};
      background-color: ${theme_get_1.themeGet('bg.info', 'cyan')(props)};
      padding: 1em;
      margin-bottom: 1em;
    `;
    if (warningBox && theme)
        return `
      color: ${theme_get_1.themeGet('colors.warning', 'orange')(props)};
      background-color: ${theme_get_1.themeGet('bg.warning', 'yellow')(props)};
      padding: 1em;
      margin-bottom: 1em;
    `;
    if (dangerBox && theme)
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
