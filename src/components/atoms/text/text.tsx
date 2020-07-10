import * as React from 'react';
import styled from 'styled-components';
import { Text as ReactNativeText } from 'react-native';
import { TextProps } from './text.props';

export const Text = ({
    children,
    textSize,
    textAlign,
    color,
    bottom,
    fontWeight,
    onPress
}: TextProps) => {
    return (
        <StyledText
            textSize={textSize}
            bottom={bottom}
            textAlign={textAlign}
            color={color}
            onPress={onPress}
            fontWeight={fontWeight}
        >
            {children}
        </StyledText>
    );
};

const StyledText = styled(ReactNativeText)`
    color: ${(props: TextProps) => (props.color ? props.color : '#000')};
    font-size: ${(props: TextProps) =>
        props.textSize ? `${props.textSize}px` : '10px'};
    font-weight: ${(props: TextProps) =>
        props.fontWeight ? props.fontWeight : 'normal'};
    margin-bottom: ${(props: TextProps) =>
        props.bottom ? `${props.bottom}px` : '10px'};
    text-align: ${(props: TextProps) => props.textAlign || 'left'};
`;
