/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable global-require */
import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Screen, Icon } from 'madu/components';
import { color } from 'madu/theme';
import styled from 'styled-components/native';
import { challengeActions } from 'madu/actions/challenge.actions';
import { poiActions } from 'madu/actions/poi.actions';
import { Points } from '../../components/atoms/points/points';

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
    justify-content: center;
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
    margin-top: 20px;
    height: 75px;
    width: 75px;
    border-radius: 20px;
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
    background-color: #e3ffe8;
`;

const TypeTag = styled.View`
    border-radius: 20px;
    border-color: #fe6d1a;
    border-width: 1px;
    align-items: center;
    justify-content: center;
    width: 100px;
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

const WhitePoints = styled.Text`
    color: #85a382;
    font-size: 12px;
`;
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
    border-radius: 20px;
    opacity: ${(props) => (props.isVisited ? 0.2 : 1)};
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

export interface HomeScreenProps {
    navigation: any;
    challenges: any;
    userData: any;
    poi: any;
    loadWeeklyChallenge: () => void;
    loadChallenge: () => void;
    loadPoi: () => void;
}
const Home = ({
    navigation,
    loadWeeklyChallenge,
    loadChallenge,
    challenges,
    userData,
    loadPoi,
    poi
}: HomeScreenProps) => {
    const navigateToChallenge = () => navigation.navigate('challenge');

    React.useEffect(() => {
        loadWeeklyChallenge();
        loadChallenge();
        loadPoi();
    }, [loadWeeklyChallenge, loadChallenge, loadPoi]);
    return (
        <Full>
            <Screen preset="scroll" backgroundColor={color.transparent}>
                <HeaderContainer>
                    <Header>
                        <TextContainer>
                            <Bold>Bonjour {userData.firstname}</Bold>
                            <WhitePointsTag>
                                <WhitePoints>{userData.points} 🌱</WhitePoints>
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
                                {userData.challenges.find(
                                    (el) => el.id === challenges.weekly.id
                                ) && (
                                    <Icon
                                        style={{
                                            position: 'absolute',
                                            top: 80,
                                            left: 60,
                                            opacity: 1,
                                            zIndex: 99
                                        }}
                                        icon="challenge_done"
                                    />
                                )}
                                <ChallengePic
                                    source={{ uri: challenges?.weekly?.photo }}
                                />
                                <ChallengeInfo>
                                    <Text>
                                        {challenges?.weekly?.title || ''}
                                    </Text>
                                    <TypeTag>
                                        <TypeText>
                                            {challenges?.weekly?.category || ''}
                                        </TypeText>
                                    </TypeTag>
                                    <PointsTag>
                                        <Points
                                            points={
                                                challenges?.weekly?.points || 0
                                            }
                                        />
                                    </PointsTag>
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
                        {Object.values(poi)
                            ?.slice(0, 2)
                            .map((challenge: any) => (
                                <MostVisitedPlacesCard key={challenge.id}>
                                    {userData.visits.find(
                                        (el) => el.id === challenge.id
                                    ) && (
                                        <Icon
                                            style={{
                                                position: 'absolute',
                                                top: 80,
                                                left: 60,
                                                opacity: 1
                                            }}
                                            icon="challenge_done"
                                        />
                                    )}
                                    <MostVisitedPlacesPic
                                        isVisited={userData.visits.find(
                                            (el) => el.id === challenge.id
                                        )}
                                        source={{ uri: challenge.images[0] }}
                                    />
                                    <MostVisitedPlacesNumberContainer>
                                        <MostVisitedPlacesNumberText>
                                            {challenge.visits} visites
                                        </MostVisitedPlacesNumberText>
                                    </MostVisitedPlacesNumberContainer>
                                    <MostVisitedPlacesName>
                                        {challenge.name}
                                    </MostVisitedPlacesName>
                                </MostVisitedPlacesCard>
                            ))}
                    </MostVisitedPlacesContainer>
                </View>

                <View>
                    <MostVisitedPlacesTitle>
                        Coups de coeur
                    </MostVisitedPlacesTitle>
                    <MostVisitedPlacesContainer>
                        {Object.values(poi)
                            ?.slice(0, 2)
                            .map((challenge: any) => (
                                <MostVisitedPlacesCard key={challenge.id}>
                                    {userData.visits.find(
                                        (el) => el.id === challenge.id
                                    ) && (
                                        <Icon
                                            style={{
                                                position: 'absolute',
                                                top: 80,
                                                left: 60,
                                                opacity: 1
                                            }}
                                            icon="challenge_done"
                                        />
                                    )}
                                    <MostVisitedPlacesPic
                                        source={{ uri: challenge.images[0] }}
                                        isVisited={userData.visits.find(
                                            (el) => el.id === challenge.id
                                        )}
                                    />
                                    <MostVisitedPlacesNumberContainer>
                                        <MostVisitedPlacesNumberText>
                                            {challenge.visits} visites
                                        </MostVisitedPlacesNumberText>
                                    </MostVisitedPlacesNumberContainer>
                                    <MostVisitedPlacesName>
                                        {challenge.name}
                                    </MostVisitedPlacesName>
                                </MostVisitedPlacesCard>
                            ))}
                    </MostVisitedPlacesContainer>
                </View>
            </Screen>
        </Full>
    );
};

const mapStateToProps = (state: any) => ({
    challenges: state.challenge,
    userData: state.profile,
    poi: state.poi.list
});

const mapDispatchToProps = (dispatch: any) => ({
    loadWeeklyChallenge: () => dispatch(challengeActions.loadWeeklyChallenge()),
    loadChallenge: () => dispatch(challengeActions.loadChallenge()),
    loadPoi: () => dispatch(poiActions.loadPoi())
});

export const HomeScreen = connect(mapStateToProps, mapDispatchToProps)(Home);
