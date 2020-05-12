import { combineEpics } from 'redux-observable';
import { exampleEpics } from './example.epic';

export const rootEpic = combineEpics(exampleEpics);
