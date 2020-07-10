import { of, Observable } from 'rxjs';
import { Epic, ofType, combineEpics } from 'redux-observable';
import { concatMap, mergeMap, catchError } from 'rxjs/operators';
import { AjaxResponse, AjaxError } from 'rxjs/ajax';
import { BACKEND_SERVICE_URL } from 'madu/const';
import type { dependencies } from '../app.store';
import {
    leaderboardActions,
    LeaderboardTypes,
    LeaderboardActions
} from '../actions/leaderboard.actions';

export const loadLeaderBoard: Epic = (
    action$: Observable<LeaderboardActions>,
    state$: any,
    { ajax }: typeof dependencies
): Observable<LeaderboardActions> => {
    return action$.pipe(
        ofType(LeaderboardTypes.Leaderboard),
        concatMap((action: any) => {
            const headers = {
                Authorization: `Bearer ${state$.value.login.accessToken}`
            };

            return ajax({
                headers,
                url: `${BACKEND_SERVICE_URL}/companies/${action.payload}`,
                method: 'GET'
            }).pipe(
                mergeMap((data: AjaxResponse) => {
                    return of(
                        leaderboardActions.leaderboardSuccess(data.response)
                    );
                }),
                catchError((error: AjaxError) => {
                    return of(leaderboardActions.leaderboardFail(error));
                })
            );
        })
    );
};

export const leaderboardEpics = combineEpics(loadLeaderBoard);
