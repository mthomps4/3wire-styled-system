import styled from '@emotion/styled';
import { themeGet } from '@styled-system/theme-get';
import * as CSS from 'csstype';
import { HTMLProps } from 'react';
import {
  BackgroundProps,
  border,
  BorderProps,
  buttonStyle,
  ButtonStyleProps,
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
  TLengthStyledSystem,
  typography,
  TypographyProps,
  variant
} from 'styled-system';

export interface StyleProps {
  theme?: Theme;
  variant?: ResponsiveValue<string>;
  disabled?: boolean;
}

export interface ButtonProps
  extends Omit<HTMLProps<HTMLButtonElement>, 'color' | 'height' | 'size' | 'width'>,
    ButtonStyleProps,
    ColorProps,
    LayoutProps,
    SpaceProps,
    GridProps,
    FlexboxProps,
    BackgroundProps,
    TypographyProps,
    BorderProps,
    PositionProps {
  // color?: ResponsiveValue<CSS.ColorProperty>;
  color?: CSS.ColorProperty;
  width?: ResponsiveValue<CSS.WidthProperty<TLengthStyledSystem>>;
  height?: ResponsiveValue<CSS.WidthProperty<TLengthStyledSystem>>;
  size?: ResponsiveValue<CSS.HeightProperty<TLengthStyledSystem>>;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

const applyBooleanProps = (props: StyleProps) => {
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
