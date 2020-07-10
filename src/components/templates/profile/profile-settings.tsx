import * as React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { Screen } from '../../../components';

const Full = styled.View`
    flex: 1;
    background-color: #fff5eb;
`;

const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-left: 21px;
    margin-right: 21px;
    margin-top: 15px;
    margin-bottom: 24px;
`;

const ProfilContainer = styled.View`
    margin-left: 22px;
`;

const ProfilPic = styled.Image`
    align-self: center;
    margin-top: 20px;
    margin-bottom: 28px;
`;

const ProfilTitle = styled.Text`
    font-weight: bold;
    font-size: 24px;
    line-height: 23px;
    color: #153733;
`;

const Save = styled.Text`
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;
    color: #f39272;
`;

const InputContainer = styled.View``;

const InputName = styled.Text`
    font-weight: bold;
    font-size: 15px;
    line-height: 20px;
    color: #162d4b;
    margin-left: 22px;
    margin-bottom: 5px;
`;
const ProfilInput = styled.TextInput`
    border-radius: 6px;
    border: 1px solid #fae3c8;
    background: #ffffff;
    width: 330px;
    height: 40px;
    align-self: center;
    margin-bottom: 8px;
`;

const ChallengeButton = styled.TouchableOpacity`
    width: 329px;
    height: 48px;
    border-radius: 40px;
    background: #ee6538;
    justify-content: center;
    align-items: center;
    align-self: center;
    margin-top: 10px;
    margin-bottom: 40px;
`;

const ChallengeButtonText = styled.Text`
    color: #ffffff;
    font-weight: bold;
    font-size: 16px;
`;

export interface ProfileSettingsScreenProps {
    loadContent: () => string;
    content: string;
    navigation: any;
}

export const ProfileSettingsScreen = ({
    navigation
}: ProfileSettingsScreenProps) => {
    return (
        <Full>
            <Screen preset="scroll" style={{ backgroundColor: '#FFF5EB' }}>
                <Header>
                    <Image source={require('../../../assets/arrow-left.png')} />
                    <Save>Enregistrer</Save>
                </Header>
                <ProfilContainer>
                    <ProfilTitle>Profil</ProfilTitle>
                    <ProfilPic source={require('../../../assets/filled.png')} />
                </ProfilContainer>
                <InputContainer>
                    <InputName>Prénom Nom</InputName>
                    <ProfilInput />
                    <InputName>Poste</InputName>
                    <ProfilInput />
                    <InputName>Département</InputName>
                    <ProfilInput />
                    <InputName>Adresse mail professionnelle</InputName>
                    <ProfilInput />
                    <InputName>Lieu de travail</InputName>
                    <ProfilInput />
                </InputContainer>
                <ChallengeButton>
                    <ChallengeButtonText>Deconnexion</ChallengeButtonText>
                </ChallengeButton>
            </Screen>
        </Full>
    );
};
