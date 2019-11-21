import styled from '@emotion/styled';
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

// export type ContainerProps = ColorProps &
//   LayoutProps &
//   SpaceProps &
//   GridProps &
//   FlexboxProps &
//   BackgroundProps &
//   BorderProps &
//   PositionProps &
//   ContainerStyleProps;

// DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export interface ContainerProps
  extends ContainerStyleProps,
    ColorProps,
    LayoutProps,
    SpaceProps,
    GridProps,
    FlexboxProps,
    BackgroundProps,
    BorderProps,
    PositionProps {}

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
