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
  flex?: Boolean;
}

export type FormProps = FormStyleProps &
  ColorProps &
  LayoutProps &
  SpaceProps &
  GridProps &
  FlexboxProps &
  BackgroundProps &
  BorderProps &
  PositionProps;

const applyBoolStyles = ({ centerContent, flex }: FormStyleProps) => {
  let styles = '';
  if (centerContent) styles = styles + 'display: flex; justify-content: center; align-items: center;';
  if (flex) styles = styles + 'display: flex;';
  return styles;
};

const Form = styled<'form', FormProps>('form')(
  applyBoolStyles,
  compose(space, layout, color, background, border, position, flexbox, grid)
);

Form.defaultProps = {};

export default Form;
