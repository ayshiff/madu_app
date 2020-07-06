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
    height: 225;
    background-color: #fec530;
    border-bottom-left-radius: 30;
    border-bottom-right-radius: 30;
`;

const Header = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    height: 64;
    margin-left: 15;
    margin-right: 15;
    margin-top: 34;
`;

const ChallengeContainer = styled.View`
    margin-top: -80;
    align-items: center;
`;

const ChallengeView = styled.View`
    height: 115;
    width: 250;
    background-color: #FFFFFF;
    border-radius: 10;
    flex-direction: row;
    justify-content: center;
    shadow-color: #000000;
    shadow-offset: {
        width: 0,
        height: 2
    };
    shadow-opacity: 0.25;
    shadow-radius: 3.84;
    elevation: 5;
`;

const ChallengeInfo = styled.View`
    justify-content: space-around;
    margin-left: 15;
    padding-top: 10;
    padding-bottom: 10;
`;

const BusinessName = styled.Text`
    color: #8e8e93;
    margin-bottom: 5;
`;

const ChallengePic = styled.Image`
    margin-top: 20;
    height: 75;
    width: 75;
`;

const ChallengeTitle = styled.Text`
    margin-bottom: 5;
    font-size: 20;
    justify-content: flex-start;
`;

const TextContainer = styled.View`
    margin-top: 16;
`;

const ProfilePic = styled.Image`
    width: 64;
    height: 64;
`;

const PointsTag = styled.View`
    border-radius: 28;
    height: 25;
    width: 70;
    align-items: center;
    justify-content: center;
    padding-left: 14;
    padding-right: 14;
    background-color: #e3ffe8;
`;

const PointsText = styled.Text`
    color: #70b32d;
`;

const TypeTag = styled.View`
    border-radius: 20;
    border-color: #fe6d1a;
    border-width: 1;
    align-items: center;
    justify-content: center;
    width: 100;
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
