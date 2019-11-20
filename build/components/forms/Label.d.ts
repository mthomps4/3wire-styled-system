/// <reference types="react" />
import { BorderProps, ColorProps, FlexboxProps, GridProps, LayoutProps, PositionProps, SpaceProps, TypographyProps } from 'styled-system';
export interface LabelProps extends TypographyProps, ColorProps, SpaceProps, LayoutProps, BorderProps, FlexboxProps, GridProps, PositionProps {
    color?: any;
}
declare const Label: import("@emotion/styled-base").StyledComponent<import("react").DetailedHTMLProps<import("react").LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, LabelProps, object>;
export default Label;
