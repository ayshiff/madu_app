import * as React from 'react';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import { Screen } from '../../components';
import { color, spacing } from '../../theme';
import styled from 'styled-components/native';

const Full = styled.View`
    flex: 1;
    background-color: #ffffff;
`;

const Bold = styled.Text`
    font-weight: bold;
`;

const HeaderContainer = styled.View`
    height: 225px;
    background-color: #fec530;
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
    margin-top: -80px;
    align-items: center;
`;

const ChallengeView = styled.View`
    height: 115px;
    width: 250px;
    margin-bottom: 10px;
    background-color: #FFFFFF;
    border-radius: 10px;
    flex-direction: row;
    justify-content: center;
    shadow-color: #000000;
    shadow-offset: {
        width: 0,
        height: 1
    };
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

const BusinessName = styled.Text`
    color: #8e8e93;
    margin-bottom: 5px;
`;

const ChallengePic = styled.Image`
    margin-top: 20px;
    height: 75px;
    width: 75px;
`;

const ChallengeTitle = styled.Text`
    margin-bottom: 5px;
    font-size: 20px;
    justify-content: flex-start;
`;

const TextContainer = styled.View`
    margin-top: 16px;
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

const PointsText = styled.Text`
    color: #70b32d;
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

export interface HomeScreenProps {
    navigation: any;
}
const Home = (/* props: HomeScreenProps */) => {
    return (
        <Full>
            <Screen preset="scroll" backgroundColor={color.transparent}>
                <HeaderContainer>
                    <Header>
                        <TextContainer>
                            <BusinessName>L’Oréal Paris</BusinessName>
                            <Bold>Bonjour Élodie</Bold>
                        </TextContainer>
                        <ProfilePic
                            source={require('../../../../assets/profile-pic.png')}
                        />
                    </Header>
                </HeaderContainer>

                <ChallengeContainer>
                    <View>
                        <ChallengeTitle>Défi de la semaine</ChallengeTitle>
                        <ChallengeView>
                            <ChallengePic
                                source={require('../../../../assets/meal.png')}
                            />
                            <ChallengeInfo>
                                <Text>Lundi c’est Veggie !</Text>
                                <TypeTag>
                                    <TypeText>Alimentation</TypeText>
                                </TypeTag>
                                <PointsTag>
                                    <PointsText>80🌱</PointsText>
                                </PointsTag>
                            </ChallengeInfo>
                        </ChallengeView>
                    </View>
                </ChallengeContainer>
            </Screen>
        </Full>
    );
};

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

export const HomeScreen = connect(mapStateToProps, mapDispatchToProps)(Home);
