import styled from '@emotion/styled';
import { background, border, color, compose, flexbox, grid, layout, position, space } from 'styled-system';

const applyBoolStyles = ({ centerContent }) => {
  let styles = '';
  if (centerContent) styles = styles + 'display: flex; justify-content: center; align-items: center;';
  return styles;
};

const Form = styled('form')(
  applyBoolStyles,
  compose(space, layout, color, background, border, position, flexbox, grid)
);

Form.defaultProps = {};

export default Form;
