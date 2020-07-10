import { combineReducers, Reducer } from 'redux';
import { registerReducer } from './register.reducer';
import { loginReducer } from './login.reducer';
import { poiReducer } from './poi.reducer';
import { challengeReducer } from './challenge.reducer';
import { profileReducer } from './profile.reducer';
import { leaderboardReducer } from './leaderboard.reducer';

export interface AppStore {
    register: ReturnType<typeof registerReducer>;
    login: ReturnType<typeof loginReducer>;
    poi: ReturnType<typeof poiReducer>;
    challenge: ReturnType<typeof challengeReducer>;
    profile: ReturnType<typeof profileReducer>;
    leaderboard: ReturnType<typeof leaderboardReducer>;
}

export const rootReducer: Reducer<AppStore> = combineReducers({
    register: registerReducer,
    login: loginReducer,
    poi: poiReducer,
    challenge: challengeReducer,
    profile: profileReducer,
    leaderboard: leaderboardReducer
});
