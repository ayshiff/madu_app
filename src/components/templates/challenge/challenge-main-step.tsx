import React, { Component, useState } from 'react';
import {
    View,
    ViewStyle,
    TextStyle,
    ImageBackground,
    TouchableOpacity,
    Image,
    Text,
    ImageStyle,
    Alert,
    Modal,
    TouchableHighlight
} from 'react-native';
import { connect } from 'react-redux';
import { Screen, Button } from '../../../components';
import { color } from '../../../theme';
import { Points } from '../../atoms//points/points';
import { GreenPoints } from '../../atoms/points/green-points';

import styled from 'styled-components/native';

const FULL: ViewStyle = { flex: 1, backgroundColor: '#FFFFFF' };

const BLACK_TEXT: TextStyle = {
    color: '#000000',
    marginLeft: 24,
    marginRight: 24,
    fontSize: 24
};

const GREY_TEXT: TextStyle = {
    marginTop: 18,
    fontSize: 14,
    color: '#8E8E93',
    marginLeft: 24,
    marginRight: 24
};

const TEXT_CONTAINER: ViewStyle = {
    marginBottom: 63
};

const IMAGE_BACKGROUND: ImageStyle = {
    width: '100%',
    height: 300,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
};

const INFORMATION_CONTAINER: ViewStyle = {
    flex: 1,
    justifyContent: 'flex-end',
    marginTop: -14
};

const POINT_WRAPPER: ViewStyle = {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 22,
    paddingLeft: 24,
    paddingRight: 40
};

const POINTS_CONTAINER: ViewStyle = {
    flexDirection: 'row'
};

const TYPE_TAG: ViewStyle = {
    borderRadius: 20,
    borderColor: '#FE6D1A',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    marginRight: 10,
    backgroundColor: '#FFFFFF'
};

const TYPE_TEXT: TextStyle = {
    justifyContent: 'center',
    color: '#FE6D1A'
};

const POINTS_TAG: ViewStyle = {
    borderRadius: 28,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 14,
    paddingRight: 14,
    backgroundColor: '#E3FFE8'
};

const POINTS_TEXT: TextStyle = {
    color: '#70B32D'
};

const ChallengeButton = styled.TouchableOpacity`
    width: 329px;
    height: 48px;
    border-radius: 40px;
    background: #ee6538;
    justify-content: center;
    align-items: center;
`;

const ChallengeButtonContainer = styled.View`
    justify-content: center;
    align-items: center;
`;

const ChallengeButtonText = styled.Text`
    color: #ffffff;
    font-weight: bold;
    font-size: 16px;
`;
const AttendeesSuccessfulContainer = styled.View`
    margin-top: 30px;
    margin-left: 24px;
`;
const AttendeesTitle = styled.Text`
    font-weight: bold;
    font-size: 24px;
    line-height: 33px;
`;

const AttendeesNumber = styled.Text`
    color: #777777;
    margin-bottom: 25px;
`;

const AttendeesProfilPicContainer = styled.View`
    flex-direction: row;
    width: 325px;
`;
const AttendeesProfilPic = styled.Image`
    width: 100px;
    height: 100px;
    margin-right: 17px;
    margin-bottom: 50px;
`;

// Modal test
const AttendeesModalContainer = styled.View`
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.9);
`;

const AttendeesModalProfilPic = styled.Image`
    width: 358px;
    height: 358px;
    margin-top: 46px;
    margin-bottom: 36px;
    align-self: center;
`;
const PointsContainer = styled.View`
    align-self: center;
`;

const AttendeesModalName = styled.Text`
    color: #ffffff;
    font-size: 24px;
    line-height: 22px;
    margin-top: 58px;
    margin-bottom: 18px;
    align-self: center;
`;
const AttendeesModalPreviousText = styled.Text`
    color: #ffffff;
    font-size: 17px;
    line-height: 22px;
`;
const AttendeesModalSeeProfilText = styled.Text`
    color: #ee6538;
    font-size: 17px;
    line-height: 22px;
`;

const AttendeesButtonContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding-left: 20px;
    padding-right: 20px;
`;
//  Modal Test

export interface ChallengeScreenProps {
    navigation: any;
}

const Challenge = (props: ChallengeScreenProps) => {
    const [modalVisible, setModalVisible] = useState(false);
    const { navigation } = props;

    const navigateToPicture = () => navigation.navigate('challenge-picture');
    const navigateToProfile = () => navigation.navigate('attendees-profile');
    const navigateToAttendeesNumber = () =>
        navigation.navigate('attendees-number');

    return (
        <View style={FULL}>
            <Screen preset="scroll" backgroundColor={color.transparent}>
                <Image
                    style={IMAGE_BACKGROUND}
                    source={require('../../../assets/meal-375-214.png')}
                />

                <View style={INFORMATION_CONTAINER}>
                    <View style={POINT_WRAPPER}>
                        <View style={POINTS_CONTAINER}>
                            <View style={TYPE_TAG}>
                                <Text style={TYPE_TEXT}>Alimentation</Text>
                            </View>
                            <GreenPoints points={120} />
                        </View>
                    </View>
                </View>
                <View style={TEXT_CONTAINER}>
                    <Text style={BLACK_TEXT}>Lundi c’est Veggie !</Text>
                    <Text style={GREY_TEXT}>
                        Chaque Français consomme 87 kg de viande et 34 kg de
                        poisson par an. À lʼéchelle mondiale, lʼélevage
                        représente près de 15 % des émissions de gaz à effet de
                        serre dʼorigine humaine et lʼONU estime que la
                        consommation de viande va grimper de 76 % dʼici 2050.
                    </Text>
                    <Text style={GREY_TEXT}>
                        Chaque Français consomme 87 kg de viande et 34 kg de
                        poisson par an. À lʼéchelle mondiale, lʼélevage
                        représente près de 15 % des émissions de gaz à effet de
                        serre dʼorigine humaine et lʼONU estime que la
                        consommation de viande va grimper de 76 % dʼici 2050.
                    </Text>
                </View>
                <ChallengeButtonContainer>
                    <ChallengeButton
                        onPress={() => {
                            navigateToPicture();
                        }}
                    >
                        <ChallengeButtonText>
                            Je relève le défi !
                        </ChallengeButtonText>
                    </ChallengeButton>
                </ChallengeButtonContainer>
                <Text style={GREY_TEXT}>
                    Quand vous réalisez un défi pensez à prendre une photo ou
                    bien vous pouvez l’immortaliser sur le moment pour partager
                    avec vos collègues
                </Text>

                <AttendeesSuccessfulContainer>
                    <AttendeesTitle>Ils l’ont fait !</AttendeesTitle>
                    <TouchableOpacity
                        onPress={() => {
                            navigateToAttendeesNumber();
                        }}
                    >
                        <AttendeesNumber>5 participants</AttendeesNumber>
                    </TouchableOpacity>

                    <AttendeesProfilPicContainer>
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={modalVisible}
                        >
                            <AttendeesModalContainer>
                                <AttendeesModalName>
                                    Léa Gouvier
                                </AttendeesModalName>
                                <PointsContainer>
                                    <GreenPoints points={80} />
                                </PointsContainer>
                                <AttendeesModalProfilPic
                                    source={require('../../../assets/lea-358-358.png')}
                                />
                                <AttendeesButtonContainer>
                                    <TouchableOpacity
                                        onPress={() => {
                                            setModalVisible(!modalVisible);
                                        }}
                                    >
                                        <AttendeesModalPreviousText>
                                            Retour
                                        </AttendeesModalPreviousText>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={() => {
                                            setModalVisible(!modalVisible);
                                            navigateToProfile();
                                        }}
                                    >
                                        <AttendeesModalSeeProfilText>
                                            Voir le profil
                                        </AttendeesModalSeeProfilText>
                                    </TouchableOpacity>
                                </AttendeesButtonContainer>
                            </AttendeesModalContainer>
                        </Modal>

                        <TouchableOpacity
                            onPress={() => {
                                setModalVisible(true);
                            }}
                        >
                            <AttendeesProfilPic
                                source={require('../../../assets/lea.png')}
                            />
                        </TouchableOpacity>
                    </AttendeesProfilPicContainer>
                </AttendeesSuccessfulContainer>
            </Screen>
        </View>
    );
};

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

export const ChallengeScreen = connect(
    mapStateToProps,
    mapDispatchToProps
)(Challenge);
