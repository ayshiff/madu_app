import * as React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';

const Full = styled.View`
    flex: 1;
    background-color: #ffffff;
`;

const LeaderboardContainer = styled.View`
    height: 65px;
    margin-top: 20px;
    flex-direction: row;
    justify-content: space-around;
    border-radius: 50px;
`;

const LeaderboardClientContainer = styled.View`
    height: 65px;
    margin-top: 20px;
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
    background-color: #ffeff4;
    border-radius: 50px;
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
    margin-top: 19px;
`;

const LeaderboardInformation = styled.View`
    flex-direction: row;
    margin-top: 9px;
`;

const LeaderboardUp = styled.Image`
    width: 11px;
    height: 11px;
`;

const LeaderboardProfileName = styled.Text`
    margin-top: 4px;
    font-size: 14px;
    font-weight: bold;
    width: 150px;
`;

const LeaderboardProfilDepartment = styled.Text`
    font-size: 12px;
    margin-top: -4px;
`;

const LeaderboardProfilePic = styled.Image`
    width: 48px;
    height: 48px;
    margin-right: 11px;
`;

const LeaderboardCrown = styled.Image`
    width: 14px;
    height: 10px;
    margin-top: 6px;
    margin-right: 5px;
`;

export interface IndividualLeaderboardScreenProps {
    leaderboard: any[];
    navigation: any;
}

export const IndividualLeaderboardScreen = ({
    navigation,
    leaderboard
}: IndividualLeaderboardScreenProps) => {
    return (
        <Full>
            {leaderboard?.map((el) => (
                <LeaderboardContainer key={el.id}>
                    <LeaderboardInformation>
                        <LeaderBoardRankContainer>
                            <LeaderboardRank>1</LeaderboardRank>
                            {/* <LeaderboardUp
                            source={require('../../../assets/up.png')}
                        /> */}
                        </LeaderBoardRankContainer>
                        <LeaderboardProfile>
                            <LeaderboardProfilePic
                                source={require('../../../assets/profile-pic.png')}
                            />
                            <View>
                                <LeaderboardProfileName>
                                    {el.firstname} {el.lastname}
                                </LeaderboardProfileName>
                                <LeaderboardProfilDepartment>
                                    {el.department}
                                </LeaderboardProfilDepartment>
                            </View>
                        </LeaderboardProfile>
                    </LeaderboardInformation>
                    <LeaderboardPointsContainer>
                        <LeaderboardCrown
                            source={require('../../../assets/crown.png')}
                        />
                        <Text>{el.weeklyPoints}</Text>
                    </LeaderboardPointsContainer>
                </LeaderboardContainer>
            ))}
        </Full>
    );
};
