import { TextStyle, TextProps as TextProperties } from 'react-native';
import { TextPresets } from './text.presets';

export interface TextProps extends TextProperties {
    children?: React.ReactNode;
    textAlign?: 'center' | 'left' | 'right';
    bottom?: number;
    textSize?: number;
    txOptions?: object;
    text?: string;
    style?: TextStyle | TextStyle[];
    preset?: TextPresets;
}
