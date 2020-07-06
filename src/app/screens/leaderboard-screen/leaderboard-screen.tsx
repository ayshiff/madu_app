import * as React from 'react';
import { View, Text } from 'react-native';
import { color } from '../../theme/color';
import styled from 'styled-components/native';

const Full = styled.View`
    flex: 1;
    background-color: #ffffff;
`;

const HeaderContainer = styled.View`
    height: 225;
    background-color: rgba(138, 180, 255, 0.6);
    border-bottom-left-radius: 30;
    border-bottom-right-radius: 30;
`;

const HeaderTextContainer = styled.View`
    margin-top: 66;
    margin-left: 21;
`;

const HeaderTitle = styled.Text`
    font-size: 24;
    font-weight: bold;
    color: #153733;
`;

const HeaderSubtitle = styled.Text`
    font-size: 14;
    color: rgba(21, 55, 51, 0.6);
`;

const HeaderTimer = styled.Text`
    font-size: 36;
    color: #ffffff;
`;

const LeaderboardContainer = styled.View`
    margin-top: 32;
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
`;

const LeaderboardProfile = styled.View`
    flex-direction: row;
`;

const LeaderBoardRankContainer = styled.View`
    margin-top: 7;
    margin-right: 11;
`;

const LeaderboardPointsContainer = styled.View`
    flex-direction: row;
    margin-top: 10;
`;

const LeaderboardInformation = styled.View`
    flex-direction: row;
`;

const LeaderboardUp = styled.Image`
    width: 11;
    height: 11;
`;

const LeaderboardProfileName = styled.Text`
    margin-top: 4;
    font-size: 14;
    font-weight: bold;
`;

const LeaderboardProfilDepartment = styled.Text`
    font-size: 12;
`;

const LeaderboardProfilePic = styled.Image`
    width: 48;
    height: 48;
    margin-right: 11;
`;

const LeaderboardCrown = styled.Image`
    width: 14;
    height: 10;
    margin-top: 4;
    margin-right: 5;
`;

export interface LeaderboardScreenProps {
    loadContent: () => string;
    content: string;
    navigation: any;
}

export const LeaderboardScreen = ({ navigation }: LeaderboardScreenProps) => {
    return (
        <Full>
            <HeaderContainer>
                <HeaderTextContainer>
                    <HeaderTitle>Classement Entreprise</HeaderTitle>
                    <HeaderSubtitle>Renouvelé chaque semaine</HeaderSubtitle>
                    <HeaderTimer>5j 20h 49mn</HeaderTimer>
                </HeaderTextContainer>
            </HeaderContainer>
            <LeaderboardContainer>
                <LeaderboardInformation>
                    <LeaderBoardRankContainer>
                        <Text>1</Text>
                        <LeaderboardUp
                            source={require('../../../../assets/up.png')}
                        />
                    </LeaderBoardRankContainer>
                    <LeaderboardProfile>
                        <LeaderboardProfilePic
                            source={require('../../../../assets/profile-pic.png')}
                        />
                        <View>
                            <LeaderboardProfileName>
                                Elodie Five
                            </LeaderboardProfileName>
                            <LeaderboardProfilDepartment>
                                Communication
                            </LeaderboardProfilDepartment>
                        </View>
                    </LeaderboardProfile>
                </LeaderboardInformation>
                <LeaderboardPointsContainer>
                    <LeaderboardCrown
                        source={require('../../../../assets/crown.png')}
                    />
                    <Text>320</Text>
                </LeaderboardPointsContainer>
            </LeaderboardContainer>
        </Full>
    );
};
