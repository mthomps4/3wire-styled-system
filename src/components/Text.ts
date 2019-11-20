import styled from '@emotion/styled';
import { themeGet } from '@styled-system/theme-get';
import { color, ColorProps, compose, space, SpaceProps, typography, TypographyProps } from 'styled-system';
import { ThemeProps } from '../../index';

export interface TextBooleanProps {
  // theme is passed as a prop from ThemeProvider via App
  theme?: ThemeProps;
  success?: Boolean;
  info?: Boolean;
  warning?: Boolean;
  danger?: Boolean;
  primary?: Boolean;
  secondary?: Boolean;
  successBox?: Boolean;
  infoBox?: Boolean;
  warningBox?: Boolean;
  dangerBox?: Boolean;
}

export type TextProps = TextBooleanProps & ColorProps & TypographyProps & SpaceProps;

const applyBoolStyles = (props: TextBooleanProps) => {
  const {
    success,
    info,
    warning,
    danger,
    primary,
    secondary,
    // theme,
    successBox,
    infoBox,
    warningBox,
    dangerBox
  } = props;

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

const Text = styled<'div', TextProps>('div')(applyBoolStyles, compose(space, color, typography));

Text.defaultProps = {};

export default Text;
