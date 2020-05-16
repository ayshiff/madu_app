import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { WelcomeScreen } from '../screens';
import { PrimaryParamList } from './types';
import { HomeScreen } from '../screens/home-screen/home-screen';

const Stack = createStackNavigator<PrimaryParamList>();

export function HomeNavigator() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                gestureEnabled: true
            }}
        >
            <Stack.Screen name="welcome" component={WelcomeScreen} />
            <Stack.Screen name="home" component={HomeScreen} />
        </Stack.Navigator>
    );
}

/**
 * A list of routes from which we're allowed to leave the app when
 * the user presses the back button on Android.
 *
 * Anything not on this list will be a standard `back` action in
 * react-navigation.
 */
export const exitRoutes: string[] = ['welcome'];
