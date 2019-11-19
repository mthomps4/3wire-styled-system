/// <reference types="node" />

export interface BgColorTypes {
  success: string;
  info: string;
  warning: string;
  danger: string;
  primary: string;
  secondary: string;
}

export interface ColorTypes {
  black: string;
  white: string;
  blue: string;
  navy: string;
  success: string;
  info: string;
  warning: string;
  danger: string;
  primary: string;
  secondary: string;
}
export interface ThemeProps {
  colors: ColorTypes;
  bg: BgColorTypes;
}
