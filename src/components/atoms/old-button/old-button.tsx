import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { mergeAll, flatten } from 'ramda';
import { Text } from '../text/text';
import { viewPresets, textPresets } from './old-button.presets';
import { ButtonProps } from './old-button.props';

/**
 * For your text displaying needs.
 *
 * This component is a HOC over the built-in React Native one.
 */

export function OldButton(props: ButtonProps) {
    // grab the props
    const {
        preset = 'primary',
        tx,
        text,
        style: styleOverride,
        textStyle: textStyleOverride,
        children,
        ...rest
    } = props;

    const viewStyle = mergeAll(
        flatten([
            (viewPresets[preset] as any) || viewPresets.primary,
            styleOverride
        ])
    );
    const textStyle = mergeAll(
        flatten([
            (textPresets[preset] as any) || textPresets.primary,
            textStyleOverride
        ])
    );

    const content = children || <Text text={text} style={textStyle} />;

    return (
        <TouchableOpacity style={viewStyle} {...rest}>
            {content}
        </TouchableOpacity>
    );
}
