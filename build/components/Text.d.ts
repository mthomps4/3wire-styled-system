/// <reference types="react" />
import { ColorProps, SpaceProps, TypographyProps } from 'styled-system';
import { ThemeProps } from '../../index';
export interface TextBooleanProps {
    theme?: ThemeProps;
    success?: Boolean;
    info?: Boolean;
    warning?: Boolean;
    danger?: Boolean;
    primary?: Boolean;
    secondary?: Boolean;
    successBox?: Boolean;
    infoBox?: Boolean;
    warningBox?: Boolean;
    dangerBox?: Boolean;
}
export interface TextProps extends ColorProps, TypographyProps, SpaceProps, TextBooleanProps {
    color?: any;
}
declare const Text: import("@emotion/styled-base").StyledComponent<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, TextProps, object>;
export default Text;
