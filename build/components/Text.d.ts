/// <reference types="react" />
import { ColorProps, SpaceProps, Theme, TypographyProps } from 'styled-system';
export interface TextBooleanProps {
    theme?: Theme;
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
