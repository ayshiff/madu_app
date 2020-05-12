import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
// Without Expo
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import { HomeScreen } from '../screens';
import { PrimaryParamList } from './types';
import { OtherScreen } from '../screens/other-screen/other-screen';

const Stack = createStackNavigator<PrimaryParamList>();
// Without Expo
// const Stack = createNativeStackNavigator<PrimaryParamList>()

export function PrimaryNavigator() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                gestureEnabled: true
            }}
        >
            <Stack.Screen name="welcome" component={HomeScreen} />
            <Stack.Screen name="other" component={OtherScreen} />
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
