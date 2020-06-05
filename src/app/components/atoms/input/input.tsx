/* eslint-disable react/prop-types */
import * as React from 'react';
import { View, TextInput, TextStyle, ViewStyle } from 'react-native';
import { mergeAll, flatten } from 'ramda';
import { color, spacing, typography } from '../../../theme';
import { Text } from '../text/text';
import { TextFieldProps } from './input.props';

// import styled from 'styled-components';
// const styledInput = styled.input`
//     color: #e8e8e8;
//     minheight: 35;
//     borderbottomwidth: 1;
// `;

// the base styling for the container
const CONTAINER: ViewStyle = {
    paddingVertical: spacing[3]
};

// the base styling for the TextInput
const INPUT: TextStyle = {
    fontFamily: typography.primary,
    color: color.dark_1,
    minHeight: 44,
    fontSize: 18,
    backgroundColor: color.palette.white,
    padding: spacing[2]
};

// currently we have no presets, but that changes quickly when you build your app.
const PRESETS: { [name: string]: ViewStyle } = {
    default: {}
};

const enhance = (style: any, styleOverride: any) => {
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
                placeholderTextColor={color.palette.dark_2}
                underlineColorAndroid="transparent"
                {...rest}
                style={inputStyle}
                ref={forwardedRef}
            />
        </View>
    );
};
