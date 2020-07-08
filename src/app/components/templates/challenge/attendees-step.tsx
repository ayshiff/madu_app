import * as React from 'react';
import { View, Text, Image } from 'react-native';
import styled from 'styled-components/native';
import { Points } from '../../atoms/points/points';

const Full = styled.View`
    flex: 1;
    background-color: #ffffff;
`;

const HeaderContainer = styled.View`
    height: 85px;
    background-color: #fae3c8;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    justify-content: center;
`;

const AttendeesLeaderboardContainer = styled.View`
    height: 65px;
    margin-top: 20px;
    flex-direction: row;
    justify-content: space-around;
    border-radius: 50px;
`;

const AttendeesLeaderboardProfile = styled.View`
    flex-direction: row;
`;

const AttendeesLeaderboardPointsContainer = styled.View`
    flex-direction: row;
    margin-top: 19px;
`;

const AttendeesLeaderboardInformation = styled.View`
    flex-direction: row;
    margin-top: 9px;
`;

const AttendeesLeaderboardProfilePic = styled.Image`
    width: 48px;
    height: 48px;
    margin-right: 11px;
`;

const AttendeesLeaderboardProfileName = styled.Text`
    margin-top: 4px;
    font-size: 14px;
    font-weight: bold;
`;

const AttendeesLeaderboardProfilDepartment = styled.Text`
    font-size: 12px;
    margin-top: -4px;
`;

const AttendeesNumberContainer = styled.View`
    flex-direction: row;
    background-color blue;
    margin-top: 20px;
`;

const LeftArrow = styled.Image`
    margin-left: 20px;
    margin-right: 27%;
`;
const AttendeesNumber = styled.Text`
    font-size: 16px;
`;

export interface AttendeesStepProps {
    loadContent: () => string;
    content: string;
    navigation: any;
}

export const AttendeesStep = ({ navigation }: AttendeesStepProps) => {
    return (
        <Full>
            <HeaderContainer>
                <AttendeesNumberContainer>
                    <LeftArrow
                        source={require('../../../../../assets/arrow-left.png')}
                    />
                    <AttendeesNumber>5 participants</AttendeesNumber>
                </AttendeesNumberContainer>
            </HeaderContainer>
            <AttendeesLeaderboardContainer>
                <AttendeesLeaderboardInformation>
                    <AttendeesLeaderboardProfile>
                        <AttendeesLeaderboardProfilePic
                            source={require('../../../../../assets/profile-pic.png')}
                        />
                        <View>
                            <AttendeesLeaderboardProfileName>
                                Elodie Five
                            </AttendeesLeaderboardProfileName>
                            <AttendeesLeaderboardProfilDepartment>
                                Communication
                            </AttendeesLeaderboardProfilDepartment>
                        </View>
                    </AttendeesLeaderboardProfile>
                </AttendeesLeaderboardInformation>
                <AttendeesLeaderboardPointsContainer>
                    <Points points={80} />
                </AttendeesLeaderboardPointsContainer>
            </AttendeesLeaderboardContainer>
        </Full>
    );
};
