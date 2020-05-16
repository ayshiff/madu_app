import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import {
    NavigationContainerRef,
    NavigationContainer
} from '@react-navigation/native';
import { WelcomeScreen } from '../screens';
import { HomeScreen } from '../screens/home-screen/home-screen';
import { RegisterScreen } from '../components/templates/welcome';
import { RegisterStepOneScreen } from '../components/templates/welcome/register/step-one';
import { RegisterStepTwoScreen } from '../components/templates/welcome/register/step-two';
import { RegisterStepThreeScreen } from '../components/templates/welcome/register/step-three';
import { RegisterStepFourScreen } from '../components/templates/welcome/register/step-four';
import { RegisterStepFiveScreen } from '../components/templates/welcome/register/step-five';
import { LoginScreen } from '../components/templates/welcome/login';
import { WelcomeParamList } from './types';

const Stack = createStackNavigator<WelcomeParamList>();

export const WelcomeNavigator = React.forwardRef<
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
                <Stack.Screen name="welcome" component={WelcomeScreen} />
                <Stack.Screen name="register" component={RegisterScreen} />
                <Stack.Screen
                    name="register-step-one"
                    component={RegisterStepOneScreen}
                />
                <Stack.Screen
                    name="register-step-two"
                    component={RegisterStepTwoScreen}
                />
                <Stack.Screen
                    name="register-step-three"
                    component={RegisterStepThreeScreen}
                />
                <Stack.Screen
                    name="register-step-four"
                    component={RegisterStepFourScreen}
                />
                <Stack.Screen
                    name="register-step-five"
                    component={RegisterStepFiveScreen}
                />
                <Stack.Screen name="login" component={LoginScreen} />
                <Stack.Screen name="home" component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
});

/**
 * A list of routes from which we're allowed to leave the app when
 * the user presses the back button on Android.
 *
 * Anything not on this list will be a standard `back` action in
 * react-navigation.
 */
export const exitRoutes: string[] = ['welcome'];
