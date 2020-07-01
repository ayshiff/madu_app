// Welcome to the main entry point of the app.
//
// In this file, we'll be kicking off our app or storybook.

import React, { useState, useEffect, useRef } from 'react';
import { YellowBox } from 'react-native';
import { NavigationContainerRef } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';
import { contains } from 'ramda';
import {
    SafeAreaProvider,
    initialWindowSafeAreaInsets
} from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import * as storage from './src/app/utils/storage';
import { initFonts } from './src/app/theme/fonts';

import { exitRoutes, setRootNavigation } from './src/app/navigation';
import { useBackButtonHandler } from './src/app/navigation/utils/use-back-button-handler';
import getActiveRouteName from './src/app/navigation/utils/get-active-routename';
import { store } from './src/app/app.store';
import { WelcomeNavigator } from './src/app/navigation/welcome-navigator';
// import { RootStore, RootStoreProvider, setupRootStore } from "./models/root-store"

// This puts screens in a native ViewController or Activity. If you want fully native
// stack navigation, use `createNativeStackNavigator` in place of `createStackNavigator`:
// https://github.com/kmagiera/react-native-screens#using-native-stack-navigator
enableScreens();

/**
 * Ignore some yellowbox warnings. Some of these are for deprecated functions
 * that we haven't gotten around to replacing yet.
 */
YellowBox.ignoreWarnings([
    'componentWillMount is deprecated',
    'componentWillReceiveProps is deprecated',
    'Require cycle:'
]);

/**
 * Are we allowed to exit the app?  This is called when the back button
 * is pressed on android.
 *
 * @param routeName The currently active route name.
 */
const canExit = (routeName: string) => contains(routeName, exitRoutes);

export const NAVIGATION_PERSISTENCE_KEY = 'NAVIGATION_STATE';

/**
 * This is the root component of our app.
 */
const App: React.FunctionComponent<{}> = () => {
    const navigationRef: any = useRef<NavigationContainerRef>();
    const [initialNavigationState, setInitialNavigationState] = useState();
    const [
        isRestoringNavigationState,
        setIsRestoringNavigationState
    ] = useState(true);

    setRootNavigation(navigationRef);
    useBackButtonHandler(navigationRef, canExit);

    /**
     * Keep track of state changes
     * Track Screens
     * Persist State
     */
    const routeNameRef = useRef();
    const onNavigationStateChange = (state: any) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const previousRouteName = routeNameRef.current;
        const currentRouteName = getActiveRouteName(state);

        // Save the current route name for later comparision
        routeNameRef.current = currentRouteName;

        // Persist state to storage
        storage.save(NAVIGATION_PERSISTENCE_KEY, state);
    };

    useEffect(() => {
        (async () => {
            await initFonts();
            // setupRootStore().then(setRootStore)
        })();
    }, []);

    useEffect(() => {
        const restoreState = async () => {
            try {
                const state = await storage.load(NAVIGATION_PERSISTENCE_KEY);

                if (state) {
                    setInitialNavigationState(state);
                }
            } finally {
                setIsRestoringNavigationState(false);
            }
        };

        if (isRestoringNavigationState) {
            restoreState();
        }
    }, [isRestoringNavigationState]);

    // Before we show the app, we have to wait for our state to be ready.
    // In the meantime, don't render anything. This will be the background
    // color set in native by rootView's background color.
    //
    // This step should be completely covered over by the splash screen though.
    //
    // You're welcome to swap in your own component to render if your boot up
    // sequence is too slow though.

    // otherwise, we're ready to render the app
    return (
        <Provider store={store as any}>
            <SafeAreaProvider
                initialSafeAreaInsets={initialWindowSafeAreaInsets}
            >
                <WelcomeNavigator
                    ref={navigationRef}
                    initialState={initialNavigationState}
                    onStateChange={onNavigationStateChange}
                />
            </SafeAreaProvider>
        </Provider>
    );
};

export default App;
