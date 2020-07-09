import { of, Observable } from 'rxjs';
import { Epic, ofType, combineEpics } from 'redux-observable';
import { concatMap, mergeMap, catchError } from 'rxjs/operators';
import { AjaxResponse, AjaxError } from 'rxjs/ajax';
import { BACKEND_SERVICE_URL } from 'madu/const';
import {
    ChallengeTypes,
    challengeActions,
    ChallengeActions
} from 'madu/actions/challenge.actions';
import type { dependencies } from '../app.store';

export const loadChallenges: Epic = (
    action$: Observable<ChallengeActions>,
    state$: any,
    { ajax }: typeof dependencies
): Observable<ChallengeActions> => {
    return action$.pipe(
        ofType(ChallengeTypes.LoadChallenge),
        concatMap(() => {
            const headers = {
                Authorization: `Bearer ${state$.value.login.accessToken}`
            };
            return ajax({
                headers,
                url: `${BACKEND_SERVICE_URL}/challenges`,
                method: 'GET'
            }).pipe(
                mergeMap((data: AjaxResponse) => {
                    return of(
                        challengeActions.loadChallengeSuccess(data.response)
                    );
                }),
                catchError((error: AjaxError) => {
                    return of(challengeActions.loadChallengeFail(error));
                })
            );
        })
    );
};

export const loadWeeklyChallenge: Epic = (
    action$: Observable<ChallengeActions>,
    state$: Observable<any>,
    { ajax }: typeof dependencies
): Observable<ChallengeActions> => {
    return action$.pipe(
        ofType(ChallengeTypes.LoadWeeklyChallenge),
        concatMap(() => {
            return ajax({
                url: `${BACKEND_SERVICE_URL}/challenges/weekly`,
                method: 'GET'
            }).pipe(
                mergeMap((data: AjaxResponse) => {
                    return of(
                        challengeActions.loadWeeklyChallengeSuccess(
                            data.response
                        )
                    );
                }),
                catchError((error: AjaxError) => {
                    return of(challengeActions.loadWeeklyChallengeFail(error));
                })
            );
        })
    );
};

export const validateChallenge: Epic = (
    action$: Observable<ChallengeActions>,
    state$: Observable<any>,
    { ajax }: typeof dependencies
): Observable<ChallengeActions> => {
    return action$.pipe(
        ofType(ChallengeTypes.ValidateChallenge),
        concatMap((action: any) => {
            return ajax({
                url: `${BACKEND_SERVICE_URL}/challenges/${action.challengeId}/validate`,
                method: 'POST'
            }).pipe(
                mergeMap((data: AjaxResponse) => {
                    return of(
                        challengeActions.validateChallengeSuccess(data.response)
                    );
                }),
                catchError((error: AjaxError) => {
                    return of(challengeActions.validateChallengeFail(error));
                })
            );
        })
    );
};

export const challengeEpics = combineEpics(
    loadChallenges,
    loadWeeklyChallenge,
    validateChallenge
);
