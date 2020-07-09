import * as React from 'react';
import {
    View,
    ViewStyle,
    TextStyle,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { useState } from 'react';
import { Points } from '../../atoms/points/points';
import styled from 'styled-components/native';

const Full = styled.View`
    flex: 1;
    background-color: #ffffff;
`;

const ChallengeSuccessContainer = styled.View`
    justify-content: center;
    align-items: center;
    margin-left: 40px;
    margin-right: 40px;
`;

const PointContainer = styled.View`
    flex-direction: row-reverse;
    height: 100px;
    margin-left: 34px;
    margin-top: 33px;
`;

const Pic = styled.Image`
    width: 200px;
    height: 200px;
`;

const PointsText = styled.Text`
    font-size: 26px;
    margin-top: 40px;
`;

const Button = styled.TouchableOpacity`
    background: rgba(255, 221, 231, 0.46);
    border-radius: 50px;
    margin-top: 45px;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 48px;
`;

const ChallengeSuccessText = styled.Text`
    text-align: center;
    color: #8e8e93;
    margin-top: 15px;
`;

const ButtonText = styled.Text`
    color: #ee6538;
`;

const PointsNumber = styled.Text`
    color: #97B091;
    margin-left: 18px;
    margin right: 4px;
`;

export interface ChallengeSuccessStepScreenProps {
    navigation: any;
}

export const ChallengeSuccessStep = (
    props: ChallengeSuccessStepScreenProps
) => {
    const { navigation } = props;
    const navigateToChallenge = () => navigation.navigate('challenge');

    return (
        <Full>
            <PointContainer>
                <Points points={2567} />
            </PointContainer>
            <ChallengeSuccessContainer>
                {/* <Pic source={require('../../../../../assets/meal.png')} /> */}
                <PointsText>
                    Vous avez gagné
                    <PointsNumber>160</PointsNumber>
                    {/* <Image source={require('../../../../../assets/leaf.png')} /> */}
                </PointsText>
                <ChallengeSuccessText>
                    Félicitations ! Voilà qui a du vous faire monter dans le
                    classement individuel ainsi que dans celui interéquipes
                </ChallengeSuccessText>
                <ChallengeSuccessText>
                    N’hésitez pas à aller voir sur votre profil.
                </ChallengeSuccessText>
                <Button
                    onPress={() => {
                        navigateToChallenge();
                    }}
                >
                    <ButtonText>Continuer</ButtonText>
                </Button>
            </ChallengeSuccessContainer>
        </Full>
    );
};

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

export const ChallengeSuccessStepScreen = connect(
    mapStateToProps,
    mapDispatchToProps
)(ChallengeSuccessStep);
