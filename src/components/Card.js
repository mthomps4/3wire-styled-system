import styled from '@emotion/styled';
import { border, boxShadow, color, compose, flexbox, grid, layout, space } from 'styled-system';

const applyBooleanProps = props => {
  let styles = '';
  if (props.linkable) styles + 'coursor: pointer';
  return styles;
};

const Card = styled('div')(
  {
    boxSizing: 'border-box'
  },
  applyBooleanProps,
  compose(color, border, boxShadow, layout, space, flexbox, grid)
);

Card.defaultProps = {
  boxShadow: '5px 5px 15px 0px rgba(0,0,0,0.5)',
  padding: 4
};

export default Card;
