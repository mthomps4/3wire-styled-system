import { BackgroundProps, BorderProps, ColorProps, FlexboxProps, GridProps, LayoutProps, PositionProps, ResponsiveValue, SpaceProps, Theme } from 'styled-system';
export interface ContainerStyleProps {
    theme?: Theme;
    variant?: ResponsiveValue<string>;
    centerContent?: Boolean;
}
export interface ContainerProps extends ContainerStyleProps, ColorProps, LayoutProps, SpaceProps, GridProps, FlexboxProps, BackgroundProps, BorderProps, PositionProps {
}
declare const Container: any;
export default Container;
