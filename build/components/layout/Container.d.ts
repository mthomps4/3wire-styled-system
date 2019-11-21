import { HTMLProps } from 'react';
import { BackgroundProps, BorderProps, ColorProps, FlexboxProps, GridProps, LayoutProps, PositionProps, SpaceProps } from 'styled-system';
import { ThemeProps } from '../../../index';
declare type ResponsiveValue<T> = T | (T | null)[] | {
    [key: string]: T;
};
export interface ContainerStyleProps {
    theme?: ThemeProps;
    variant?: ResponsiveValue<string>;
    centerContent?: Boolean;
}
export interface ContainerProps extends Omit<HTMLProps<HTMLDivElement>, 'color' | 'height' | 'size' | 'width'>, ContainerStyleProps, ColorProps, LayoutProps, SpaceProps, GridProps, FlexboxProps, BackgroundProps, BorderProps, PositionProps {
    color?: string;
    hight?: number | string;
    width?: number | string;
    size?: any;
}
declare const Container: import("@emotion/styled-base").StyledComponent<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ContainerProps, object>;
export default Container;
