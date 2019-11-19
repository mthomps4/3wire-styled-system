import styled from '@emotion/styled';
import Container, { ContainerProps } from './Container';

const Column = styled(Container)<ContainerProps>({
  display: 'flex',
  flexDirection: 'column'
});

Column.defaultProps = {};

export default Column;
