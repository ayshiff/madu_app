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
                Authorization:
                    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVyaWMucHJpb3VAaGV0aWMubmV0Iiwic3ViIjoiMmE1NjIxOGEtNDNmMi00ZmYzLWFkY2MtNjQyMTg4N2Y1NjZmIiwiaWF0IjoxNTkzNTk1MjYyLCJleHAiOjE1OTM2ODE2NjJ9.WRCElNwGwKenksg4POBWKJenhm8lszs27MuGkwD2dao'
                // `Bearer ${state$.value.login.accessToken}`
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
