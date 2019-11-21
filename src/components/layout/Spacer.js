import styled from '@emotion/styled';
import { compose, flexbox, grid, layout, space } from 'styled-system';

const Spacer = styled('div')(
  {
    boxSizing: 'border-box'
  },
  compose(space, layout, flexbox, grid)
);

Spacer.defaultProps = {
  m: 3
};

export default Spacer;
