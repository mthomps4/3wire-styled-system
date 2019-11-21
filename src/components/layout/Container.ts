import styled from '@emotion/styled';
import { HTMLAttributes } from 'react';
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
  variant
} from 'styled-system';
import { ThemeProps } from '../../../index';

export interface ContainerStyleProps {
  theme?: ThemeProps;
  variant?: ResponsiveValue<string>;
  centerContent?: Boolean;
}

export interface ContainerProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'color'>,
    ContainerStyleProps,
    ColorProps,
    LayoutProps,
    SpaceProps,
    GridProps,
    FlexboxProps,
    BackgroundProps,
    BorderProps,
    PositionProps {
  color?: any;
}

// export type ContainerProps = ContainerStyleProps &
//   ColorProps &
//   LayoutProps &
//   SpaceProps &
//   GridProps &
//   FlexboxProps &
//   BackgroundProps &
//   BorderProps &
//   PositionProps;

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
    space,
    layout,
    color,
    background,
    border,
    position,
    flexbox,
    grid,
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
