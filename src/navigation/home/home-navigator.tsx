import React from 'react';
import {
    NavigationContainer,
    NavigationContainerRef
} from '@react-navigation/native';
import styled from 'styled-components';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { ImageStyle, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {
    HomeScreen,
    MapScreen,
    ProfileScreen,
    LeaderboardScreen
} from 'madu/screens';
import { Icon } from 'madu/components';
import { IconTypes } from 'madu/components/atoms/icon/icons';
import { DetailScreen } from 'madu/screens/detail-screen/detail-screen';
import { PoiScreen } from 'madu/screens/poi-screen/poi-screen';
import { PoiSuccessScreen } from 'madu/screens/poi-success-screen/poi-success-screen';
import { ChallengeScreen } from 'madu/components/templates/challenge/challenge-main-step';
import { ChallengePictureStepScreen } from 'madu/components/templates/challenge/challenge-picture-step';
import { ChallengeSuccessStepScreen } from 'madu/components/templates/challenge/challenge-success-step';
import { AttendeesStep } from 'madu/components/templates/challenge/attendees-step';
import { ProfileSettingsScreen } from 'madu/components/templates/profile/profile-settings';
import { MapParamList, ChallengeParamList, ProfileParamList } from '../types';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator<MapParamList>();
const ChallengeStack = createStackNavigator<ChallengeParamList>();
const ProfileStack = createStackNavigator<ProfileParamList>();

const ICON: ImageStyle = {
    width: 18,
    height: 18
};
const ELLIPSE_ICON: ImageStyle = {
    width: 15,
    height: 15,
    position: 'absolute',
    left: 7,
    bottom: 0
};

const IconWrapper = styled(View)`
    position: relative;
`;

const MapNavigator = React.forwardRef<
    NavigationContainerRef,
    Partial<React.ComponentProps<typeof NavigationContainer>>
>(() => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                gestureEnabled: true
            }}
        >
            <Stack.Screen name="map" component={MapScreen} />
            <Stack.Screen name="detail" component={DetailScreen} />
            <Stack.Screen name="poi" component={PoiScreen} />
            <Stack.Screen name="poi-success" component={PoiSuccessScreen} />
        </Stack.Navigator>
    );
});

const ChallengeNavigator = React.forwardRef<
    NavigationContainerRef,
    Partial<React.ComponentProps<typeof NavigationContainer>>
>(() => {
    return (
        <ChallengeStack.Navigator
            screenOptions={{
                headerShown: false,
                gestureEnabled: true
            }}
        >
            <ChallengeStack.Screen
                name="home-challenge"
                component={HomeScreen}
            />
            <ChallengeStack.Screen
                name="challenge"
                component={ChallengeScreen}
            />
            <ChallengeStack.Screen
                name="challenge-picture"
                component={ChallengePictureStepScreen}
            />
            <ChallengeStack.Screen
                name="challenge-success"
                component={ChallengeSuccessStepScreen}
            />
            <ChallengeStack.Screen
                name="attendees-profile"
                component={ProfileScreen}
            />
            <ChallengeStack.Screen
                name="attendees-number"
                component={AttendeesStep}
            />
        </ChallengeStack.Navigator>
    );
});

const ProfileNavigator = React.forwardRef<
    NavigationContainerRef,
    Partial<React.ComponentProps<typeof NavigationContainer>>
>(() => {
    return (
        <ProfileStack.Navigator
            screenOptions={{
                headerShown: false,
                gestureEnabled: true
            }}
        >
            <ProfileStack.Screen name="profile" component={ProfileScreen} />
            <ProfileStack.Screen
                name="profile-settings"
                component={ProfileSettingsScreen}
            />
        </ProfileStack.Navigator>
    );
});

export const HomeNavigator = React.forwardRef<
    NavigationContainerRef,
    Partial<React.ComponentProps<typeof NavigationContainer>>
>(() => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }: any) => {
                    let iconName;
                    let active;

                    switch (route.name) {
                        case 'Accueil':
                            iconName = focused ? 'home_active' : 'home';
                            active = focused;
                            break;
                        case 'Profile':
                            iconName = focused ? 'user_active' : 'user';
                            active = focused;
                            break;
                        case 'Explorer':
                            iconName = focused ? 'explore_active' : 'explore';
                            active = focused;
                            break;
                        case 'Classement':
                            iconName = focused ? 'crown_active' : 'crown';
                            active = focused;
                            break;
                        default:
                            iconName = focused ? 'home_active' : 'home';
                            active = focused;
                            break;
                    }
                    return (
                        <IconWrapper>
                            <Icon icon={iconName as IconTypes} style={ICON} />
                            {active && (
                                <Icon
                                    style={ELLIPSE_ICON}
                                    icon={'active_ellipse' as IconTypes}
                                />
                            )}
                        </IconWrapper>
                    );
                }
            })}
            tabBarOptions={{
                activeTintColor: '#5D2555',
                inactiveTintColor: 'gray'
            }}
        >
            <Tab.Screen name="Home" component={ChallengeNavigator} />
            <Tab.Screen name="Explorer" component={MapNavigator} />
            <Tab.Screen name="Classement" component={LeaderboardScreen} />
            <Tab.Screen name="Profile" component={ProfileNavigator} />
        </Tab.Navigator>
    );
});
