import { applyMiddleware, compose, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { persistStore, persistReducer } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import { rootEpic } from './epics/root.epic';
import { rootReducer } from './store/root.reducer';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage
};

export const dependencies = { ajax } as const;

const epicMiddleware = createEpicMiddleware({
    dependencies
});

const middlewares = [epicMiddleware];
const composeEnhancers =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
    const store = createStore(
        persistedReducer,
        composeEnhancers(applyMiddleware(...middlewares))
    );
    const persistor = persistStore(store);
    epicMiddleware.run(rootEpic);
    return { store, persistor };
};
