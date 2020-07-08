import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import {
    NavigationContainerRef,
    NavigationContainer
} from '@react-navigation/native';
import { WelcomeScreen } from '../screens';
import { RegisterStepOneScreen } from '../components/templates/welcome/register/step-one';
import { RegisterStepTwoScreen } from '../components/templates/welcome/register/step-two';
import { RegisterStepThreeScreen } from '../components/templates/welcome/register/step-three';
import { RegisterStepFourScreen } from '../components/templates/welcome/register/step-four';
import { RegisterStepFiveScreen } from '../components/templates/welcome/register/step-five';
import { LoginScreen } from '../components/templates/welcome/login';
import { WelcomeParamList } from './types';
import { HomeNavigator } from './home/home-navigator';
import { RegisterStepSixScreen } from '../components/templates/welcome/register/step-six';

const Stack = createStackNavigator<WelcomeParamList>();

export const WelcomeNavigator = React.forwardRef<
    NavigationContainerRef,
    Partial<React.ComponentProps<typeof NavigationContainer>>
>(() => (
    <NavigationContainer>
        <Stack.Navigator
            initialRouteName="welcome"
            screenOptions={{
                headerShown: false,
                gestureEnabled: true,
                cardStyle: { backgroundColor: '#FFF5EB' }
            }}
        >
            <Stack.Screen name="welcome" component={WelcomeScreen} />
            <Stack.Screen
                name="registerStepOne"
                component={RegisterStepOneScreen}
            />
            <Stack.Screen
                name="registerStepTwo"
                component={RegisterStepTwoScreen}
            />
            <Stack.Screen
                name="registerStepThree"
                component={RegisterStepThreeScreen}
            />
            <Stack.Screen
                name="registerStepFour"
                component={RegisterStepFourScreen}
            />
            <Stack.Screen
                name="registerStepFive"
                component={RegisterStepFiveScreen}
            />
            <Stack.Screen
                name="registerStepSix"
                component={RegisterStepSixScreen}
            />
            <Stack.Screen name="login" component={LoginScreen} />
            <Stack.Screen name="home" component={HomeNavigator} />
        </Stack.Navigator>
    </NavigationContainer>
));

/**
 * A list of routes from which we're allowed to leave the app when
 * the user presses the back button on Android.
 *
 * Anything not on this list will be a standard `back` action in
 * react-navigation.
 */
export const exitRoutes: string[] = ['welcome'];
