import { AnyAction, applyMiddleware, compose, createStore, Store } from 'redux';
import { createLogger } from 'redux-logger';
import { createEpicMiddleware } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { rootEpic } from './epics/root.epic';
import { AppStore, rootReducer } from './store/root.reducer';

export const dependencies = { ajax } as const;

const epicMiddleware = createEpicMiddleware({
    dependencies
});

const middlewares = [epicMiddleware];
const composeEnhancers =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store: Store<AppStore> = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middlewares))
);

epicMiddleware.run(rootEpic);
