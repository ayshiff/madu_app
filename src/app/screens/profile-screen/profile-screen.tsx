import * as React from 'react';
import { View, ViewStyle, TextStyle, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import { Screen, Header } from '../../components';
import { color, spacing } from '../../theme';
import { loginActions } from '../../actions/login.actions';
import styled from 'styled-components/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Points } from '../../components/atoms/points/points';

const FULL: ViewStyle = { flex: 1, backgroundColor: '#F3F8FF' };
const TEXT: TextStyle = {
    fontFamily: 'Montserrat'
};

const BOLD: TextStyle = { fontWeight: 'bold' };

const CONTAINER: ViewStyle = {
    backgroundColor: color.transparent,
    margin: 0
};

const HEADER: TextStyle = {
    justifyContent: 'flex-end',
    backgroundColor: '#fae3c8',
    margin: 0
};
const HEADER_TITLE: TextStyle = {
    ...TEXT,
    ...BOLD,
    textAlign: 'left'
};

const HeaderContainer = styled.View`
    margin-top: -41px;
    height: 225px;
    background-color: #fae3c8;
`;

const Card = styled.View`
    width: 99px;
    height: 63px;
    background-color: #ffffff;
    border-radius: 6px;
    margin-top: 16px;
    margin-right: 6px;
    justify-content: center;
    align-items: center;
`;

const ProfilePic = styled.Image`
    height: 80px;
    width: 80px;
`;

const ProfileName = styled.Text`
    font-weight: bold;
    font-size: 24px;
    margin-top: 9px;
    color: #162d4b;
`;
const Department = styled.Text`
    color: #ee6538;
`;

const ProfileInformation = styled.View`
    justify-content: center;
    align-items: center;
`;
const CardContainer = styled.View`
    flex-direction: row;
`;

const RankingText = styled.Text`
    margin-top: -7px;
`;

const RankingNumberContainer = styled.Text`
    flex-direction: row;
    margin-top: 5px;
`;
const Up = styled.Image`
    margin-top: 4px;
    margin-right: 5px;
`;

const InscriptionText = styled.Text`
    margin-top: -8px;
`;
const DateContainer = styled.View`
    flex-direction: row;
    margin-top: 4px;
`;
const Clock = styled.Image`
    margin-top: 4px;
    margin-right: 4px;
`;

export interface SettingsScreenProps {
    loadContent: () => string;
    content: string;
    navigation: any;
    logout: () => void;
}

const Tab = createMaterialTopTabNavigator();

const yay = () => {
    return (
        <View>
            <Text>Yay !</Text>
        </View>
    );
};

const yit = () => {
    return (
        <View>
            <Text>Yit !</Text>
        </View>
    );
};

export const Profile = ({ navigation, logout }: SettingsScreenProps) => (
    <View style={FULL}>
        <Screen style={CONTAINER} preset="scroll" backgroundColor={color.white}>
            <Header
                // headerText="Profile Screen"
                style={HEADER}
                titleStyle={HEADER_TITLE}
                rightIcon="logout"
                onRightPress={() => {
                    navigation.navigate('welcome');
                    logout();
                }}
            />
            <HeaderContainer>
                <ProfileInformation>
                    <ProfilePic
                        source={require('../../../../assets/profile-pic.png')}
                    />
                    <ProfileName>Élodie Five</ProfileName>
                    <Text>
                        Responsable Marketing{' '}
                        <Department>Communication</Department>
                    </Text>
                    <CardContainer>
                        <Card>
                            <Text>Total de point</Text>
                            <Points points={2567} />
                        </Card>
                        <Card>
                            <RankingText>Classement</RankingText>
                            <RankingNumberContainer>
                                <Up
                                    source={require('../../../../assets/up.png')}
                                />
                                <Text>4</Text>
                            </RankingNumberContainer>
                        </Card>
                        <Card>
                            <InscriptionText>Inscription</InscriptionText>
                            <DateContainer>
                                <Clock
                                    source={require('../../../../assets/clock.png')}
                                />
                                <Text>12/09/20</Text>
                            </DateContainer>
                        </Card>
                    </CardContainer>
                </ProfileInformation>
            </HeaderContainer>
            <Tab.Navigator
                tabBarOptions={{
                    activeTintColor: '#EE6538',
                    inactiveTintColor: '#856B7F',
                    indicatorStyle: {
                        backgroundColor: '#EE6538',
                        width: 136,
                        left: '10%'
                    },
                    labelStyle: { fontSize: 12 },
                    style: {
                        backgroundColor: '#FAE3C8',
                        borderBottomLeftRadius: 30,
                        borderBottomRightRadius: 30
                    }
                }}
            >
                <Tab.Screen name="défis accomplis" component={yay} />
                <Tab.Screen name="lieux visités" component={yit} />
            </Tab.Navigator>
        </Screen>
    </View>
);

const mapStateToProps = (state: any) => ({
    logout: state.poi.list
});

const mapDispatchToProps = (dispatch: any) => ({
    logout: () => dispatch(loginActions.logout())
});

export const ProfileScreen = connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile);
