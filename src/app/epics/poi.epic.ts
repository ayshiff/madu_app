import { of, Observable } from 'rxjs';
import { Epic, ofType, combineEpics } from 'redux-observable';
import { concatMap, mergeMap, catchError } from 'rxjs/operators';
import { AjaxResponse, AjaxError } from 'rxjs/ajax';
import type { dependencies } from '../app.store';
import { PoiTypes, poiActions, PoiActions } from '../actions/poi.actions';

const URL = 'http://madu.mrfvrl.fr:3000';

export const loadPoi: Epic = (
    action$: Observable<PoiActions>,
    state$: any,
    { ajax }: typeof dependencies
): Observable<PoiActions> => {
    return action$.pipe(
        ofType(PoiTypes.LoadPoi),
        concatMap(() => {
            const headers = {
                Authorization: `Bearer ${state$.value.login.accessToken}`
            };
            return ajax({
                headers,
                url: `${URL}/poi`,
                method: 'GET'
            }).pipe(
                mergeMap((data: AjaxResponse) => {
                    return of(poiActions.loadPoiSuccess(data.response));
                }),
                catchError((error: AjaxError) => {
                    return of(poiActions.loadPoiFail(error));
                })
            );
        })
    );
};

export const loadPoiById: Epic = (
    action$: Observable<PoiActions>,
    state$: Observable<any>,
    { ajax }: typeof dependencies
): Observable<PoiActions> => {
    return action$.pipe(
        ofType(PoiTypes.LoadPoiById),
        concatMap((action: any) => {
            return ajax({
                url: `${URL}/${action.payload}`,
                method: 'GET'
            }).pipe(
                mergeMap((data: AjaxResponse) => {
                    return of(poiActions.loadPoiByIdSuccess(data.response));
                }),
                catchError((error: AjaxError) => {
                    return of(poiActions.loadPoiByIdFail(error));
                })
            );
        })
    );
};

export const poiEpics = combineEpics(loadPoi, loadPoiById);
