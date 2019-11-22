import styled from '@emotion/styled';
import { themeGet } from '@styled-system/theme-get';
import { border, buttonStyle, color, compose, flexbox, grid, layout, position, space, typography } from 'styled-system';

const applyBooleanProps = props => {
  let styles = '';
  if (props.blue) styles + 'background-color: "blue"';
  if (props.disabled) {
    return `
      &:disabled {
        background-color: ${themeGet('colors.disabled', '#ccc')(props)};
        color:${themeGet('colors.disabledText', '#ccc')(props)};
        &:hover {
          cursor: not-allowed;
        }
      }
    `;
  }
  return styles;
};

const Button = styled('button')(
  {},
  applyBooleanProps,
  compose(color, buttonStyle, typography, layout, space, border, flexbox, grid, position)
);

Button.defaultProps = {
  px: 3,
  py: 1,
  fontSize: 2
};

export default Button;

// '&:disabled': {
//       backgroundColor: themeGet('colors.disabled', '#ccc')(props),
//       color: themeGet('colors.disabledText', '#ccc')(props),
//       '&:hover': {
//         cursor: 'not-allowed'
//       }
//     }
