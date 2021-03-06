import { of, Observable } from 'rxjs';
import { Epic, ofType, combineEpics } from 'redux-observable';
import { concatMap, mergeMap, catchError } from 'rxjs/operators';
import { AjaxResponse, AjaxError } from 'rxjs/ajax';
import { BACKEND_SERVICE_URL } from 'madu/const';
import { profileActions, ProfileActions } from 'madu/actions/profile.actions';
import type { dependencies } from '../app.store';
import { PoiTypes, poiActions, PoiActions } from '../actions/poi.actions';

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
                url: `${BACKEND_SERVICE_URL}/poi`,
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
    state$: any,
    { ajax }: typeof dependencies
): Observable<PoiActions> => {
    return action$.pipe(
        ofType(PoiTypes.LoadPoiById),
        concatMap((action: any) => {
            const headers = {
                Authorization: `Bearer ${state$.value.login.accessToken}`
            };
            return ajax({
                headers,
                url: `${BACKEND_SERVICE_URL}/${action.payload}`,
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

export const likePoi: Epic = (
    action$: Observable<PoiActions>,
    state$: any,
    { ajax }: typeof dependencies
): Observable<PoiActions> => {
    return action$.pipe(
        ofType(PoiTypes.LikePoi),
        concatMap((action: any) => {
            const headers = {
                Authorization: `Bearer ${state$.value.login.accessToken}`
            };
            const { poiId } = action.payload;
            return ajax({
                headers,
                url: `${BACKEND_SERVICE_URL}/poi/${poiId}/like`,
                method: 'POST'
            }).pipe(
                mergeMap((data: AjaxResponse) => {
                    return of(poiActions.likePoiSuccess(data.response));
                }),
                catchError((error: AjaxError) => {
                    return of(poiActions.likePoiFail(error));
                })
            );
        })
    );
};

export const visitPoi: Epic = (
    action$: Observable<PoiActions | ProfileActions>,
    state$: any,
    { ajax }: typeof dependencies
): Observable<PoiActions | ProfileActions> => {
    return action$.pipe(
        ofType(PoiTypes.VisitPoi),
        concatMap((action: any) => {
            const headers = {
                Authorization: `Bearer ${state$.value.login.accessToken}`
            };
            const { poiId } = action.payload;
            return ajax({
                headers,
                url: `${BACKEND_SERVICE_URL}/poi/${poiId}/visited`,
                method: 'POST'
            }).pipe(
                mergeMap((data: AjaxResponse) => {
                    return of(
                        poiActions.visitPoiSuccess(data.response),
                        profileActions.profile()
                    );
                }),
                catchError((error: AjaxError) => {
                    return of(poiActions.visitPoiFail(error));
                })
            );
        })
    );
};

export const poiEpics = combineEpics(loadPoi, loadPoiById, likePoi, visitPoi);
