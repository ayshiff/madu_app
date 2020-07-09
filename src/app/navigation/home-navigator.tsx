import React from 'react';
import {
    NavigationContainer,
    NavigationContainerRef
} from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { ImageStyle } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {
    HomeScreen,
    MapScreen,
    ContentScreen,
    ProfileScreen,
    LeaderboardScreen,
    WelcomeScreen
} from '../screens';
import { Icon } from '../components';
import { IconTypes } from '../components/atoms/icon/icons';
import { MapParamList, ChallengeParamList, ProfileParamList } from './types';
import { DetailScreen } from '../screens/detail-screen/detail-screen';
import { PoiScreen } from '../screens/poi-screen/poi-screen';
import { PoiSuccessScreen } from '../screens/poi-success-screen/poi-success-screen';
import { ChallengeScreen } from '../components/templates/challenge/challenge-main-step';
import { ChallengePictureStepScreen } from '../components/templates/challenge/challenge-picture-step';
import { ChallengeSuccessStepScreen } from '../components/templates/challenge/challenge-success-step';
import { ProfileSettingsScreen } from '../components/templates/profile/profile-settings';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator<MapParamList>();
const ChallengeStack = createStackNavigator<ChallengeParamList>();
const ProfileStack = createStackNavigator<ProfileParamList>();

const ICON: ImageStyle = {
    width: 15,
    height: 15
};

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
                tabBarIcon: () => {
                    let iconName;

                    switch (route.name) {
                        case 'Home':
                            iconName = 'explorer';
                            break;
                        case 'Settings':
                            iconName = 'profile';
                            break;
                        case 'Map':
                            iconName = 'map';
                            break;
                        case 'Leaderboard':
                            iconName = 'content';
                            break;
                        default:
                            iconName = 'explorer';
                            break;
                    }
                    return <Icon icon={iconName as IconTypes} style={ICON} />;
                }
            })}
            tabBarOptions={{
                activeTintColor: '#5D2555',
                inactiveTintColor: 'gray'
            }}
        >
            <Tab.Screen name="Home" component={ChallengeNavigator} />
            <Tab.Screen name="Map" component={MapNavigator} />
            <Tab.Screen name="Leaderboard" component={LeaderboardScreen} />
            <Tab.Screen name="Profile" component={ProfileNavigator} />
        </Tab.Navigator>
    );
});

export const HomeNavigatorWithContainer = React.forwardRef<
    NavigationContainerRef,
    Partial<React.ComponentProps<typeof NavigationContainer>>
>((props, ref) => {
    return (
        <NavigationContainer {...props} ref={ref}>
            <HomeNavigator />
            <Stack.Screen name="welcome" component={WelcomeScreen} />
        </NavigationContainer>
    );
});
