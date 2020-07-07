import React, { useState } from 'react';
import { registerRootComponent, AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {
    SafeAreaProvider,
    initialWindowSafeAreaInsets
} from 'react-native-safe-area-context';

import { WelcomeNavigator } from './navigation/welcome-navigator';
import returnStoreAndPersistor from './app.store';

const { store, persistor } = returnStoreAndPersistor();

const App = () => {
    const [isLoadingComplete, setLoadingState] = useState(false);

    const handleLoadingSuccess = () => {
        setLoadingState(true);
    };

    const startAppAsync = () => {
        return Font.loadAsync({
            Montserrat: require('./theme/fonts/Montserrat-Regular.ttf')
        });
    };

    if (!isLoadingComplete) {
        return (
            <AppLoading
                startAsync={startAppAsync}
                onFinish={handleLoadingSuccess}
                autoHideSplash
            />
        );
    }
    return (
        <Provider store={store as any}>
            <PersistGate persistor={persistor}>
                <SafeAreaProvider
                    initialSafeAreaInsets={initialWindowSafeAreaInsets}
                >
                    <WelcomeNavigator />
                </SafeAreaProvider>
            </PersistGate>
        </Provider>
    );
};

export default registerRootComponent(App);
