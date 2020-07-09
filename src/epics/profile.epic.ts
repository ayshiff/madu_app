import { of, Observable } from 'rxjs';
import { Epic, ofType, combineEpics } from 'redux-observable';
import { concatMap, mergeMap, catchError } from 'rxjs/operators';
import { AjaxResponse, AjaxError } from 'rxjs/ajax';
import { BACKEND_SERVICE_URL } from 'madu/const';
import {
    ProfileTypes,
    profileActions,
    ProfileActions
} from 'madu/actions/profile.actions';
import type { dependencies } from '../app.store';

export const loadProfile: Epic = (
    action$: Observable<ProfileActions>,
    state$: any,
    { ajax }: typeof dependencies
): Observable<ProfileActions> => {
    return action$.pipe(
        ofType(ProfileTypes.Profile),
        concatMap(() => {
            const headers = {
                Authorization: `Bearer ${state$.value.login.accessToken}`
            };
            return ajax({
                headers,
                url: `${BACKEND_SERVICE_URL}/users/profile`,
                method: 'GET'
            }).pipe(
                mergeMap((data: AjaxResponse) => {
                    return of(profileActions.profileSuccess(data.response));
                }),
                catchError((error: AjaxError) => {
                    return of(profileActions.profileFail(error));
                })
            );
        })
    );
};

export const editProfile: Epic = (
    action$: Observable<ProfileActions>,
    state$: any,
    { ajax }: typeof dependencies
): Observable<ProfileActions> => {
    return action$.pipe(
        ofType(ProfileTypes.EditProfile),
        concatMap((action: any) => {
            const headers = {
                Authorization: `Bearer ${state$.value.login.accessToken}`
            };
            return ajax({
                headers,
                url: `${BACKEND_SERVICE_URL}/users/profile`,
                method: 'PUT',
                body: JSON.stringify(action.payload)
            }).pipe(
                mergeMap((data: AjaxResponse) => {
                    return of(profileActions.editProfileSuccess(data.response));
                }),
                catchError((error: AjaxError) => {
                    return of(profileActions.editProfileFail(error));
                })
            );
        })
    );
};

export const addPicture: Epic = (
    action$: Observable<ProfileActions>,
    state$: any,
    { ajax }: typeof dependencies
): Observable<ProfileActions> => {
    return action$.pipe(
        ofType(ProfileTypes.AddPicture),
        concatMap((action: any) => {
            const headers = {
                Authorization: `Bearer ${state$.value.login.accessToken}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            };
            return ajax({
                headers,
                url: `${BACKEND_SERVICE_URL}/users/profile`,
                method: 'PUT',
                body: { image: action.payload }
            }).pipe(
                mergeMap((data: AjaxResponse) => {
                    return of(profileActions.addPictureSuccess(data.response));
                }),
                catchError((error: AjaxError) => {
                    return of(profileActions.addPictureFail(error));
                })
            );
        })
    );
};

export const profileEpics = combineEpics(loadProfile, editProfile, addPicture);
