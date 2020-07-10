import * as React from 'react';
import { View, Text, Image } from 'react-native';
import styled from 'styled-components/native';
import { Points } from '../../atoms/points/points';
import { GreenPoints } from '../../atoms/points/green-points';

const Full = styled.View`
    flex: 1;
    background-color: #ffffff;
`;

const ChallengeContainer = styled.View`
    margin-top: 30px;
    align-items: center;
`;

const ChallengeView = styled.View`
    height: 115px;
    width: 280px;
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
`;

const TypeText = styled.Text`
    justify-content: center;
    color: #fe6d1a;
`;

const DateContainer = styled.View`
    flex-direction: row;
    margin-top: 4px;
`;
const Clock = styled.Image`
    margin-top: 4px;
    margin-left: 16px;
`;

const ChalengePointsAndTimeContainer = styled.View`
    flex-direction: row;
`;

export interface ChallengeDoneScreenProps {
    navigation: any;
    challenges: any[];
}

export const ChallengeDoneScreen = ({
    navigation,
    challenges
}: ChallengeDoneScreenProps) => {
    return (
        <Full>
            {challenges &&
                challenges.map((challenge) => (
                    <ChallengeContainer key={challenge?.id}>
                        <View>
                            <ChallengeView>
                                <ChallengePic
                                    source={
                                        challenge?.photo
                                            ? { uri: challenge.photo }
                                            : require('../../../assets/meal.png')
                                    }
                                />
                                <ChallengeInfo>
                                    <Text>{challenge?.title}</Text>
                                    <TypeTag>
                                        <TypeText>
                                            {challenge?.category}
                                        </TypeText>
                                    </TypeTag>
                                    <ChalengePointsAndTimeContainer>
                                        <PointsTag>
                                            <Points
                                                points={challenge?.points}
                                            />
                                        </PointsTag>
                                        <DateContainer>
                                            {/* <Clock
                                        source={require('../../../clock.png')}
                                    /> */}
                                            <Text>{`${new Date(
                                                challenge.date
                                            ).getDate()}/${new Date(
                                                challenge.date
                                            ).getMonth()}/${new Date(
                                                challenge.date
                                            ).getFullYear()} `}</Text>
                                        </DateContainer>
                                    </ChalengePointsAndTimeContainer>
                                </ChallengeInfo>
                            </ChallengeView>
                        </View>
                    </ChallengeContainer>
                ))}
        </Full>
    );
};
