import { combineReducers, Reducer } from 'redux';
import { registerReducer } from './register.reducer';
import { loginReducer } from './login.reducer';

export interface AppStore {
    register: ReturnType<typeof registerReducer>;
    login: ReturnType<typeof loginReducer>;
}

export const rootReducer: Reducer<AppStore> = combineReducers({
    register: registerReducer,
    login: loginReducer
});
