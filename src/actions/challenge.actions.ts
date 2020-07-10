import { AjaxError } from 'rxjs/ajax';
import { ActionTypes } from '../core/actions.type';

export interface IChallenge {
    startDate: string;
    title: string;
    description: string;
    content: string;
    category: string;
    challengents: number;
    photo: string;
    participants: [];
    id: string;
}

export enum ChallengeTypes {
    LoadChallenge = '[CHALLENGE] LOAD',
    LoadChallengeSuccess = '[CHALLENGE] LOAD_SUCCESS',
    LoadChallengeFail = '[CHALLENGE] LOAD_FAIL',
    ValidateChallenge = '[CHALLENGE] VALIDATE',
    ValidateChallengeSuccess = '[CHALLENGE] VALIDATE_SUCCESS',
    ValidateChallengeFail = '[CHALLENGE] VALIDATE_FAIL',
    LoadWeeklyChallenge = '[CHALLENGE] LOAD_BY_ID',
    LoadWeeklyChallengeSuccess = '[CHALLENGE] LOAD_BY_ID_SUCCESS',
    LoadWeeklyChallengeFail = '[CHALLENGE] LOAD_BY_ID_FAIL'
}

export const challengeActions = {
    loadChallenge: () => ({ type: ChallengeTypes.LoadChallenge } as const),
    loadChallengeSuccess: (payload: IChallenge[]) =>
        ({ type: ChallengeTypes.LoadChallengeSuccess, payload } as const),
    loadChallengeFail: (error: AjaxError) =>
        ({ type: ChallengeTypes.LoadChallengeFail, error } as const),
    validateChallenge: (challengeId: string) =>
        ({
            type: ChallengeTypes.ValidateChallenge,
            payload: { challengeId }
        } as const),
    validateChallengeSuccess: (payload: IChallenge) =>
        ({ type: ChallengeTypes.ValidateChallengeSuccess, payload } as const),
    validateChallengeFail: (error: AjaxError) =>
        ({ type: ChallengeTypes.ValidateChallengeFail, error } as const),
    loadWeeklyChallenge: (payload: string) =>
        ({ type: ChallengeTypes.LoadWeeklyChallenge, payload } as const),
    loadWeeklyChallengeSuccess: (payload: IChallenge) =>
        ({ type: ChallengeTypes.LoadWeeklyChallengeSuccess, payload } as const),
    loadWeeklyChallengeFail: (error: AjaxError) =>
        ({ type: ChallengeTypes.LoadWeeklyChallengeFail, error } as const)
};

// We can then type all of our actions with a single line
export type ChallengeActions = ActionTypes<typeof challengeActions>;
