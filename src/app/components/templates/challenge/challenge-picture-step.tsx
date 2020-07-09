import * as React from 'react';
import { View, ViewStyle, TextStyle, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import { useState } from 'react';
import styled from 'styled-components/native';
import { Points } from '../../atoms/points/points';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Full = styled.View`
    flex: 1;
    background-color: #ffffff;
`;

const ChallengePictureContainer = styled.View`
    justify-content; center;
    align-items: center;
    height: 95%;
`;
const ChallengePictureTitle = styled.Text`
    font-size: 28px;
    line-height: 36px;
    color: #162d4b;
    align-self: center;
    margin-top: 150px;
    margin-bottom: 8px;
`;
const ChallengePictureSubtitle = styled.Text`
    font-size: 18px;
    line-height: 24px;
    color: #856b7f;
    text-align: center;
    margin-bottom: 16px;
`;
const ChallengeTakePictureContainer = styled.View`
    background: rgba(255, 221, 231, 0.46);
    border-radius: 50px;
    width: 331px;
    height: 48px;
    justify-content: center;
    margin-top: 70px;
`;

const ChallengeTakePictureText = styled.Text`
    font-weight: bold;
    font-size: 17px;
    line-height: 22px;
    color: #ee6538;
    margin-left: 32px;
`;

const ChallengeChoosePictureContainer = styled.View`
    background: rgba(255, 221, 231, 0.46);
    border-radius: 50px;
    width: 331px;
    height: 48px;
    justify-content: center;
    margin-top: 15px;
`;

const ChallengeChoosePictureText = styled.Text`
    font-weight: bold;
    font-size: 17px;
    line-height: 22px;
    color: #ee6538;
    margin-left: 32px;
`;

const ChallengePictureDisagree = styled.Text`
    font-size: 17px;
    line-height: 22px;
    color: #f39272;
    align-self: center;
    bottom: 0;
`;
const ChallengePictureDisagreeContainer = styled.TouchableOpacity``;

export interface ChallengePictureStepScreenProps {
    navigation: any;
}

export const ChallengePictureStep = (
    props: ChallengePictureStepScreenProps
) => {
    const { navigation } = props;
    const navigateToSuccess = () => navigation.navigate('challenge-success');

    return (
        <Full>
            <ChallengePictureContainer>
                <ChallengePictureTitle>
                    Tu as réussi ton 1er défi !
                </ChallengePictureTitle>
                <ChallengePictureSubtitle>
                    Gagne le double du butin en immortalisant ton exploit.
                </ChallengePictureSubtitle>
                <Points points={80} />

                <ChallengeTakePictureContainer>
                    <ChallengeTakePictureText>
                        Prendre une photo
                    </ChallengeTakePictureText>
                </ChallengeTakePictureContainer>
                <ChallengeChoosePictureContainer>
                    <ChallengeChoosePictureText>
                        Choisir une photo
                    </ChallengeChoosePictureText>
                </ChallengeChoosePictureContainer>
            </ChallengePictureContainer>

            <ChallengePictureDisagreeContainer>
                <TouchableOpacity
                    onPress={() => {
                        navigateToSuccess();
                    }}
                >
                    <ChallengePictureDisagree>
                        Je ne souhaite pas poster d’image{' '}
                    </ChallengePictureDisagree>
                </TouchableOpacity>
            </ChallengePictureDisagreeContainer>
        </Full>
    );
};

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

export const ChallengePictureStepScreen = connect(
    mapStateToProps,
    mapDispatchToProps
)(ChallengePictureStep);
