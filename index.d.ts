/// <reference types="node" />
/// <reference types="@types/styled-system" />
// FORMs
import { ButtonProps, ButtonStyleProps } from './src/components/forms/Button';
import { FormProps, FormStyleProps } from './src/components/forms/Form';
import { LabelProps } from './src/components/forms/Label';
import { TextInputProps } from './src/components/forms/TextInput';
// LAYOUT
import { CardProps, CardStyleProps } from './src/components/layout/Card';
import { ContainerProps, ContainerStyleProps } from './src/components/layout/Container';
import { SpacerProps } from './src/components/layout/Spacer';
// COMPONENTS
import { TextBooleanProps, TextProps } from './src/components/Text';

interface BgColorTypes {
  default: string;
  primary: string;
  secondary: string;
  success: string;
  info: string;
  warning: string;
  danger: string;
}

interface ColorTypes {
  black: string;
  white: string;
  success: string;
  info: string;
  warning: string;
  danger: string;
  primary: string;
  secondary: string;
}

export {
  ButtonStyleProps,
  CardProps,
  CardStyleProps,
  ContainerProps,
  ContainerStyleProps,
  SpacerProps,
  ButtonProps,
  ColorTypes,
  BgColorTypes,
  FormProps,
  FormStyleProps,
  LabelProps,
  TextInputProps,
  TextBooleanProps,
  TextProps
};
