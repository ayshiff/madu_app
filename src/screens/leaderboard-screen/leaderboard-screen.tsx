import * as React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { leaderboardActions } from 'madu/actions/leaderboard.actions';
import { connect } from 'react-redux';
import { color } from '../../theme/color';
import { IndividualLeaderboardScreen } from '../../components/templates/leaderboard/individual-leaderboard';
import { CollectiveLeaderboardScreen } from '../../components/templates/leaderboard/collective-leaderboard';

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
    loadLeaderboard: (payload: string) => void;
    content: string;
    navigation: any;
    userData: any;
    leaderboard: any;
}

const Tab = createMaterialTopTabNavigator();

export const Leaderboard = ({
    navigation,
    userData,
    leaderboard,
    loadLeaderboard
}: LeaderboardScreenProps) => {
    React.useEffect(() => {
        if (userData.company.id) {
            loadLeaderboard(userData.company.id);
        }
    }, [loadLeaderboard, leaderboard, userData]);

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
                <Tab.Screen name="individuel">
                    {(props) => (
                        <IndividualLeaderboardScreen
                            {...props}
                            leaderboard={leaderboard.users}
                        />
                    )}
                </Tab.Screen>

                <Tab.Screen name="collectif">
                    {(props) => (
                        <CollectiveLeaderboardScreen
                            {...props}
                            leaderboard={leaderboard.users}
                        />
                    )}
                </Tab.Screen>
            </Tab.Navigator>
        </Full>
    );
};

const mapStateToProps = (state: any) => ({
    userData: state.profile,
    leaderboard: state.leaderboard
});

const mapDispatchToProps = (dispatch: any) => ({
    loadLeaderboard: (payload: string) =>
        dispatch(leaderboardActions.leaderboard(payload))
});

export const LeaderboardScreen = connect(
    mapStateToProps,
    mapDispatchToProps
)(Leaderboard);
