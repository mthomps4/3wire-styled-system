import styled from '@emotion/styled';
import { border, color, compose, flexbox, grid, layout, position, space, typography } from 'styled-system';

const TextInput = styled('input')(
  {
    type: 'text'
  },
  compose(typography, color, space, layout, border, position, flexbox, grid)
);

TextInput.defaultProps = {};

export default TextInput;
