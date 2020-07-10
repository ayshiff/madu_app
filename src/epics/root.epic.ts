import { combineEpics } from 'redux-observable';
import { registerEpics } from './register.epic';
import { loginEpics } from './login.epic';
import { poiEpics } from './poi.epic';
import { challengeEpics } from './challenge.epic';
import { profileEpics } from './profile.epic';
import { leaderboardEpics } from './leaderboard.epic';

export const rootEpic = combineEpics(
    registerEpics,
    loginEpics,
    poiEpics,
    challengeEpics,
    profileEpics,
    leaderboardEpics
);
