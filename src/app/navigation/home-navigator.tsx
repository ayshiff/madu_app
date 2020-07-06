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
    ChallengeScreen,
    LeaderboardScreen
} from '../screens';
import { Icon } from '../components';
import { ChallengeSuccessStepScreen } from '../components/templates/challenge/challenge-success-step';
import { IconTypes } from '../components/atoms/icon/icons';
import { MapParamList } from './types';
import { DetailScreen } from '../screens/detail-screen/detail-screen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator<MapParamList>();

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
        </Stack.Navigator>
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
                        case 'Content':
                            iconName = 'content';
                            break;
                        case 'Challenge':
                            iconName = 'content';
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
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Map" component={MapNavigator} />
            <Tab.Screen name="Content" component={ContentScreen} />
            <Tab.Screen
                name="Challenge"
                component={ChallengeSuccessStepScreen}
            />
            <Tab.Screen name="Leaderboard" component={LeaderboardScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    );
});
