import { AjaxError } from 'rxjs/ajax';
import { ActionTypes } from '../core/actions.type';

export enum LeaderboardTypes {
    Leaderboard = '[LEADERBOARD] LEADERBOARD',
    LeaderboardSuccess = '[LEADERBOARD] LEADERBOARD_SUCCESS',
    LeaderboardFail = '[LEADERBOARD] LEADERBOARD_FAIL'
}

export type ILeaderboardResponse = {
    access_token: string;
};

export interface IUserData {
    email: string;
    password: string;
}

// Our object that produce our action creators
export const leaderboardActions = {
    leaderboard: (payload: string) =>
        ({ type: LeaderboardTypes.Leaderboard, payload } as const),
    leaderboardSuccess: (payload: any[]) =>
        ({ type: LeaderboardTypes.LeaderboardSuccess, payload } as const),
    leaderboardFail: (error: AjaxError) =>
        ({ type: LeaderboardTypes.LeaderboardFail, error } as const)
};

// We can then type all of our actions with a single line
export type LeaderboardActions = ActionTypes<typeof leaderboardActions>;
