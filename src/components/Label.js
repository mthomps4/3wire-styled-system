import styled from '@emotion/styled';
import { border, color, compose, flexbox, grid, layout, position, space, typography } from 'styled-system';

const Label = styled('label')(compose(typography, color, space, layout, border, position, flexbox, grid));

Label.defaultProps = {};

export default Label;
