import * as React from 'react';
import { View, Text } from 'react-native';
import { color } from '../../theme/color';
import styled from 'styled-components/native';
import { IndividualLeaderboardScreen } from '../../components/templates/leaderboard/individual-leaderboard';
import { CollectiveLeaderboardScreen } from '../../components/templates/leaderboard/collective-leaderboard';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Full = styled.View`
    flex: 1;
    background-color: #ffffff;
`;

const HeaderContainer = styled.View`
    height: 225px;
    background-color: #fae3c8;
`;

const HeaderTextContainer = styled.View`
    margin-top: 66px;
    margin-left: 21px;
`;

const HeaderTitle = styled.Text`
    font-size: 24px;
    font-weight: bold;
    color: #162d4b;
`;

const HeaderSubtitle = styled.Text`
    font-size: 14px;
    color: #856b7f;
`;

const HeaderTimer = styled.Text`
    font-size: 36px;
    color: #e284a3;
`;

export interface LeaderboardScreenProps {
    loadContent: () => string;
    content: string;
    navigation: any;
}

const Tab = createMaterialTopTabNavigator();

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
                <Tab.Screen
                    name="individuel"
                    component={IndividualLeaderboardScreen}
                />
                <Tab.Screen
                    name="collectif"
                    component={CollectiveLeaderboardScreen}
                />
            </Tab.Navigator>
        </Full>
    );
};
