import { of, Observable } from 'rxjs';
import { Epic, ofType, combineEpics } from 'redux-observable';
import { concatMap, mergeMap, catchError } from 'rxjs/operators';
import { AjaxResponse, AjaxError } from 'rxjs/ajax';
import type { dependencies } from '../app.store';
import {
    RegisterTypes,
    RegisterActions,
    registerActions
} from '../actions/register.actions';

const MOCK_URL = 'http://www.mocky.io/v2/5eba6a622f00004f4c3c37d2';

// POST
// /companies/${id}/users
// {
// 	"email": "corentin.croizat@hetic.net",
// 	"firstname": "corentin",
// 	"lastname": "croizat",
//   "workplace": "Progrès",
//   "department": "first",
//   "password": "password"
// }

// {
//     "roles": [
//         "user"
//     ],
//     "email": "corentin.croizat@hetic.net",
//     "firstname": "corentin",
//     "lastname": "croizat"
//   "workplace": "Progrès",
//   "department": "first",,
//     "id": "6c12d736-6339-42b7-8850-d2a8d8de8462",
//     "company_id": "68720aab-bde3-4953-9aaf-9c3151801e44"
// }

export const loadRegisterContent: Epic = (
    action$: Observable<RegisterActions>,
    state$: Observable<any>,
    { ajax }: typeof dependencies
): Observable<RegisterActions> => {
    return action$.pipe(
        ofType(RegisterTypes.Register),
        concatMap(() => {
            return ajax({
                url: MOCK_URL,
                method: 'GET'
            }).pipe(
                mergeMap((data: AjaxResponse) => {
                    return of(registerActions.registerSuccess(data.response));
                }),
                catchError((error: AjaxError) => {
                    return of(registerActions.registerFail(error));
                })
            );
        })
    );
};

export const loadCompanyDomain: Epic = (
    action$: Observable<RegisterActions>,
    state$: Observable<any>,
    { ajax }: typeof dependencies
): Observable<RegisterActions> => {
    return action$.pipe(
        ofType(RegisterTypes.FetchCompany),
        concatMap(() => {
            return ajax({
                url: MOCK_URL,
                method: 'GET'
            }).pipe(
                mergeMap((data: AjaxResponse) => {
                    return of(
                        registerActions.fetchCompanySuccess(data.response)
                    );
                }),
                catchError((error: AjaxError) => {
                    return of(registerActions.fetchCompanyFail(error));
                })
            );
        })
    );
};

export const registerEpics = combineEpics(
    loadRegisterContent,
    loadCompanyDomain
);
