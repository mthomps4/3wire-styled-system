import styled from '@emotion/styled';
import { compose, flexbox, FlexboxProps, grid, GridProps, layout, LayoutProps, space, SpaceProps } from 'styled-system';

export interface SpacerProps extends FlexboxProps, GridProps, LayoutProps, SpaceProps {}

const Spacer = styled('div')<SpacerProps>(
  {
    boxSizing: 'border-box'
  },
  compose(space, layout, flexbox, grid)
);

Spacer.defaultProps = {
  m: 3
};

export default Spacer;
