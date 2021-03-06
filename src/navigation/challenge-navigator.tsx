import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import {
    NavigationContainerRef,
    NavigationContainer
} from '@react-navigation/native';

import { ChallengePictureStepScreen } from '../components/templates/challenge/challenge-picture-step';
import { ChallengeScreen } from '../components/templates/challenge/challenge-main-step';

const Stack = createStackNavigator();

export const ChallengeNavigator = React.forwardRef<
    NavigationContainerRef,
    Partial<React.ComponentProps<typeof NavigationContainer>>
>((props, ref) => {
    return (
        <NavigationContainer {...props} ref={ref}>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                    gestureEnabled: true
                }}
            >
                <Stack.Screen name="challenge" component={ChallengeScreen} />
                <Stack.Screen
                    name="picture"
                    component={ChallengePictureStepScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
});

export const exitRoutes: string[] = ['picture'];
