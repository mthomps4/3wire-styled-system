import { BackgroundProps, BorderProps, ColorProps, FlexboxProps, GridProps, LayoutProps, PositionProps, ResponsiveValue, SpaceProps } from 'styled-system';
import { ThemeProps } from '../../../index';
export interface ContainerStyleProps {
    theme?: ThemeProps;
    variant?: ResponsiveValue<string>;
    centerContent?: Boolean;
}
export declare type ContainerProps = ColorProps & LayoutProps & SpaceProps & GridProps & FlexboxProps & BackgroundProps & BorderProps & PositionProps & ContainerStyleProps;
declare const Container: any;
export default Container;
