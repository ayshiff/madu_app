import { of, Observable } from 'rxjs';
import { Epic, ofType, combineEpics } from 'redux-observable';
import { concatMap, mergeMap, catchError } from 'rxjs/operators';
import { AjaxResponse, AjaxError } from 'rxjs/ajax';
import { BACKEND_SERVICE_URL } from 'madu/const';
import type { dependencies } from '../app.store';
import {
    RegisterTypes,
    RegisterActions,
    registerActions
} from '../actions/register.actions';

export const loadRegisterContent: Epic = (
    action$: Observable<RegisterActions>,
    state$: Observable<any>,
    { ajax }: typeof dependencies
): Observable<RegisterActions> => {
    return action$.pipe(
        ofType(RegisterTypes.Register),
        // TODO: remove any type
        concatMap((action: any) => {
            const { domainId, ...arg } = action.payload;
            const headers = { 'Content-Type': 'application/json' };
            return ajax({
                headers,
                url: `${BACKEND_SERVICE_URL}/companies/${domainId}/users`,
                method: 'POST',
                body: JSON.stringify(arg)
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

export const loadCompanyData: Epic = (
    action$: Observable<RegisterActions>,
    state$: Observable<any>,
    { ajax }: typeof dependencies
): Observable<RegisterActions> => {
    return action$.pipe(
        ofType(RegisterTypes.FetchCompany),
        concatMap((action: any) => {
            const { company } = action.payload;
            return ajax({
                url: `${BACKEND_SERVICE_URL}/companies/domain/${company}`,
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

export const registerEpics = combineEpics(loadRegisterContent, loadCompanyData);
