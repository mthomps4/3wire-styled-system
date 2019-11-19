import styled from '@emotion/styled';
import Container, { ContainerProps } from './Container';

const Row = styled(Container)<ContainerProps>({
  display: 'flex',
  flexDirection: 'row'
});

Row.defaultProps = {};

export default Row;
