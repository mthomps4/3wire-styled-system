import { HTMLAttributes } from 'react';
import { BackgroundProps, BorderProps, ColorProps, FlexboxProps, GridProps, LayoutProps, PositionProps, ResponsiveValue, SpaceProps } from 'styled-system';
import { ThemeProps } from '../../../index';
export interface ContainerStyleProps {
    theme?: ThemeProps;
    variant?: ResponsiveValue<string>;
    centerContent?: Boolean;
}
export interface ContainerProps extends Omit<HTMLAttributes<HTMLDivElement>, 'color'>, ContainerStyleProps, ColorProps, LayoutProps, SpaceProps, GridProps, FlexboxProps, BackgroundProps, BorderProps, PositionProps {
    color?: any;
}
declare const Container: import("@emotion/styled-base").StyledComponent<import("react").DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ContainerProps, object>;
export default Container;
