import * as React from 'react';
import { Image } from 'react-native';
import styled from 'styled-components/native';
import { OldText } from '../old-text/old-text';

const Container = styled.View`
    width: 69px;
    height: 22px;
    background: #FFFFFF;
    border-radius: 32px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const StyledText = styled(OldText)`
    text-align: center;
    letter-spacing: -0.15px;
    color: #85A382;
    font-size: 12px;
`;

const Leaf = styled.Image`
    width: 12px;
    height: 12px;
`;

interface WhitePointsProps {
    points: number;
}
// 🌱
export const WhitePoints = (props: WhitePointsProps) => {
    const { points } = props;
    return (
        <Container>
            <StyledText text={`${points}`} />
            <Leaf source={require('../../../assets/leaf.png')} />
        </Container>
    );
};
