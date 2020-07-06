import * as React from 'react';
import styled from 'styled-components';
import { Text as ReactNativeText } from 'react-native';
import { TextProps } from './text.props';

export const Text = ({
    children,
    textSize,
    textAlign,
    bottom,
    onPress
}: TextProps) => {
    return (
        <StyledText
            textSize={textSize}
            bottom={bottom}
            textAlign={textAlign}
            onPress={onPress}
        >
            {children}
        </StyledText>
    );
};

const StyledText = styled(ReactNativeText)`
    font-size: ${(props: any) =>
        props.textSize ? props.textSize + 'px' : '10px'};
    margin-bottom: ${(props: any) =>
        props.bottom ? props.bottom + 'px' : '10px'};
    text-align: ${(props: any) => props.textAlign || 'left'};
`;
