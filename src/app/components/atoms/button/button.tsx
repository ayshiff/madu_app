import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { mergeAll, flatten } from 'ramda';
import { Text } from '../text/text';
import { viewPresets, textPresets } from './button.presets';
import { ButtonProps } from './button.props';

// import styled from 'styled-components';
// const StyledTouchableOpacity = styled(TouchableOpacity)`
//     padding-vertical: ${spacing[2]};
//     padding-horizontal: ${spacing[2]};
//     justify-content: 'center';
//     align-items: 'center';
//     background-color: ${color.palette.lightGrey};
//     border-radius: 200px;
//     height: 30px;
//     `;

/**
 * For your text displaying needs.
 *
 * This component is a HOC over the built-in React Native one.
 */
export function Button(props: ButtonProps) {
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

    const content = children || <Text tx={tx} text={text} style={textStyle} />;

    return (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <TouchableOpacity style={viewStyle} {...rest}>
            {content}
        </TouchableOpacity>
    );
}
