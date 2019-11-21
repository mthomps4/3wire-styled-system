/// <reference types="react" />
import * as CSS from 'csstype';
import { BackgroundProps, BorderProps, FlexboxProps, GridProps, LayoutProps, PositionProps, ResponsiveValue, SpaceProps } from 'styled-system';
import { ThemeProps } from '../../../index';
export interface ContainerStyleProps {
    theme?: ThemeProps;
    variant?: ResponsiveValue<string>;
    centerContent?: Boolean;
    textColor?: ResponsiveValue<CSS.ColorProperty>;
}
export interface ContainerProps extends ContainerStyleProps, LayoutProps, SpaceProps, GridProps, FlexboxProps, BackgroundProps, BorderProps, PositionProps {
}
declare const Container: import("@emotion/styled-base").StyledComponent<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ContainerProps, object>;
export default Container;
