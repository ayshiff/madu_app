import { of, Observable } from 'rxjs';
import { Epic, ofType, combineEpics } from 'redux-observable';
import { concatMap, mergeMap, catchError } from 'rxjs/operators';
import { AjaxResponse, AjaxError } from 'rxjs/ajax';
import type { dependencies } from '../app.store';
import {
    LoginTypes,
    LoginActions,
    loginActions
} from '../actions/login.actions';

const MOCK_URL = 'http://www.mocky.io/v2/5eba6a622f00004f4c3c37d2';

// /auth/login
// -> access_token

// /companies/domain/{company_string}

// {
//     "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNvcmVudGluLmNyb2l6YXRAaGV0aWMubmV0Iiwic3ViIjoiNmMxMmQ3MzYtNjMzOS00MmI3LTg4NTAtZDJhOGQ4ZGU4NDYyIiwiaWF0IjoxNTkxMTcwNzM4LCJleHAiOjE1OTEyNTcxMzh9.F5SpQHSqWHrzHzqBHuthkLBpYeLFzT_pfmH0S1uGIFg"
// }

// =>
// {
//     "address": {
//         "value": "24 rue du progres montreuil",
//         "lat": 2.412336,
//         "lng": 48.643817
//     },
//     "companyName": "hetic",
//     "domainName": "hetic.net",
// "workplace":string[],
// "department": string[],
//     "employees": "300 - 400",
//     "name": "string",
//     "lastName": "string",
//     "email": "string@hetic.net",
//     "id": "68720aab-bde3-4953-9aaf-9c3151801e44",
//     "status": "not_enough_poi"
// }

export const loadLoginContent: Epic = (
    action$: Observable<LoginActions>,
    state$: Observable<any>,
    { ajax }: typeof dependencies
): Observable<LoginActions> => {
    return action$.pipe(
        ofType(LoginTypes.Login),
        concatMap((action: any) => {
            // TODO: typing
            const { email, password } = action.payload;
            return ajax({
                url: MOCK_URL,
                method: 'POST',
                body: {
                    email,
                    password
                }
            }).pipe(
                mergeMap((data: AjaxResponse) => {
                    return of(loginActions.loginSuccess(data.response));
                }),
                catchError((error: AjaxError) => {
                    return of(loginActions.loginFail(error));
                })
            );
        })
    );
};

export const loginEpics = combineEpics(loadLoginContent);
