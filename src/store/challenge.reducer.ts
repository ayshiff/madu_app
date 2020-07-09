import {
    IChallenge,
    ChallengeTypes,
    ChallengeActions
} from '../actions/challenge.actions';

export const defaultState: IChallengeState = {
    list: []
};

export type IChallengeState = {
    list: IChallenge[];
    weekly?: IChallenge;
};

export const challengeReducer = (
    challengeState: IChallengeState = defaultState,
    action: ChallengeActions
): IChallengeState => {
    switch (action.type) {
        case ChallengeTypes.LoadChallengeSuccess:
            return {
                list: action.payload
            };
        case ChallengeTypes.LoadWeeklyChallengeSuccess:
            return {
                ...challengeState,
                weekly: action.payload
            };
        default:
            return challengeState;
    }
};
