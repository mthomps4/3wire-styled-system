import styled from '@emotion/styled';
import { HTMLProps } from 'react';
import {
  background,
  BackgroundProps,
  border,
  BorderProps,
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
  variant
} from 'styled-system';

// const textColor = style({
//   prop: 'textColor',
//   cssProperty: 'color',
//   key: 'colors'
// });

export interface ContainerStyleProps {
  theme?: Theme;
  variant?: ResponsiveValue<string>;
  centerContent?: Boolean;
  // textColor?: ResponsiveValue<CSS.ColorProperty>;
}

export interface ContainerProps
  extends ContainerStyleProps,
    ColorProps,
    LayoutProps,
    SpaceProps,
    GridProps,
    FlexboxProps,
    BackgroundProps,
    BorderProps,
    PositionProps,
    Omit<HTMLProps<HTMLDivElement>, 'color' | 'height' | 'size' | 'width'> {
  color?: string;
}

const applyBoolStyles = ({ centerContent }: ContainerStyleProps) => {
  let styles = '';
  if (centerContent) styles = styles + 'display: flex; justify-content: center; align-items: center;';
  return styles;
};

const Container = styled('div')<ContainerProps>(
  {
    boxSizing: 'border-box'
  },
  applyBoolStyles,
  compose(
    // textColor,
    space,
    layout,
    color,
    background,
    border,
    position,
    flexbox,
    grid,
    // Just for testing -- Made actual Row and Column
    variant({
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
    })
  )
);

Container.defaultProps = {};

export default Container;
