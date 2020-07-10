/* eslint-disable react/prop-types */
import * as React from 'react';
import { View, TextInput, TextStyle, ViewStyle } from 'react-native';
import { mergeAll, flatten } from 'ramda';
import styled from 'styled-components';

import { color, spacing, typography } from 'madu/theme';
import { Text } from 'madu/components/atoms/text/text';
import { Icon } from 'madu/components/atoms/icon/icon';

import { TextFieldProps } from './input.props';

const InputStyle = styled(TextInput)`
    font-family: ${typography.primary};
    color: ${color.text};
    border-radius: 6px;
    min-height: 44px;
    padding: 14px 40px 14px 12px;
    font-size: 18px;
    background-color: ${color.palette.white};
`;

const InputContainer = styled(View)`
    position: relative;
`;

const HideIcon = styled(Icon)`
    position: absolute;
    bottom: 14px;
    right: 10px;
`;

const CONTAINER: ViewStyle = {
    paddingVertical: spacing[3]
};

// the base styling for the TextInput

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
        error,
        onHideClick,
        preset = 'default',
        style: styleOverride,
        inputStyle: inputStyleOverride,
        forwardedRef,
        ...rest
    } = props;
    let containerStyle: ViewStyle = { ...CONTAINER, ...PRESETS[preset] };
    containerStyle = enhance(containerStyle, styleOverride);

    const INPUT: TextStyle = {
        fontFamily: typography.primary,
        color: color.text,
        minHeight: 44,
        fontSize: 18,
        backgroundColor: color.palette.white,
        borderWidth: 1,
        borderColor: error ? '#ff647c' : 'transparent'
    };

    let inputStyle: TextStyle = INPUT;
    inputStyle = enhance(inputStyle, inputStyleOverride);

    return (
        <View style={containerStyle}>
            <Text preset="fieldLabel" textSize={15}>
                {label}
            </Text>
            <InputContainer>
                <InputStyle
                    placeholder={placeholder}
                    placeholderTextColor={color.palette.lighterGrey}
                    underlineColorAndroid={color.palette.lightGrey}
                    {...rest}
                    style={inputStyle}
                    ref={forwardedRef}
                />
                {onHideClick && <HideIcon icon="hide" onPress={onHideClick} />}
            </InputContainer>
            {error && (
                <Text textSize={13} color="#ff647c">
                    {error}
                </Text>
            )}
        </View>
    );
};
