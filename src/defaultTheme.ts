import { Theme } from 'styled-system';

const breakpoints: any = ['40em', '52em', '64em', '80em'];
// aliases
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

export default <Theme>{
  colors: {
    black: 'black',
    white: 'white',
    primary: '#5F527A',
    secondary: '#EE99FF',
    success: '#004506',
    info: '#005459',
    warning: '#783c00',
    danger: '#570d00'
  },
  bg: {
    default: 'white',
    primary: '#6699CC',
    secondary: '#24263B',
    success: '#75ff81',
    info: '#84eaf0',
    warning: '#ffb366',
    danger: '#ff6347'
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700
  },
  breakpoints
};
