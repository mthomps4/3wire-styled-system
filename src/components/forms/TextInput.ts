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

export type TextInputProps = TypographyProps &
  ColorProps &
  SpaceProps &
  LayoutProps &
  BorderProps &
  FlexboxProps &
  GridProps &
  PositionProps;

const TextInput = styled<'input', TextInputProps>('input')(
  {
    type: 'text'
  },
  compose(typography, color, space, layout, border, position, flexbox, grid)
);

TextInput.defaultProps = {};

export default TextInput;
