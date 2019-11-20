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

export interface TextInputProps
  extends TypographyProps,
    ColorProps,
    SpaceProps,
    LayoutProps,
    BorderProps,
    FlexboxProps,
    GridProps,
    PositionProps {
  color?: any;
  height?: any;
  width?: any;
  size?: any;
}

const TextInput = styled('input')<TextInputProps>(
  {
    type: 'text'
  },
  compose(typography, color, space, layout, border, position, flexbox, grid)
);

TextInput.defaultProps = {};

export default TextInput;
