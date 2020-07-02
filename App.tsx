/* eslint-disable global-require */
import React, { useState, useEffect } from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import {
    SafeAreaProvider,
    initialWindowSafeAreaInsets
} from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import returnStoreAndPersistor from './src/app/app.store';
import { WelcomeNavigator } from './src/app/navigation/welcome-navigator';
import { HomeNavigatorWithContainer } from './src/app/navigation';

const { store, persistor } = returnStoreAndPersistor();

/**
 * This is the root component of our app.
 */
const App = () => {
    const [isLoadingComplete, setLoadingState] = useState(false);

    const startAppAsync = async () => {
        await Font.loadAsync({
            Montserrat: require('./src/app/theme/fonts/Montserrat-Regular.ttf')
        });
        setLoadingState(true);
    };

    useEffect(() => {
        startAppAsync();
    }, []);

    if (!isLoadingComplete) {
        return <AppLoading />;
    }

    const {
        login: { accessToken }
    } = store.getState();
    return (
        <Provider store={store as any}>
            <PersistGate persistor={persistor}>
                <SafeAreaProvider
                    initialSafeAreaInsets={initialWindowSafeAreaInsets}
                >
                    {accessToken ? (
                        <HomeNavigatorWithContainer />
                    ) : (
                        <WelcomeNavigator />
                    )}
                </SafeAreaProvider>
            </PersistGate>
        </Provider>
    );
};

export default App;
