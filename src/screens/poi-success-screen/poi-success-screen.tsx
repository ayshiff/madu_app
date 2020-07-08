import * as React from 'react';
import styled from 'styled-components/native';
import { color } from 'madu/theme/color';
import { OldText } from 'madu/components/atoms/old-text/old-text';
import { OldButton } from 'madu/components/atoms/old-button/old-button';
import { Points } from 'madu/components/atoms/points/points';

/** Styled components */

const Container = styled.View`
    flex: 1;
    background-color: ${color.background};
    align-items: center;
    justify-content: center;
`;

const ActionButton = styled(OldButton)`
    width: 170px;
    text-align: center;
    background: rgba(255, 221, 231, 0.46);
    color: #ee6538;
`;

const ActionContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

const Description = styled(OldText)`
    text-align: center;
`;

const Header = styled.View`
    position: absolute;
    top: 20px;
    right: 20px;
`;

export interface DetailScreenProps {
    loadContent: () => string;
    content: string;
    navigation: any;
}

export const PoiSuccessScreen = ({ navigation }: DetailScreenProps) => {
    const goBack = () => navigation.goBack();
    return (
        <Container>
            <Header>
                <Points points={285} />
            </Header>
            <Description preset="default">
                Félicitations, voilà qui a du te faire monter dans le classement
                individuel ainsi que dans celui interéquipes
            </Description>
            <Description preset="default">
                N’hésite pas à aller voir sur ton profil !
            </Description>
            <Points points={85} />
            <ActionContainer>
                <ActionButton text="Continuer" onPress={() => goBack()} />
            </ActionContainer>
        </Container>
    );
};
