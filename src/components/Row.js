import styled from '@emotion/styled';
import Container from './Container';

const Row = styled(Container)({
  display: 'flex',
  flexDirection: 'row'
});

Row.defaultProps = {};

export default Row;
