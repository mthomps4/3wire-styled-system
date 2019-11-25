import styled from '@emotion/styled';
import { HTMLProps } from 'react';
import {
  background,
  BackgroundProps,
  border,
  BorderProps,
  boxShadow,
  BoxShadowProps,
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
  space,
  SpaceProps,
  Theme
} from 'styled-system';

export interface CardStyleProps {
  theme?: Theme;
  centerContent?: boolean;
  linkable?: boolean;
}

export interface CardProps
  extends CardStyleProps,
    ColorProps,
    LayoutProps,
    BoxShadowProps,
    SpaceProps,
    GridProps,
    FlexboxProps,
    BackgroundProps,
    BorderProps,
    PositionProps,
    Omit<HTMLProps<HTMLDivElement>, 'color' | 'height' | 'size' | 'width'> {
  color?: string;
}

const applyBooleanProps = (props: CardStyleProps) => {
  let styles = '';
  if (props.linkable) styles + 'coursor: pointer';
  if (props.centerContent) styles + 'display: flex; justify-content:center; align-items:center;';
  return styles;
};

const Card = styled('div')<CardProps>(
  {
    boxSizing: 'border-box'
  },
  applyBooleanProps,
  compose(color, border, background, boxShadow, layout, space, flexbox, grid, position)
);

Card.defaultProps = {
  boxShadow: '5px 5px 15px 0px rgba(0,0,0,0.5)',
  padding: 4
};

export default Card;
