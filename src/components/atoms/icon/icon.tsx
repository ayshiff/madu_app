import * as React from 'react';
import { View, Image } from 'react-native';
import styled from 'styled-components/native';
import { IconProps } from './icon.props';
import { icons } from './icons';

const StyledImage = styled(Image)`
    resize-mode: contain;
    width: 20px;
    height: 20px;
`;

export function Icon(props: IconProps) {
    const { style: styleOverride, icon, containerStyle } = props;

    return (
        <View style={containerStyle}>
            <StyledImage style={styleOverride} source={icons[icon]} />
        </View>
    );
}
