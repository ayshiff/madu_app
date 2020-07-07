import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components';
import SafeAreaView from 'react-native-safe-area-view';

const LayoutStyle = styled(View)`
    /* flex: 1; */
    margin-top: 80px;
    margin-right: 20px;
    margin-left: 20px;
`;

export const MainLayout = ({ children }: any) => (
    <SafeAreaView>
        <LayoutStyle>{children}</LayoutStyle>
    </SafeAreaView>
);
