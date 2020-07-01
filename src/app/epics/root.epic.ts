import { combineEpics } from 'redux-observable';
import { registerEpics } from './register.epic';
import { loginEpics } from './login.epic';

export const rootEpic = combineEpics(registerEpics, loginEpics);
