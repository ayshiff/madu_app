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
import { MapParamList } from './types';
import { DetailScreen } from '../screens/detail-screen/detail-screen';
import { PoiScreen } from '../screens/poi-screen/poi-screen';
import { PoiSuccessScreen } from '../screens/poi-success-screen/poi-success-screen';

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
            <Stack.Screen name="poi" component={PoiScreen} />
            <Stack.Screen name="poi-success" component={PoiSuccessScreen} />
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
            <Tab.Screen name="Leaderboard" component={LeaderboardScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
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
