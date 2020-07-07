import { combineReducers, Reducer } from 'redux';
import { registerReducer } from './register.reducer';
import { loginReducer } from './login.reducer';
import { poiReducer } from './poi.reducer';

export interface AppStore {
    register: ReturnType<typeof registerReducer>;
    login: ReturnType<typeof loginReducer>;
    poi: ReturnType<typeof poiReducer>;
}

export const rootReducer: Reducer<AppStore> = combineReducers({
    register: registerReducer,
    login: loginReducer,
    poi: poiReducer
});
