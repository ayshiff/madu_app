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
    LeaderboardScreen,
    WelcomeScreen
} from '../screens';
import { Icon } from '../components';
import { IconTypes } from '../components/atoms/icon/icons';
import { MapParamList } from '../app/navigation/types';
import { DetailScreen } from '../screens/detail-screen/detail-screen';
import { PoiScreen } from '../screens/poi-screen/poi-screen';
import { PoiSuccessScreen } from '../screens/poi-success-screen/poi-success-screen';

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
                        case 'Home':
                            iconName = focused ? 'home_active' : 'home';
                            active = focused;
                            break;
                        case 'Settings':
                            iconName = focused ? 'user_active' : 'user';
                            active = focused;
                            break;
                        case 'Map':
                            iconName = focused ? 'explore_active' : 'explore';
                            active = focused;
                            break;
                        case 'Leaderboard':
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
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Map" component={MapNavigator} />
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
