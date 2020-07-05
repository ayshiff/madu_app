import * as React from 'react';
import styled from 'styled-components/native';
import { Text } from '../text/text';

const Container = styled.View`
    width: 85px;
    height: 31px;
    background: #e3ffe8;
    border-radius: 32px;
    justify-content: center;
    align-items: center;
`;

const StyledText = styled(Text)`
    text-align: center;
    letter-spacing: -0.15px;
    color: #70b32d;
`;

interface PointsProps {
    points: number;
}

export const Points = (props: PointsProps) => {
    const { points } = props;
    return (
        <Container>
            <StyledText text={`${points} 🌱`} />
        </Container>
    );
};
