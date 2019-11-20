/// <reference types="react" />
import { BorderProps, ColorProps, FlexboxProps, GridProps, LayoutProps, PositionProps, SpaceProps, TypographyProps } from 'styled-system';
export interface TextInputProps extends TypographyProps, ColorProps, SpaceProps, LayoutProps, BorderProps, FlexboxProps, GridProps, PositionProps {
    color?: any;
    height?: any;
    width?: any;
    size?: any;
}
declare const TextInput: import("@emotion/styled-base").StyledComponent<import("react").DetailedHTMLProps<import("react").InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, TextInputProps, object>;
export default TextInput;
