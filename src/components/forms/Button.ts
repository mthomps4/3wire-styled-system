import styled from '@emotion/styled';
import { themeGet } from '@styled-system/theme-get';
import { HTMLProps } from 'react';
import {
  BackgroundProps,
  border,
  BorderProps,
  buttonStyle,
  color,
  ColorProps,
  compose,
  flexbox,
  FlexboxProps,
  grid,
  GridProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  ResponsiveValue,
  space,
  SpaceProps,
  Theme,
  typography,
  TypographyProps,
  variant
} from 'styled-system';

export interface ButtonStyleProps {
  theme?: Theme;
  variant?: ResponsiveValue<string>;
  disabled?: boolean;
}

export interface ButtonProps
  extends ButtonStyleProps,
    ColorProps,
    LayoutProps,
    SpaceProps,
    GridProps,
    FlexboxProps,
    BackgroundProps,
    TypographyProps,
    BorderProps,
    PositionProps,
    Omit<HTMLProps<HTMLButtonElement>, 'type' | 'color' | 'height' | 'size' | 'width'> {
  color?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

const applyBooleanProps = (props: ButtonStyleProps) => {
  let styles = '';
  if (props.disabled) {
    return `
      &:disabled {
        background-color: ${themeGet('colors.disabled', '#ccc')(props)};
        color:${themeGet('colors.disabledText', '#ccc')(props)};
        &:hover {
          cursor: not-allowed;
        }
      }
    `;
  }
  return styles;
};

const Button = styled('button')<ButtonProps>(
  {},
  applyBooleanProps,
  compose(
    color,
    buttonStyle,
    typography,
    layout,
    space,
    border,
    flexbox,
    grid,
    position,
    variant({
      variants: {
        small: {
          px: 2,
          py: 1,
          fontSize: 1
        },
        medium: {
          px: 2,
          py: 1,
          fontSize: 3
        },
        large: {
          px: 4,
          py: 2,
          fontSize: 5
        }
      }
    })
  )
);

Button.defaultProps = {
  px: 3,
  py: 1,
  fontSize: 2
};

export default Button;
