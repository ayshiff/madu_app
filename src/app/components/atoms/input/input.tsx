/* eslint-disable react/prop-types */
import * as React from 'react';
import { View, TextInput, TextStyle, ViewStyle } from 'react-native';
import { mergeAll, flatten } from 'ramda';
import { color, spacing, typography } from '../../../theme';
import { Text } from '../text/text';
import { TextFieldProps } from './input.props';

// the base styling for the container
const CONTAINER: ViewStyle = {
    paddingVertical: spacing[3]
};

// the base styling for the TextInput
const INPUT: TextStyle = {
    fontFamily: typography.primary,
    color: color.text,
    minHeight: 44,
    fontSize: 18,
    backgroundColor: color.palette.white
};

// currently we have no presets, but that changes quickly when you build your app.
const PRESETS: { [name: string]: ViewStyle } = {
    default: {}
};

const enhance = (style, styleOverride) => {
    return mergeAll(flatten([style, styleOverride]));
};

/**
 * A component which has a label and an input together.
 */
export const Input: React.FunctionComponent<TextFieldProps> = (props) => {
    const {
        placeholderTx,
        placeholder,
        labelTx,
        label,
        preset = 'default',
        style: styleOverride,
        inputStyle: inputStyleOverride,
        forwardedRef,
        ...rest
    } = props;
    let containerStyle: ViewStyle = { ...CONTAINER, ...PRESETS[preset] };
    containerStyle = enhance(containerStyle, styleOverride);

    let inputStyle: TextStyle = INPUT;
    inputStyle = enhance(inputStyle, inputStyleOverride);

    return (
        <View style={containerStyle}>
            <Text preset="fieldLabel" tx={labelTx} text={label} />
            <TextInput
                placeholder={placeholder}
                placeholderTextColor={color.palette.lighterGrey}
                underlineColorAndroid={color.palette.lightGrey}
                {...rest}
                style={inputStyle}
                ref={forwardedRef}
            />
        </View>
    );
};
