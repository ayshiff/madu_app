/* eslint-disable global-require */
import * as React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import { Screen } from 'madu/components';
import { color } from 'madu/theme';
import styled from 'styled-components/native';
import { WhitePoints } from '../../components/atoms/points/white-points';
import { GreenPoints } from '../../components/atoms/points/green-points';

const Full = styled.View`
    flex: 1;
    background-color: #ffffff;
`;

const Bold = styled.Text`
    font-weight: bold;
`;

const HeaderContainer = styled.View`
    height: 275px;
    background-color: #fae3c8;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
`;

const Header = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    height: 64px;
    margin-left: 15px;
    margin-right: 15px;
    margin-top: 34px;
`;

const ChallengeContainer = styled.View`
    margin-top: -115px;
    align-items: center;
`;

const ChallengeView = styled.View`
    height: 115px;
    width: 328px;
    margin-bottom: 10px;
    background-color: #ffffff;
    border-radius: 10px;
    flex-direction: row;
    shadow-color: #000000;
    shadow-opacity: 1;
    shadow-radius: 3.84px;
    elevation: 6;
`;

const ChallengeInfo = styled.View`
    justify-content: space-around;
    margin-left: 15px;
    padding-top: 10px;
    padding-bottom: 10px;
`;

const ChallengePic = styled.Image`
    height: 115px;
    width: 115px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
`;

const ChallengeTitle = styled.Text`
    margin-bottom: 5px;
    font-size: 20px;
    justify-content: flex-start;
`;

const TextContainer = styled.View`
    margin-top: 10px;
`;

const ProfilePic = styled.Image`
    width: 64px;
    height: 64px;
`;

const PointsTag = styled.View`
    border-radius: 28px;
    height: 25px;
    width: 70px;
    align-items: center;
    justify-content: center;
    padding-left: 14px;
    padding-right: 14px;
`;

const TypeTag = styled.View`
    border-radius: 20px;
    border-color: #fe6d1a;
    border-width: 1px;
    align-items: center;
    justify-content: center;
    width: 100px;
    margin-right: 6px;
`;

const TypeText = styled.Text`
    justify-content: center;
    color: #fe6d1a;
`;

const WhitePointsTag = styled.View`
    margin-top: 8px;
    background: #ffffff;
    border-radius: 32px;
    width: 59px;
    height: 22px;
    justify-content: center;
    align-items: center;
`;

// const WhitePoints = styled.Text`
//     color: #85a382;
//     font-size: 12px;
// `;
const ChallengeSubtitle = styled.Text`
    font-size: 15px;
    line-height: 20px;
    color: #856b7f;
    margin-top: -10px;
    margin-bottom: 20px;
`;

const MostVisitedPlacesContainer = styled.View`
    margin-top: 20px;
    flex-direction: row;
    width: 100%;
`;

const MostVisitedPlacesTitle = styled.Text`
    font-weight: bold;
    font-size: 24px;
    line-height: 33px;
    color: #522c48;
    margin-left: 40px;
    margin-top: 40px;
`;
const MostVisitedPlacesPic = styled.Image`
    height: 168px;
    width: 135px;
`;

const MostVisitedPlacesNumberContainer = styled.View`
    width: 88px;
    height: 28px;
    background: #fae3c8;
    border-radius: 6px;
    justify-content: center;
    align-items: center;
    margin-left: 22px;
    margin-top: -12px;
`;
const MostVisitedPlacesNumberText = styled.Text`
    color: #522c48;
    font-size: 13px;
    line-height: 16px;
`;

const MostVisitedPlacesCard = styled.View`
    width: 135px;
    margin-left: 10px;
`;

const MostVisitedPlacesName = styled.Text`
    font-size: 12px;
    line-height: 16px;
    color: #522c48;
    margin-left: 22px;
`;

const TagContainer = styled.View`
    flex-direction: row;
`;

const ChallengeCardTitle = styled.Text`
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;
`;
const ChallengeDate = styled.Text`
    margin-right: 10px;
`;

export interface HomeScreenProps {
    navigation: any;
}
const Home = ({ navigation }: HomeScreenProps) => {
    const navigateToChallenge = () => navigation.navigate('challenge');
    return (
        <Full>
            <Screen preset="scroll" backgroundColor={color.transparent}>
                <HeaderContainer>
                    <Header>
                        <TextContainer>
                            <Bold>Bonjour Élodie</Bold>
                            <WhitePointsTag>
                                <WhitePoints points={2567} />
                            </WhitePointsTag>
                        </TextContainer>
                        <ProfilePic
                            source={require('../../assets/profile-pic.png')}
                        />
                    </Header>
                </HeaderContainer>

                <ChallengeContainer>
                    <View>
                        <ChallengeTitle>Défi de la semaine</ChallengeTitle>
                        <ChallengeSubtitle>
                            Nouveau challenge chaque dimanche soir à 18h
                        </ChallengeSubtitle>

                        <TouchableOpacity
                            onPress={() => {
                                navigateToChallenge();
                            }}
                        >
                            <ChallengeView>
                                <ChallengePic
                                    source={require('../../assets/meal.png')}
                                />
                                <ChallengeInfo>
                                    <ChallengeCardTitle>
                                        Lundi c’est Veggie !
                                    </ChallengeCardTitle>
                                    <TagContainer>
                                        <TypeTag>
                                            <TypeText>Alimentation</TypeText>
                                        </TypeTag>
                                        <PointsTag>
                                            <GreenPoints points={80} />
                                        </PointsTag>
                                    </TagContainer>
                                    <TagContainer>
                                        <ChallengeDate>22/06/20</ChallengeDate>
                                        <Text>5 participants</Text>
                                    </TagContainer>
                                </ChallengeInfo>
                            </ChallengeView>
                        </TouchableOpacity>
                    </View>
                </ChallengeContainer>

                <View>
                    <MostVisitedPlacesTitle>
                        Lieux les plus visités
                    </MostVisitedPlacesTitle>
                    <MostVisitedPlacesContainer>
                        <MostVisitedPlacesCard>
                            <MostVisitedPlacesPic
                                source={require('../../assets/place.png')}
                            />
                            <MostVisitedPlacesNumberContainer>
                                <MostVisitedPlacesNumberText>
                                    123 visites
                                </MostVisitedPlacesNumberText>
                            </MostVisitedPlacesNumberContainer>
                            <MostVisitedPlacesName>
                                Jay and Joy
                            </MostVisitedPlacesName>
                        </MostVisitedPlacesCard>
                    </MostVisitedPlacesContainer>
                </View>

                <View>
                    <MostVisitedPlacesTitle>
                        Coups de coeur
                    </MostVisitedPlacesTitle>
                    <MostVisitedPlacesContainer>
                        <MostVisitedPlacesCard>
                            <MostVisitedPlacesPic
                                source={require('../../assets/place.png')}
                            />
                            <MostVisitedPlacesNumberContainer>
                                <MostVisitedPlacesNumberText>
                                    123 visites
                                </MostVisitedPlacesNumberText>
                            </MostVisitedPlacesNumberContainer>
                            <MostVisitedPlacesName>
                                Jay and Joy
                            </MostVisitedPlacesName>
                        </MostVisitedPlacesCard>
                    </MostVisitedPlacesContainer>
                </View>
            </Screen>
        </Full>
    );
};

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

export const HomeScreen = connect(mapStateToProps, mapDispatchToProps)(Home);
