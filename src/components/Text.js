import styled from '@emotion/styled';
import { themeGet } from '@styled-system/theme-get';
import { color, compose, space, typography } from 'styled-system';

const applyBoolStyles = props => {
  const { success, info, warning, danger, primary, secondary, successBox, infoBox, warningBox, dangerBox } = props;

  if (success) return `color: ${themeGet('colors.success', 'green')(props)};`;
  if (info) return `color: ${themeGet('colors.info', 'blue')(props)};`;
  if (warning) return `color: ${themeGet('colors.warning', 'orange')(props)};`;
  if (danger) return `color: ${themeGet('colors.danger', 'maroon')(props)};`;
  if (primary) return `color: ${themeGet('colors.primary', 'purple')(props)}`;
  if (secondary) return `color: ${themeGet('colors.secondary', 'pink')(props)}`;

  if (successBox)
    return `
      color: ${themeGet('colors.success', 'green')(props)};
      background-color: ${themeGet('bg.success', 'lime')(props)};
      padding: 1em;
      margin-bottom: 1em;
    `;
  if (infoBox)
    return `
      color: ${themeGet('colors.info', 'blue')(props)};
      background-color: ${themeGet('bg.info', 'cyan')(props)};
      padding: 1em;
      margin-bottom: 1em;
    `;
  if (warningBox)
    return `
      color: ${themeGet('colors.warning', 'orange')(props)};
      background-color: ${themeGet('bg.warning', 'yellow')(props)};
      padding: 1em;
      margin-bottom: 1em;
    `;
  if (dangerBox)
    return `
      color: ${themeGet('colors.danger', 'maroon')(props)};
      background-color: ${themeGet('bg.danger', 'red')(props)};
      padding: 1em;
      margin-bottom: 1em;
    `;
  return;
};

const Text = styled('div')(applyBoolStyles, compose(space, color, typography));

Text.defaultProps = {};

export default Text;
