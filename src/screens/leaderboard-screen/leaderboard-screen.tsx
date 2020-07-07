import * as React from 'react';
import { View, Text } from 'react-native';
import { color } from 'madu/theme/color';
import styled from 'styled-components/native';

const Full = styled.View`
    flex: 1;
    background-color: #ffffff;
`;

const HeaderContainer = styled.View`
    height: 225px;
    background-color: rgba(138, 180, 255, 0.6);
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
`;

const HeaderTextContainer = styled.View`
    margin-top: 66px;
    margin-left: 21px;
`;

const HeaderTitle = styled.Text`
    font-size: 24px;
    font-weight: bold;
    color: #153733;
`;

const HeaderSubtitle = styled.Text`
    font-size: 14px;
    color: rgba(21, 55, 51, 0.6);
`;

const HeaderTimer = styled.Text`
    font-size: 36px;
    color: #ffffff;
`;

const LeaderboardContainer = styled.View`
    margin-top: 32px;
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
`;

const LeaderboardRank = styled.Text`
    margin-left: 1.5px;
`;

const LeaderboardProfile = styled.View`
    flex-direction: row;
`;

const LeaderBoardRankContainer = styled.View`
    margin-top: 7px;
    margin-right: 11px;
`;

const LeaderboardPointsContainer = styled.View`
    flex-direction: row;
    margin-top: 10px;
`;

const LeaderboardInformation = styled.View`
    flex-direction: row;
`;

const LeaderboardUp = styled.Image`
    width: 11px;
    height: 11px;
`;

const LeaderboardProfileName = styled.Text`
    margin-top: 4px;
    font-size: 14px;
    font-weight: bold;
`;

const LeaderboardProfilDepartment = styled.Text`
    font-size: 12px;
`;

const LeaderboardProfilePic = styled.Image`
    width: 48px;
    height: 48px;
    margin-right: 11px;
`;

const LeaderboardCrown = styled.Image`
    width: 14px;
    height: 10px;
    margin-top: 4px;
    margin-right: 5px;
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
                        <LeaderboardRank>1</LeaderboardRank>
                        <LeaderboardUp source={require('madu/assets/up.png')} />
                    </LeaderBoardRankContainer>
                    <LeaderboardProfile>
                        <LeaderboardProfilePic
                            source={require('madu/assets/profile-pic.png')}
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
                        source={require('madu/assets/crown.png')}
                    />
                    <Text>320</Text>
                </LeaderboardPointsContainer>
            </LeaderboardContainer>
        </Full>
    );
};
