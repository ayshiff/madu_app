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
    ProfileScreen,
    LeaderboardScreen
} from 'madu/screens';
import { Icon } from 'madu/components';
import { IconTypes } from 'madu/components/atoms/icon/icons';
import { DetailScreen } from 'madu/screens/detail-screen/detail-screen';
import { PoiScreen } from 'madu/screens/poi-screen/poi-screen';
import { PoiSuccessScreen } from 'madu/screens/poi-success-screen/poi-success-screen';
import { MapParamList } from '../types';

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
                        case 'Explorer':
                            iconName = 'map';
                            break;
                        case 'Content':
                            iconName = 'content';
                            break;
                        case 'Classement':
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
            <Tab.Screen name="Explorer" component={MapNavigator} />
            <Tab.Screen name="Classement" component={LeaderboardScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    );
});
