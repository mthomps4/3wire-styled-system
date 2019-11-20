/// <reference types="react" />
import { BackgroundProps, BorderProps, ColorProps, FlexboxProps, GridProps, LayoutProps, PositionProps, SpaceProps } from 'styled-system';
export interface FormStyleProps {
    centerContent?: Boolean;
}
export interface FormProps extends FormStyleProps, ColorProps, LayoutProps, SpaceProps, GridProps, FlexboxProps, BackgroundProps, BorderProps, PositionProps {
    color?: any;
}
declare const Form: import("@emotion/styled-base").StyledComponent<import("react").DetailedHTMLProps<import("react").FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>, FormProps, object>;
export default Form;
