import React from 'react';
import {
    NavigationContainer,
    NavigationContainerRef
} from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import { HomeNavigator } from './home-navigator';
import { WelcomeNavigator } from '../welcome-navigator';

const StackWithoutToken = createStackNavigator();

export const HomeNavigatorWithToken = React.forwardRef<
    NavigationContainerRef,
    Partial<React.ComponentProps<typeof NavigationContainer>>
>((props, ref) => {
    return (
        <NavigationContainer {...props} ref={ref}>
            <StackWithoutToken.Navigator
                initialRouteName="default"
                screenOptions={{
                    headerShown: false,
                    gestureEnabled: true
                }}
            >
                <StackWithoutToken.Screen
                    name="welcome"
                    component={WelcomeNavigator}
                />
                <StackWithoutToken.Screen
                    name="default"
                    component={HomeNavigator}
                />
            </StackWithoutToken.Navigator>
        </NavigationContainer>
    );
});
