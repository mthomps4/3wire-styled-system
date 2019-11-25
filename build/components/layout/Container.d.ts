import { HTMLProps } from 'react';
import { BackgroundProps, BorderProps, ColorProps, FlexboxProps, GridProps, LayoutProps, PositionProps, ResponsiveValue, SpaceProps, Theme } from 'styled-system';
export interface ContainerStyleProps {
    theme?: Theme;
    variant?: ResponsiveValue<string>;
    centerContent?: Boolean;
}
export interface ContainerProps extends ContainerStyleProps, ColorProps, LayoutProps, SpaceProps, GridProps, FlexboxProps, BackgroundProps, BorderProps, PositionProps, Omit<HTMLProps<HTMLDivElement>, 'color' | 'height' | 'size' | 'width'> {
    color?: string;
}
declare const Container: import("@emotion/styled-base").StyledComponent<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ContainerProps, object>;
export default Container;
