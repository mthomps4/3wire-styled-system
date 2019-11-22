import styled from '@emotion/styled';
import Container from './Container';

const Column = styled(Container)({
  display: 'flex',
  flexDirection: 'column'
});

Column.defaultProps = {};

export default Column;
