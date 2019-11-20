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
  space,
  SpaceProps,
  variant
} from 'styled-system';
import { ThemeProps } from '../../../index';

type ResponsiveValue<T> =
  | T
  | (T | null)[]
  | {
      [key: string]: T;
    };

export interface ContainerStyleProps {
  theme?: ThemeProps;
  variant?: ResponsiveValue<string>;
  centerContent?: Boolean;
  flex?: Boolean;
}

export type ContainerProps = ContainerStyleProps &
  ColorProps &
  LayoutProps &
  SpaceProps &
  GridProps &
  FlexboxProps &
  BackgroundProps &
  BorderProps &
  PositionProps;

const applyBoolStyles = ({ centerContent, flex }: ContainerStyleProps) => {
  let styles = '';
  if (centerContent) styles = styles + 'display: flex; justify-content: center; align-items: center;';
  if (flex) styles = styles + 'display: flex;';
  return styles;
};

type optionalProps = null | ContainerProps;

const Container = styled<'div', optionalProps>('div')(
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
