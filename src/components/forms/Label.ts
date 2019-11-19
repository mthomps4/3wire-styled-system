import styled from '@emotion/styled';
import {
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
  typography,
  TypographyProps
} from 'styled-system';

export type LabelProps = TypographyProps &
  ColorProps &
  SpaceProps &
  LayoutProps &
  BorderProps &
  FlexboxProps &
  GridProps &
  PositionProps;

const Label = styled<'label', LabelProps>('label')(
  compose(typography, color, space, layout, border, position, flexbox, grid)
);

Label.defaultProps = {};

export default Label;
