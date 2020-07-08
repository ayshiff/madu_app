import { of, Observable } from 'rxjs';
import { Epic, ofType, combineEpics } from 'redux-observable';
import { concatMap, mergeMap, catchError } from 'rxjs/operators';
import { AjaxResponse, AjaxError } from 'rxjs/ajax';
import { BACKEND_SERVICE_URL } from 'madu/const';
import type { dependencies } from '../app.store';
import {
    LoginTypes,
    LoginActions,
    loginActions
} from '../actions/login.actions';

export const loadLoginContent: Epic = (
    action$: Observable<LoginActions>,
    state$: Observable<any>,
    { ajax }: typeof dependencies
): Observable<LoginActions> => {
    return action$.pipe(
        ofType(LoginTypes.Login),
        concatMap((action: any) => {
            const { email, password } = action.payload;
            return ajax({
                url: `${BACKEND_SERVICE_URL}/auth/login`,
                method: 'POST',
                body: {
                    email,
                    password
                }
            }).pipe(
                mergeMap((data: AjaxResponse) => {
                    return of(
                        loginActions.loginSuccess(data.response.access_token)
                    );
                }),
                catchError((error: AjaxError) => {
                    return of(loginActions.loginFail(error));
                })
            );
        })
    );
};

export const loginEpics = combineEpics(loadLoginContent);
