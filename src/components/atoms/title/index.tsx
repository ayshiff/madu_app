import React, { PropsWithChildren } from 'react';
import { Text } from 'react-native';
import styled from 'styled-components';

const TitleText = styled(Text)`
    font-size: 30px;
    margin-bottom: 32px;
`;

type titleProps = {
    textSize?: string;
};
export const Title = ({
    textSize,
    children
}: PropsWithChildren<titleProps>) => (
    <TitleText textSize={textSize}>{children}</TitleText>
);
