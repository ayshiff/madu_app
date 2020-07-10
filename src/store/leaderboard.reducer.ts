import {
    LeaderboardActions,
    LeaderboardTypes
} from 'madu/actions/leaderboard.actions';

export const defaultState: any[] = [];

export type ILeaderboardState = any[];

export const leaderboardReducer = (
    leaderboardState: ILeaderboardState = defaultState,
    action: LeaderboardActions
): ILeaderboardState => {
    switch (action.type) {
        case LeaderboardTypes.LeaderboardSuccess:
            return action.payload;
        default:
            return leaderboardState;
    }
};
