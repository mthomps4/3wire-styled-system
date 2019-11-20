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
  SpaceProps
} from 'styled-system';

export interface FormStyleProps {
  centerContent?: Boolean;
}

export interface FormProps
  extends FormStyleProps,
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

const applyBoolStyles = ({ centerContent }: FormStyleProps) => {
  let styles = '';
  if (centerContent) styles = styles + 'display: flex; justify-content: center; align-items: center;';
  return styles;
};

const Form = styled('form')<FormProps>(
  applyBoolStyles,
  compose(space, layout, color, background, border, position, flexbox, grid)
);

Form.defaultProps = {};

export default Form;
