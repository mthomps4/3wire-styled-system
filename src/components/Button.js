import styled from '@emotion/styled';
import { borders, buttonStyle, flexbox, layout, position, space, textStyle, typography } from 'styled-system';

export const Button = styled('button')`
  ${buttonStyle};
  ${borders};
  ${space};
  ${typography};
  ${layout};
  ${flexbox};
  ${textStyle};
  ${position};
  /**
  * disabled styles
  * -- streamlined here rather than variant-dependent in theme.ts
  */
  &:disabled {
    background-color: ${props => props.theme.colors.disabled};
    color: ${props => props.theme.colors.gray9};
    &:hover {
      cursor: not-allowed;
    }
  }
`;

Button.defaultProps = {
  p: 3,
  fontSize: 3
};
