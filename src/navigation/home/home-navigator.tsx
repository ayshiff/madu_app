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
import { MapParamList } from '../types';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator<MapParamList>();

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
                        case 'Profil':
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
            <Tab.Screen name="Accueil" component={HomeScreen} />
            <Tab.Screen name="Explorer" component={MapNavigator} />
            <Tab.Screen name="Classement" component={LeaderboardScreen} />
            <Tab.Screen name="Profil" component={ProfileScreen} />
        </Tab.Navigator>
    );
});
